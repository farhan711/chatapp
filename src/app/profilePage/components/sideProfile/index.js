import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { assets } from "../../../../data/assets/assetsurl";
import PropTypes from 'prop-types';

import * as userActions from "../../../../data/redux/users_details/actions";
import ImageUpload from "../../../imageUpload";
import dotProps from 'dot-prop-immutable';
import { Input, Button, Tooltip, Col} from "antd";
import { FaTimes } from "react-icons/fa";

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions), dispatch)
  };
}
class SideProfile extends Component {
  constructor(props) {
    super(props);
      this.state = {
      user_details:this.props && this.props.user_details,
      profile_img:assets.profileDp
    };
  }  

  // state = {
  //   ModalText: "Content of the modal",
  //   visible: false,
  //   confirmLoading: false,
  // show_edit_profile_form: false
  // };
  setProfileImg = (imgsrc)=>{
    // console.log(imgsrc);
    this.setState({
      profile_img:imgsrc
    })
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  onEditButtonClick = () => {
    this.setState({
      show_edit_profile_form: !this.state.show_edit_profile_form
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
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

  updateProfileState = (path, value) => {
    this.setState(dotProps.set(this.state, path, value));
 };

 updateProfile = () => {
   const payload = {
    user_details:this.state.user_details.user_details,
   }
   this.props.actions.updateProfile(payload.user_details)
};

  render() {
    const title = <span>Click to edit</span>
    const text = 'Edit and save details';
    const { page_details} = this.props;
    var { user_details} = this.state;
    
    return (
      <Col md={this.props.alone ? 24 : 8} xs={24}>
        <div
          className="wea-bg-white wea-border-radius-4 wea-box-shadow"
          style={{
            height: this.props.alone
              ? page_details.device_data.screen_height
              : "890px",
            margin: this.props.alone ? "0" : "0px 20px 20px",
            position: "relative"
          }}
        >
          {this.props.alone && (
            <div
              className="wea-font-lg wea-pad-10"
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                cursor: "pointer"
              }}
              onClick={this.props.showSideProfile}
            >
              <FaTimes />
            </div>
          )}
          <div
            style={{
              height: this.props.alone
                ? this.props.isMobile
                  ? "130px"
                  : "150px"
                : "200px"
            }}
          >
            <Tooltip placement="left" title={title}>
              <img
                onClick={this.showModal}
                className="wea-img-contain wea-pointer"
                src={assets.coverImage}
                alt=""
              />
              <ImageUpload
                options={this.state}
                setProfileImg={this.setProfileImg}
                funcs={{
                  showModal: this.showModal,
                  handleOk: this.handleOk,
                  handleCancel: this.handleCancel
                }}
              />
            </Tooltip>
          </div>
          <div
            className="wea-flex-column wea-flex-ac wea-lr-pad-10"
            style={{
              margin:
                this.props.isMobile && this.props.alone ? "-55px 0" : "-75px 0"
            }}
          >
            <div
              style={{
                width:
                  this.props.isMobile && this.props.alone ? "110px" : "150px",
                height:
                  this.props.isMobile && this.props.alone ? "110px" : "150px",
                zIndex: "2"
              }}
            >
              <Tooltip placement="right" title={title}>
                <img
                  onClick={this.showModal}
                  className="wea-img-contain wea-border-radius-half wea-pointer"
                  src={this.state.profile_img}
                  alt=""
                />
                <ImageUpload
                  options={this.state}
                  setProfileImg={this.setProfileImg}
                  funcs={{
                    showModal: this.showModal,
                    handleOk: this.handleOk,
                    handleCancel: this.handleCancel
                  }}
                />
              </Tooltip>
            </div>
            {
              user_details && user_details.user_details && user_details.user_details != undefined ?
              <React.Fragment>
              <div className="name wea-font-18 wea-r-pad-20 wea-l-pad-20 wea-t-pad-20">{ user_details && user_details.user_details && user_details.user_details.firstName} { user_details && user_details.user_details && user_details.user_details.lastName}</div>
             
            <div className="wea-t-pad-10 wea-b-pad-10" style={{color:'grey',fontSize:'16px'}}>Loream poream doream </div>
            <div
              className="wea-flex wea-flex-jsb wea-lr-pad-20 wea-tb-pad-10"
              style={{ width: "100%" }}
            >
              <div className="wea-font-md">Edit Profile</div>
              <Tooltip placement="top" title={text}><Button
                className="entity-6 wea-border-radius-4 wea-font-white"
                 onClick={this.updateProfile}>
                Save Profile
              </Button></Tooltip>
            </div>
            <div className="wea-pad-15">
              <Input className="wea-tb-mrgn-5" placeholder="First Name" value={user_details && user_details.user_details && user_details.user_details.firstName} onChange={(e) => this.updateProfileState('user_details.user_details.firstName', e.target.value)}/>
              <Input className="wea-tb-mrgn-5" placeholder="Last Name" value ={ user_details && user_details.user_details && user_details.user_details.lastName} onChange={(e) => this.updateProfileState('user_details.user_details.lastName', e.target.value)}/>
              <Input className="wea-tb-mrgn-5" disabled placeholder="email" value ={user_details && user_details.user_details && user_details.user_details.email}/>
              <Input className="wea-tb-mrgn-5" placeholder="Status" value ={ user_details && user_details.user_details && user_details.user_details.status} onChange={(e) => this.updateProfileState('user_details.user_details.status', e.target.value)}/>
              <Input className="wea-tb-mrgn-5" placeholder="designation" value={ user_details && user_details.user_details && user_details.user_details.designation} onChange={(e) => this.updateProfileState('user_details.user_details.designation', e.target.value)}/>
              <Input className="wea-tb-mrgn-5" placeholder="experience" value ={ user_details && user_details.user_details && user_details.user_details.experience} onChange={(e) => this.updateProfileState('user_details.user_details.experience', e.target.value)}/>

              <div className="wea-tb-pad-20 wea-font-bold">Social Media Links</div>
            {/* <Input className="wea-tb-mrgn-5" placeholder="Facebook" value={user_details && user_details.userDetails && user_details.user_details.socialLinks.facebook} onChange={(e) => this.updateProfileState('user_details.userDetails.socialLinks.facebook', e.target.value)}/>
             <Input className="wea-tb-mrgn-5" placeholder="LinkedIn" value={user_details && user_details.userDetails &&  user_details.user_details.socialLinks.linkedin} onChange={(e) => this.updateProfileState('user_details.userDetails.socialLinks.linkedin', e.target.value)}/>
            <Input className="wea-tb-mrgn-5" placeholder="twitter" value={user_details && user_details.userDetails &&  user_details.user_details.socialLinks.twitter}  onChange={(e) => this.updateProfileState('user_details.userDetails.socialLinks.twitter', e.target.value)}/> */}
            </div>
             
              </React.Fragment>
              : <h1>Empty data</h1>
            }

          </div>
          {/* <div>
                        <div className="update-status wea-bg-white wea-border-radius-10 wea-flex wea-flex-ac wea-flex-jcb" style={{ height: "" }}>
                            <Input className="wea-mrgn-10 wea-border-none" placeholder="Update Status!" />
                            <h3 style={{ margin: "" }}>Edit Profile</h3>
                            <Button className="entity-6 wea-border-radius-4 wea-font-white" style={{ width: '', height: '' }}>Edit</Button>
                            <div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </Col>
    );
  }
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
SideProfile.propTypes = {
  user_details: PropTypes.object,
  page_details:PropTypes.object,
  history: PropTypes.object,
  actions:PropTypes.object,
  alone:PropTypes.object,
  showSideProfile:PropTypes.object,
  isMobile:PropTypes.func
};
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(SideProfile)
);
