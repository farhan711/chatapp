import React, { Component } from "react";
import { Menu, Dropdown,Modal,Input } from "antd";
import PropTypes from "prop-types";
import {
  FaCircle,
  FaListUl,
  FaRegEnvelope,
  FaAngleDown,
  FaUserPlus,
  FaSignOutAlt
} from "react-icons/fa";

import { ROUTE_PATH, } from "../../data/config/constants";
import { assets } from "../../data/assets/assetsurl";
import CreateChannel from "../../app/createchannel/index";
import StartChat from "../../app/startchat/index";

import "./index.scss";
import "../../data/styles/common.scss";

// const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class AppSider extends Component {
  constructor(props) {
    super(props);
    // this.onClickAddMember = this.onClickAddMember();
    // this.handleChatItemClicked = this.handleChatItemClicked();
    this.state = {
      ModalText: "Content of the modal",
      visible: true,
      confirmLoading: false,
      show_addMemberPop:false,
    };
  }

 onClickAddMember = ({ key }) => {
    if(key === '30'){
      this.setState({
        show_addMemberPop:true,
        visible:true
      })
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    const workspace_id = localStorage.getItem('workspace_id')
    const payload = {
      workspace_id:workspace_id,
      email_id:[this.state.email_value]
    }
    this.props.actions.sendInvitation(payload)
    this.setState({
     visible:false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleChangeEmail = (e) =>{
          this.setState({
            email_value:e.target.value
          })
  }
  handleChannelClick = () => {
    this.props.closeDrawer()
  }

  checkParticularUser = (current_member) => {
    // console.log('checking particular message',current_member)
    const receiver_id = current_member.key
    const userInfo = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
    const sender_id = userInfo._id
    const workspace_id = localStorage.getItem("workspace_id")
    const payload = {
            sender_id:sender_id,
            receiver_id:receiver_id ,
            workspace_id:workspace_id,
            token : this.props.socket_token
    }
    const history_payload = {
        sender_id:sender_id,
        receiver_id:receiver_id ,
        workspace_id:workspace_id,
        skip:0
    }

    this.props.handleChatItemClicked(payload)
    this.props.actions.getChatHistory(history_payload)
    this.props.historyMessagesCallback(history_payload)

    if(this.props.isMobile){
      this.props.closeDrawer()
    }
  };

  render() {
    const { navigateTo, isMobile,allmemberdetails } = this.props;
    const { visible} = this.state;
    const info = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));

    const menu = (
      <Menu onClick={this.onClickAddMember}>
        <Menu.Item key="30">
          <div className="wea-flex wea-flex-ac">
            <FaUserPlus />
            <div className="wea-pad-10">Add Member</div>
          </div>
        </Menu.Item>
        <Menu.Item key="31">
          <div className="wea-flex wea-flex-ac">
            <FaSignOutAlt />
            <div className="wea-pad-10">Logout</div>
          </div>
        </Menu.Item>
      </Menu>
    );
    return (
      <div id="app_sider_wrapper">
        <Menu
          className="wea-t-pad-20 wea-font-white"
          style={{
            // backgroundImage: `url(${assets.Sider})`,
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.1)",
            color: "white",
            borderRight: "none"
          }}
          defaultSelectedKeys={["2"]}
          mode="inline"
          // onClick={member => {
          //   this.checkParticularUser(member);
          // }}
        >
          <Menu.Item
            className="wea-l-pad-10 name-arrow-flex"
            style={{ height: "60px" }}
            key="14"
          >
            <div
              className="wea-flex wea-flex-ac "
              onClick={() => {
                navigateTo(ROUTE_PATH.USER);
              }}
            >
              <img
                src={assets.profileDp}
                className="wea-border-radius-half"
                style={{
                  width: isMobile ? "30px" : "45px",
                  height: isMobile ? "30px" : "45px"
                }}
                alt=""
              />
              <span
                className={`wea-l-pad-10 ${
                  isMobile ? "wea-font-lg" : "wea-font-md"
                } wea-font-bold`}
              >
               
              {info.firstName} {info.lastName}
              </span>
            </div>
            <div style={{margin: "0, auto"}}>
            <Dropdown 
                style={{ height: "60px"}}
                className="wea-r-pad-10 wea-l-pad-10"
               overlay={menu}>
                <span className="wea-bold-white-text-hover">
                  <span
                    className={`wea-tb-pad-10 ${
                      isMobile ? "wea-font-xl" : "wea-font-md"
                    } wea-font-bold wea-capitalize`}
                  >
                 {this.props.workspace_details && this.props.workspace_details.name}{" "}
                  </span>{" "}
                  <span
                    className={`${isMobile ? "wea-font-lg" : "wea-font-md"}`}
                  >
                    <FaAngleDown />
                  </span>
                </span>
              </Dropdown>
              </div>
          </Menu.Item>
          <MenuItemGroup
            key="g1"
            //className="menuitemgroupsection"
            title={
              <span
                className={`wea-line-height-20 wea-no-height wea-font-white 
                ${
                  isMobile ? "wea-font-lg" : "wea-font-sm"
                }`}
              >
                <div className="wea-flex wea-flex-ac wea-flex-jsb">
                  <div>
                    <FaListUl
                      className={`${isMobile ? "wea-font-lg" : "wea-font-11"}`}
                    />
                    <span
                      className={`${
                        isMobile ? "wea-font-lg" : "wea-font-sm"
                      } wea-lr-pad-10`}
                    >
                      Channels
                    </span>
                  </div>
                  <CreateChannel className="wea-pointer" isMobile={isMobile} id={this.props.id}/>
                </div>
              </span>
            }
          >
          <MenuItemGroup
            key="g1"
            className="menuitemgroupsection">
            {this.props.channel_list && this.props.channel_list.map((channel) => {
            
          return (
          <Menu.Item key={channel._id}
              className={`wea-line-height-20 wea-no-height wea-capitalize${
                isMobile ? "wea-font-lg" : "wea-font-sm"
              }`}
              style={{ lineHeight: "0px" }}
              onClick={isMobile ? ()=>this.handleChannelClick(): ''}
            >
              <div>
                 {channel.name}
              </div>
            </Menu.Item>
          )})}
          </MenuItemGroup>
          
          </MenuItemGroup>
          <MenuItemGroup
            className="menuitemgroupsection  "
            key="8"
            title={
              <span
                className="wea-font-bold wea-flex wea-flex-ac wea-flex-jsb wea-font-white"
                style={{ color: "white" }}
              >
                <div className="wea-flex wea-flex-ac">
                  <FaRegEnvelope
                    className={`${isMobile ? "wea-font-xl" : "wea-font-11"}`}
                  />
                  <span
                    className={`wea-lr-pad-10 ${
                      isMobile ? "wea-font-lg" : "wea-font-sm"
                    } wea-font-bold `}
                  >
                    Direct Messages
                  </span>
                </div>
                <StartChat className="wea-pointer" isMobile={isMobile} />
              </span>
            }
          >
            {allmemberdetails && allmemberdetails.map((member) => {
            //   console.log('what are members details mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',member)
                // this.props.socket && this.props.socket.map((socket, index) => {
              return (
                <Menu.Item
                  className={`wea-line-height-20 wea-no-height ${
                    isMobile ? "wea-font-lg" : "wea-font-sm"
                  }`}
                  key={member._id}
                  
                  onClick={member => {
                    this.checkParticularUser(member);
                  }}
                >
                  <span
                    className="wea-font-11 wea-r-pad-10"
                    style={{ color: "green" }}
                  >
                    <FaCircle />
                  </span>
                  {member.email}{" "}
                </Menu.Item>
              );
          })
          }
          </MenuItemGroup>
        </Menu>
        
        {this.state.show_addMemberPop && 
            <Modal
            title={
              <span className="wea-font-lg" style={{ color: "grey" }}>
                <b>Send Invitation</b>
              </span>
            }
            visible={visible}
            onOk={this.handleOk}
            // confirmLoading={confirmLoading}
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
                  placeholder="Enter Email"
                  value={this.state.email_value}
                  onChange={(e) => this.handleChangeEmail(e)}
                />
              </div>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
AppSider.propTypes = {
    actions: PropTypes.object,
    closeDrawer:PropTypes.object,
    socket_token:PropTypes.object,
    handleChatItemClicked:PropTypes.object,
    historyMessagesCallback:PropTypes.object,
    isMobile:PropTypes.object,
    navigateTo:PropTypes.object,
    channel_list:PropTypes.object,
    allmemberdetails:PropTypes.object,
    workspace_details:PropTypes.object,
    id:PropTypes.object
  };
}
