import React, { Component } from "react";
import { Modal, Input, Radio } from "antd";
import { FaPlusCircle } from "react-icons/fa";
import PropTypes from 'prop-types'
// import { assets } from "../../data/assets/assetsurl";
import * as workspaceActions from "../../data/redux/workspace_details/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./index.scss";

import SelectUsersModal from "../selectUsersModal";

function mapStateToProps(state) {
  return {
    userlist: state.workspace_details.userlist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, workspaceActions),
      dispatch
    )
  };
}
 class CreateChannel extends Component {

  componentDidMount(){
    // let {actions} = this.props
    // actions.fetchUserlist()
  }

  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    showList: false,
    channel_name:'',
    type: 'global',
    member: []
  };
  
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  onChange = e => {
    this.setState({
      showList: e.target.value
    });

    e.target.value ? this.setState({type: 'private'}) : this.setState({type: 'global'})
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
      const payload = {
        name: this.state.channel_name,
        workspace: this.props.id,
        type: this.state.type,
        member: this.state.member
      }
      this.props.actions.createChannel(payload)

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    // console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  handleChange = (key,e) => {
    this.setState({
     [key]:e.target.value
    })
  }

  addChannelMembers = (add_members) => {
    const userId_members = add_members.map((member) => {
      return ({userId: member._id})
    })
    this.setState({
      member: userId_members
    })
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const { userlist } = this.props;
    // console.log(this.state)
    // console.log('id ===>> ',this.props.id)
    return (
      <div className="wea-pointer">
        <FaPlusCircle
          className={`${this.props.isMobile ? "wea-font-lg" : ""}`}
          onClick={this.showModal}
        />
        <Modal
          title={
            <span className="wea-font-lg" style={{ color: "grey" }}>
              <b>Create Channel</b>
            </span>
          }
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          bodyStyle={{ background: "#ececec" }}
          // style={{ backgroundImage: `url(${assets.modalBackground})` }}
        >
          {/* <div className="modal_bg_img" /> */}
          <div className="wea-flex wea-flex-ac wea-flex-jsb">
            <div className="wea-pad-10" style={{ width: "60%" }}>
              <Input
                className="createworkspace-form-input wea-darken-border-hover wea-darken-border-focus"
                size="large"
                placeholder="Name"
                value={this.state.channel_name}
                onChange={(e) => this.handleChange('channel_name',e)}
              />
            </div>
            <div style={{ width: "40%" }}>
              <Radio.Group onChange={this.onChange} value={this.state.showList}>
                <Radio value={false}>Global</Radio>
                <Radio value={true}>Private</Radio>
              </Radio.Group>
            </div>
          </div>

          {/*<div className="wea-pad-10">
            <Input
              className="createworkspace-form-input wea-darken-border-hover wea-darken-border-focus"
              size="medium"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.handleChange('description',e)}
            />
        </div>*/}
          {this.state.showList && (
            <div className="wea-pad-10">
              <SelectUsersModal 
                sendSelectedMembers={(add_members)=>this.addChannelMembers(add_members)}
                userlist={userlist}/>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
CreateChannel.propTypes = {
  actions: PropTypes.object,
  id:PropTypes.object,
  isMobile:PropTypes.object,
  userlist:PropTypes.object
};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(CreateChannel)
);