import React, { Component } from "react";
import { Select } from "antd";
import PropTypes from 'prop-types'
import { assets } from "../../data/assets/assetsurl";

const { Option } = Select;

class SelectUsersModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: this.props.userlist
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.members && nextProps.userlist) {
      this.setState({
        userlist: nextProps.userlist
      })
    }
  }

  handleChange = (value) => {
    let array1 = [];
    for (let i = 0; i < value.length; i++) {
      for (let k = 0; k < this.state.userlist.length; k++) {
        if (value[i ] == (this.state.userlist[k]._id)){
          array1.push(this.state.userlist[k])
        }
      }
    }
    this.props.sendSelectedMembers(array1)
  };
  render() {
    const children = [];
    for (let i = 0; i < this.state.userlist.length; i++) {
      children.push(
        <Option key={this.state.userlist[i]._id}>
          <div className="wea-flex wea-flex-ac">
            <div
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                top: "0"
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  position: "absolute"
                }}
                src={assets.loginImage}
                alt=""
              />
            </div>
            <div className="wea-lr-pad-10">{this.state.userlist[i].firstName + " " + this.state.userlist[i].lastName}</div>
          </div>
        </Option>
      );
    }

    return (
      <div>
        { 
          <Select
            className="createworkspace-form-input  wea-darken-border-focus"
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            
            onChange={(value) => this.handleChange(value)}
          >
            {children}
          </Select>
        }
      </div>
    );
  }
}
SelectUsersModal.propTypes = {
  userlist: PropTypes.object,
  members: PropTypes.object,
  sendSelectedMembers: PropTypes.object,
};

export default SelectUsersModal;
