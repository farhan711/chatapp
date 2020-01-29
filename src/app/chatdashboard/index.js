import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import socketIOClient from "socket.io-client";

import * as URLS from "../../data/config/urls";

import PageContainer from "./components/pagecontainer";
import SpinnerLoader from '../../components/spinnerloader'
import Chat from "./components/chat";
import * as workspaceActions from "../../data/redux/workspace_details/actions";
// import * as loginActions from "../../data/redux/login_details/actions";
import * as socketActions from "../../data/redux/socket_details/actions";

const socket = socketIOClient.connect(URLS.BASE_SOCKET_URL);

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    workspace_details: state.workspace_details,
    socket_details: state.socket_details,
    history_payload:null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, workspaceActions, socketActions),
      dispatch
    )
  };
}
class ChatDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_email:'',
      particular_member_data_received:'',
      // sender_to_receiver_details:null
      is_member_selected:false,
      listen_messages:null
    }
  }

  componentDidMount() {
    // const token = localStorage.getItem("weaverseUserAuth");
    // socket.emit("authentication", {token });
    // socket.on("authentication",(data) => {
    //   this.props.actions.saveSocketToken(data)
    // })

    localStorage.setItem('workspace_id',this.props.match.params.id)

    this.props.actions.getByWorkspaceId({ id: this.props.match.params.id });
      // const token = localStorage.getItem("weaverseUserAuth");
      // socket.emit("authentication", {token });
      // socket.on("authentication",(data) => {
      //   this.props.actions.saveSocketToken(data)
      // })
    let {actions} = this.props;
    actions.fetchChannelList()
    actions.fetchUserlist()
  }

 componentWillMount(){
  const token = localStorage.getItem("weaverseUserAuth");
  // socket.emit("authentication", {token });
  // socket.on("authentication",(data) => {
  //   this.props.actions.saveSocketToken(data)
  // })
  // const socket_token = localStorage.getItem('socket_token',socket_token)
  // console.log('my socket token',socket_token)
  const userInfo = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
  const user_id = userInfo._id
  if(token !== undefined){
    socket.emit("workspace_room_join",{
      workspace_id:user_id,
      token:token
     })
     socket.on("workspace_room_join",(data) => {
       console.log('m consoling data ',data)
     })
  }
  // const socket_token = localStorage.getItem('socket_token',socket_token)
  // const userInfo = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
  // const user_id = userInfo._id
    // socket.emit("workspace_room_join",{
    //   workspace_id:user_id,
    //   token:socket_token
    //  })
    //  socket.on("workspace_room_join",()=>{
    //    console.log('m consoling data ',data)
    //  })
 }

  handleChatItemClicked = (payload) => {
     console.log('m coming in callback',payload)
     this.setState({
      sender_to_receiver_details:payload,
      is_member_selected:true
    });
    socket.emit("room_leave", {
      room_id:this.props.socket_details.room_id,
      // token : 123
    })
    socket.on("room_leave",() => {
      socket.emit("room_join", {
        room_id:this.props.socket_details.room_id,
        // token : 123
      })
      socket.on("room_join",(data) => {
        console.log('getting back data when room_join &&&&&&&&&&&&&&&&&&&&&&&&&',data)
      })
    })

     socket.emit("get_user_room", payload);
     socket.on("get_user_room",(data) => {
      console.log('getting back data when get_user_room',data)
      this.props.actions.savingRoomId(data)
    })
  //  console.log('this.props.socket_details.room_id',this.props.socket_details.room_id)
  // if(this.props.socket_details.room_id !== undefined){
  //   socket.emit("room_join", {
  //     room_id:this.props.socket_details.room_id,
  //     // token : 123
  //   })
  //   socket.on("room_join",(data) => {
  //     console.log('getting back data when room_join &&&&&&&&&&&&&&&&&&&&&&&&&',data)
  //   })
  // }
  };

  sendUsingSocket = (messages) => {
    // console.log('messages finally',messages)
      const workspace_id = localStorage.getItem('workspace_id');
      const payload = {
        room_id:this.props.socket_details.room_id,
        // token :1234,
        isChannel:false,
        workspace_id:workspace_id,
        chat: messages,
        sender_id: this.state.sender_to_receiver_details.sender_id,
        receiver_id: this.state.sender_to_receiver_details.receiver_id,
      }
      // console.log('message m trying to send using socket @@@@@@@@@@@@@@@@@@@@@@@@@@@@@',payload)
        socket.emit("message", payload);
        
        socket.on("message",(data) => {
          console.log('888888888888888888888888888 powerrrrrrrrrr',data)
         const message_details =  data.chatData
        this.setState({
          listen_messages:message_details
        })
        })
  }

  historyMessagesCallback = (history_paylaod) => {
      this.setState({
          history_payload:history_paylaod
      })
  }

  render() {
    const {socket_details } = this.props;
    if (socket_details.message_history_loading) {
      return (
          <SpinnerLoader />
      );
   } 
   else{
    // console.log('this.props.socket_details.all_messages &&&&&&&&&&&&&&&&&&&&&',this.props.socket_details.all_messages)
    // console.log('fffffffffffffffffffffffffffffffffffff',this.state.history_payload)
    return (
      <PageContainer workspace_details={this.props.workspace_details} handleChatItemClicked={this.handleChatItemClicked.bind(this)} actions={this.props.actions}  match={this.props.match} socket_token={123} historyMessagesCallback={this.historyMessagesCallback}>
        <Chat workspace_details={this.props.workspace_details} messages={this.state.particular_member_data_received.message} sender_to_receiver_details={this.state.sender_to_receiver_details} match={this.props.match}
        room_id={this.props.socket_details.room_id} sendUsingSocket={this.sendUsingSocket}
        is_member_selected={this.state.is_member_selected} all_messages={this.props.socket_details.all_messages} messages_history={this.props.socket_details.messages_history} actions={this.props.actions} history_payload={this.state.history_payload} listen_messages={this.state.listen_messages}/>
      </PageContainer>
    );
   }
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {

ChatDashboard.propTypes = {
  page_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  workspace_details: PropTypes.object,
  chat_details: PropTypes.object,
  socket_details: PropTypes.object,
};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(ChatDashboard)
);
