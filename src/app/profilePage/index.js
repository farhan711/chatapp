import React, { Component } from "react";
import { Layout, Row } from "antd";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as userActions from "../../data/redux/users_details/actions";
import * as workspaceActions from "../../data/redux/workspace_details/actions";

import SideProfile from "./components/sideProfile";
import MainProfile from "./components/mainProfile";
import BasicHeader from "../../components/basicheader";

const { Content } = Layout;

function mapStateToProps(state) {
  return {
    user_details: state.user_details,
  };
}

function mapDispatchToProps(  dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions, workspaceActions), dispatch)
  };
}

class Profile extends Component {
  componentDidMount() {
    let { actions } = this.props;

    const {user_details}  = this.props
    actions.fetchUserDetails({user_details});
   
  }

  render() {
    // if(this.state.user_details.userDetails.workspace){
    //   console.log(this.state.user_details.userDetails.workspace)
    // }
    const { history, user_details, actions} = this.props;
    
    return (
      <div>
        <BasicHeader />
        <Content style={{ padding: "0 10px", marginTop: "40px" }}>
          <Row type="flex" justify="center">
            {user_details.user_details != undefined && <SideProfile 
            user_details={user_details} /> }
            <MainProfile
              actions={actions}
              history={history}
              user_details={user_details}
            />
            
          </Row>
        </Content>
      </div>
    );
  }
}

Profile.propTypes = {
  user_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(Profile)
);
