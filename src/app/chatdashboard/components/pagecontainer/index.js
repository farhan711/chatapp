import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout } from "antd";

import "./index.scss";

// import * as pageActions from '../../data/redux/page_details/actions';
import * as pageActions from "../../../../data/redux/page_details/actions";
import * as socketActions from "../../../../data/redux/socket_details/actions";
import * as workspaceActions from "../../../../data/redux/workspace_details/actions";
import { APP_LAYOUT } from "../../../../data/config/constants";
import "../../../../data/styles/common.scss";

import AppHeader from "../../../../components/appheader";
// import AppHeader from '../../components/appheader';
import AppSider from "../../../../components/appsider";
import SideDrawer from "./components/drawer";
import MessageThread from "../chat/components/messagethread";
import MediaSection from "../chat/components/mediasection";
import SideProfile from "../../../profilePage/components/sideProfile";
const { Header, Content, Sider } = Layout;

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    workspace_details: state.workspace_details,
    socket_details:state.socket_details,
    channel_list: state.workspace_details.channelList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, pageActions, socketActions,workspaceActions), dispatch)
  };
}
class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.onCollapse = this.onCollapse.bind(this);
    this.state = {
      sider_collapsed:
        props.page_details.device_data.screen_width >= 768 ? false : true,
      visible: false,
      msg_thread_visible: false,
      rightSider: "profile"
    };
  }

  showDrawer = isMobile => {
    this.setState({
      visible: !this.state.visible
    });
    if (this.state.msg_thread_visible && isMobile) {
      this.setState({
        msg_thread_visible: false
      });
    }
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onCollapse = (/*collapse, type*/) => {
    // if (type.toLowerCase() === "clicktrigger") {
    this.setState({
      sider_collapsed: !this.state.visible
    });
    // }
  };

  onMsgThreadCollapse = () => {
    this.setState({
      msg_thread_visible: false
    });
  };

  showMsgThread = isMobile => {
    this.setState({
      msg_thread_visible: !this.state.msg_thread_visible,
      rightSider: "msg_thread"
    });
    if (this.state.visible && isMobile) {
      this.setState({
        visible: false
      });
    }
  };

  showSideProfile = isMobile => {
    this.setState({
      msg_thread_visible: !this.state.msg_thread_visible,
      rightSider: "profile"
    });
    if (this.state.visible && isMobile) {
      this.setState({
        visible: false
      });
    }
  };

  showMediaSection = isMobile => {
    this.setState({
      msg_thread_visible: !this.state.msg_thread_visible,
      rightSider: "media"
    });
    if (this.state.visible && isMobile) {
      this.setState({
        visible: false
      });
    }
  };

  changeDrawerState = () => {
    this.setState({
      visible: false
    })
  } 

  navigateTo = path => {
    this.props.history.push(path);
  };

  historyMessagesCallback = (history_payload) => {
    // console.log('ppppppppppppppppppppppppppppppppppppppppppppppppppppp',history_payload)
    this.props.historyMessagesCallback(history_payload)
  }

  render() {
    // let { sider_collapsed } = this.state;
    const { page_details, admin_details, actions, match ,workspace_details, channel_list} = this.props;
    // const collapsed_width =
    //   page_details.device_data.screen_width >= 768
    //     ? APP_LAYOUT.APP_SIDER_COLLAPSE_WIDTH
    //     : 0;
    const screen_height = page_details.device_data.screen_height;
    const screen_width = page_details.device_data.screen_width;
    const isMobile = page_details.device_data.screen_width <= 800;
  //  console.log('match props ==> ',match.params.id)
    return (
      <Layout style={{ minHeight: `${screen_height}px` }}>
        {page_details.device_data.screen_width >= 768 ? (
          <Sider
            id="sider"
            trigger={null}
            // collapsed
            collapsible
            style={{ height: screen_height }}
            // breakpoint="lg"
            // defaultCollapsed={true}
            collapsed={this.state.visible}
            // collapsedWidth={collapsed_width}
            collapsedWidth="0"
            onCollapse={this.onCollapse}
          >
            <div id="sider-img" />
            <AppSider
              // members={this.props.workspace_details.member}
              allmemberdetails = {workspace_details.userlist}
              navigateTo={this.navigateTo}
              history={this.props.history}
              workspace_details={this.props.workspace_details.workspace}
              channels={workspace_details && workspace_details.workspace &&  workspace_details.workspace.channels && workspace_details.workspace.channels}
              socket={this.props.socket_details.socket_details.socket}
              handleChatItemClicked={this.props.handleChatItemClicked}
              id={match.params.id}
              channel_list={channel_list}
              actions={this.props.actions}
              socket_token={this.props.socket_token}
              historyMessagesCallback={this.historyMessagesCallback}
            />
          </Sider>
        ) : (
          <SideDrawer
            visible={this.state.visible}
            onClose={this.onClose}
            page_details={page_details}
          >
            <div id="sider-img" />
            <AppSider
              members={this.props.workspace_details.member}
              isMobile
              navigateTo={this.navigateTo}
              history={this.props.history}
              workspace_details={this.props.workspace_details}
              handleChatItemClicked={this.props.handleChatItemClicked}
              channel_list={channel_list}
              closeDrawer={()=>this.changeDrawerState()}
              actions={this.props.actions}
              socket_token={this.props.socket_token}
              allmemberdetails = {workspace_details.userlist}
              historyMessagesCallback={this.historyMessagesCallback}
            />
          </SideDrawer>
        )}
        <Layout>
          <Header
            className="wea-box-shadow-light"
            style={{
              height: `${APP_LAYOUT.APP_HEADER_HEIGHT}px`,
              background: "white",
              padding: 0
            }}
          >
            <AppHeader
              showMediaSection={isMobile => {
                this.showMediaSection(isMobile);
              }}
              siderToggle={isMobile => {
                this.showDrawer(isMobile);
              }}
              collapsed={!this.state.visible}
              page_details={page_details}
              admin_details={admin_details}
              actions={actions}
              isMobile={isMobile}
              workspace_details={this.props.workspace_details}
            />
            {/*<hr style={{ color: "grey", backgroundColor: "none" }}/>*/}
          </Header>
          <Content style={{ position: "relative" }} className="">
            {React.cloneElement(this.props.children, {
              showMsgThread: isMobile => {
                this.showMsgThread(isMobile);
              },
              showSideProfile: isMobile => {
                this.showSideProfile(isMobile);
              },
              isMobile: isMobile
            })}
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            <AppFooter />
          </Footer> */}
        </Layout>
        <Sider
          trigger={null}
          width={
            // page_details.device_data.is_mobile
            //   ?
            page_details.device_data.screen_width < 768
              ? page_details.device_data.screen_width
              : 391
          }
          // collapsed
          collapsible
          style={{ height: screen_height, backgroundColor: "white" }}
          // breakpoint="lg"
          // defaultCollapsed={true}
          collapsed={!this.state.msg_thread_visible}
          // collapsedWidth={collapsed_width}
          collapsedWidth="0"
          onCollapse={this.onMsgThreadCollapse}
        >
          {(() => {
            switch (this.state.rightSider) {
              case "profile":
                return (
                  <SideProfile
                    alone
                    isMobile={isMobile}
                    showSideProfile={this.showMsgThread}
                    page_details={page_details}
                  />
                );
              case "msg_thread":
                return <MessageThread closeThread={this.showMsgThread} />;
              case "media":
                return (
                  <MediaSection
                    screen_height={screen_height}
                    screen_width={screen_width}
                    isMobile={isMobile}
                    showMediaSection={this.showMediaSection}
                  />
                );
              default:
                return <MessageThread closeThread={this.showMsgThread} />;
            }
          })()}
        </Sider>
      </Layout>
    );
  }
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
PageContainer.propTypes = {
  actions: PropTypes.object,
  page_details: PropTypes.object,
  workspace_details: PropTypes.object,
  admin_details: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  handleChatItemClicked:PropTypes.object,
  socket_details: PropTypes.object,
  channel_list: PropTypes.object,
  historyMessagesCallback:PropTypes.object,
  socket_token:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(PageContainer)
);
