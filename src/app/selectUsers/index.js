import React, { Component } from "react";
import { Select } from "antd";
import PropTypes from 'prop-types'
import { assets } from "../../data/assets/assetsurl";

const { Option } = Select;

class SelectUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members,
      userlist: this.props.userlist,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.members && nextProps.userlist) {
      this.setState({
        members: nextProps.members,
        userlist: nextProps.userlist
      })
    }
    const { members } = this.state;
    let permittedMembers = []
    members.map((userObj) => {
      var user = userObj.userId.firstName.concat(" ").concat(userObj.userId.lastName);
      permittedMembers.push(user)
    })
  }

  handleChange = (value) => {
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < this.state.members.length; j++) {
        if (value[i] === (this.state.members[j].userId.firstName + " " + this.state.members[j].userId.lastName)) {
          array1.push(this.state.members[j])
        }
      }
    }
    for (let i = 0; i < value.length; i++) {
      for (let k = 0; k < this.state.userlist.length; k++) {
        if (value[i ] == (this.state.userlist[k]._id)){
          array2.push(this.state.userlist[k])
        }
      }
    }
    this.props.sendSelectedMembers(array1, array2)
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

    const { members } = this.state;
      if(members.length>0){
        let permittedMembers = []
        members.map((userObj) => {
          var user = userObj.userId.firstName.concat(" ").concat(userObj.userId.lastName);
          permittedMembers.push(user)
        })
        return (
          <div>
            <div style={{color:"white", display: "none"}}>{permittedMembers}</div>
              {permittedMembers.length>=0  &&
              <Select
                className="createworkspace-form-input  wea-darken-border-focus"
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select"
                defaultValue={permittedMembers}
                onChange={(value) => this.handleChange(value)}
              >
                {children}
              </Select>
              }
          </div>
        );
      }else{
        return (
          <div>
            <Select
              className="createworkspace-form-input  wea-darken-border-focus"
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              onChange={(value) => this.handleChange(value)}
            >
              {children}
            </Select>
          </div>
        );
      }
    }
  }
  SelectUsers.propTypes = {
    members:PropTypes.object,
    userlist:PropTypes.object,
    sendSelectedMembers:PropTypes.object
  };

export default SelectUsers;
