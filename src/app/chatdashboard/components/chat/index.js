import React, { Component } from "react";
import PropTypes from 'prop-types'

import ChatBox from "./components/chatbox";
import ChatInput from "./components/chatinput";
// import MessageThread from "./components/messagethread";

// import ChatHeader from './components/chatheader';
import { connect } from "react-redux";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    workspace_details: state.workspace_details,
    page_details: state.page_details
  };
}
class Chat extends Component {
    constructor(props){
    super(props)
       this.state = {
            messages:props.all_messages,
            stateText:'',
            thread: false,
            messages_history:props.messages_history
          };
    }
  componentWillReceiveProps(nextProps) {
    // const userInfo = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
    // const firstName = userInfo.firstName
    // const lastName = userInfo.lastName
    // var ts = new Date();
         this.setState({
            messages:nextProps.all_messages,
            messages_history:nextProps.messages_history
         })
        //  if(nextProps.listen_messages){
        //    this.setState({
        //     messages_history:[...this.state.messages_history,{'message':listen_messages.message,'createdAt':ts.toTimeString(),senderId:{'firstName':firstName,'lastName':lastName}}]
        //    })
        // }
  }

  onSend = msg => {
    this.setState(state => ({
      ...state,
    //   messages: [...state.messages, msg],
      messages_history:[...this.state.messages_history,{'message':msg,senderId:{'firstName':''}}]
    }));
  };

  onMessageClick = () => {
    this.setState(state => ({
      ...state,
      thread: !state.thread
    }));
  };

  setMessagesInState = (msg) => {
        // console.log('DDDDDDDDDirect msg',msg)

        const userInfo = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
        const firstName = userInfo.firstName
        const lastName = userInfo.lastName
        var ts = new Date();


        this.setState({
        //   messages: [...this.state.messages, msg]
        messages_history:[...this.state.messages_history,{'message':msg,'createdAt':ts.toTimeString(),senderId:{'firstName':firstName,'lastName':lastName}}]
        },
         () => {
          this.props.sendUsingSocket(msg)
        }
        )
  }
  
  render() {
    // console.log('in chats - ??????????????? messages_history',this.state.messages_history)
    const {
      page_details,
      showMsgThread,
      showSideProfile,
      isMobile,
    //   messages,
    //   member_details,
      is_member_selected
    } = this.props;
    // console.log('m trying to get messages',messages)

    // console.log(showMsgThread);
    return (
      //   <Row>
      //     <Col md={this.state.thread ? 16 : 24}>
      <div
        // className="wea-flex-column wea-flex-center wea-flex-jsb wea-no-pad"
        style={{ width: "100%", height: "100%" }}
      >
        <ChatBox
          onMessageClick={this.onMessageClick}
          onDpClick={showSideProfile}
          messages={this.state.messages}
          page_details={page_details}
          showMsgThread={showMsgThread}
          isMobile={isMobile}
          is_member_selected={is_member_selected}
          messages_history={this.state.messages_history}
          actions={this.props.actions}
          history_payload={this.props.history_payload}
          // socket={this.props.socket}
          // current_email={this.props.current_email}
          // member_details={sender_to_receiver_details}
          // setMessages={this.state.stateText}
        />
        <ChatInput
          page_details={page_details}
          className=" wea-box-shadow-light"
          onMessageSend={msg => {
            this.onSend(msg);
          }}
          // socket={this.props.socket}
          // current_email={this.props.current_email}
          // sender_to_receiver_details={sender_to_receiver_details}
          setMessagesInState={this.setMessagesInState}
        />
      </div>
      // </Col>
      //     {this.state.thread && (
      //       <Col
      //         sm={24}
      //         md={this.state.thread ? 8 : 0}
      //         style={{ background: "white" }}
      //       >
      //         <MessageThread />
      //       </Col>
      //     )}
      //   </Row>
    );
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
Chat.propTypes = {
  // closeThread: PropTypes.object,
  page_details: PropTypes.object,
  showMsgThread: PropTypes.object,
  showSideProfile: PropTypes.object,
  isMobile: PropTypes.object,
  messages: PropTypes.object,
  member_details: PropTypes.object,
  socket:PropTypes.object,
  current_email:PropTypes.object,
  messages_history:PropTypes.object,
  all_messages:PropTypes.object,
  is_member_selected:PropTypes.object,
  actions:PropTypes.object,
  history_payload:PropTypes.object,
  sendUsingSocket:PropTypes.object
};
}
export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    { withRef: true }
  )(Chat)
);
