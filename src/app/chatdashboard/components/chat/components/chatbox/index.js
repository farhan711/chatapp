import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types'

import Message from "../message";
import { assets } from "../../../../../../data/assets/assetsurl";
import "./index.scss";
// const message = "Hey sunny here";
class ChatBox extends Component {
    constructor(props){
        super(props)
           this.state = {
                hasMore:false,
                isLoading:false,
              };
        }
    fetchMoreMessages = () => {
        // this.setState({
        //     isLoading:true
        // })
        // const {history_payload} = this.props
        // const payload = {
        //     sender_id:history_payload.sender_id,
        //     receiver_id:history_payload.receiver_id ,
        //     workspace_id:history_payload.workspace_id,
        //     skip:10
        // }
        // this.props.actions.getChatHistory(payload)
    }

  render() {
    const {
    //   messages,
      page_details,
    //   showMsgThread,
      onDpClick,
      isMobile,
    //   member_details,
    //   setMessages,
      is_member_selected
    } = this.props;
    const {isLoading} = this.state

    // console.log('is_member_selected ,,,,,,,,,,,,,',is_member_selected)
    // console.log('++++++++++++++++++++++++++++++++=======',messages)
    // console.log('this.props.history_payload',this.props.history_payload)
    if(is_member_selected === false) {
    return(
      <div>
      <div style={{backgroundColor:"white"}}>
      <div style={{ textAlign: "center", width: "80%", height: "80%", margin: "", 
        fontSize: "70px",
        fontFamily: "Baskervville",marginLeft:"10%",
      marginBottom: "0%",
    }}>
      Welcome
      </div>
          <div>
        <center>
          <img
            src={assets.emptyPageGIF}
            alt=""
            style={{textAlign: "center",
          
            maxWidth: "100%",
            height: "auto"}}
          /></center>
        </div>
        <center>
        <div 
          style={{ textAlign: "justify", width: "90%", height: "100%",marginLeft:"15px",
          marginRight: "15px",
          fontSize: "35px",
          fontFamily: "Baskervville",  
          marginTop: "70px"
        }}>
          <p>
            Bring in the band together
            and start creating the most magical symphony. 
        
            Invite your peers and build topic specific conversations through Channels.<br/>
          </p>
        </div>
        </center>
      </div></div>
    )
    }
    else {
      return (
        <div style={{ width: "100%", height: "100%", background: "white" }}>
          <div
            className="wea-pad-15 wea-border-top-thin wea-border-bottom-thin chatbox-on-mobile chatbox-on-pc"
            style={{
              background: "white",
              width: "100%",
              overflowY: "scroll",
              overflowX: "hidden",
              height: `${page_details.device_data.screen_height - 64 - 40}px`
            }}
          >
            <InfiniteScroll
            pageStart={0}
            loadMore={this.fetchMoreMessages}
            hasMore={false}
        >
            {this.props.messages_history && this.props.messages_history.map((message_history,key) => (
                          <Message page_details={page_details}
                          // onMessageClick={showMsgThread}
                           onDpClick={onDpClick}
                           isMobile={isMobile} 
                           onMessageClick={this.props.onMessageClick}
                           text={message_history.message} 
                           message_history={message_history}
                           key={key}/>
                      ))}
            {isLoading &&
            <div>Loading...</div>
            }
            {/* {!hasMore &&
            <div>You did it! You reached the end!</div>
            } */}
 

            {/* <Message
              page_details={page_details}
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
              link
            />
            <Message
              page_details={page_details}
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
              media
            />
            <Message
              page_details={page_details}
              reply
              emoji
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
              text={message}
            /> */}
            <hr className="hr-text" data-content="Today" />
            {/* <Message
              page_details={page_details}
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
              image
            />
            <Message
              page_details={page_details}
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
            />
            <Message
              page_details={page_details}
              onMessageClick={showMsgThread}
              onDpClick={onDpClick}
              isMobile={isMobile}
              link
            /> */}


           {/* for link section */}

           {/* {messages && messages.map((message,index) => {
             return(
                  <Message
                    key={index}
                    index={index}
                    page_details={page_details}
                    onMessageClick={showMsgThread}
                    onDpClick={onDpClick}
                    isMobile={isMobile}
                    link
                    message={message}
                    member_details={member_details}
                    setMessages={setMessages}
            />
             )
           })} */}

         </InfiniteScroll>
          </div>
        </div>
      );
    }
  }
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
ChatBox.propTypes = {
  messages:PropTypes.object,
  page_details:PropTypes.object,
  showMsgThread:PropTypes.object,
  onDpClick:PropTypes.object,
  isMobile:PropTypes.object,
  member_details:PropTypes.object,
  setMessages:PropTypes.object,
  history_payload:PropTypes.object,
  messages_history:PropTypes.object,
  is_member_selected:PropTypes.object,
  onMessageClick:PropTypes.object
};
}

export default ChatBox;
