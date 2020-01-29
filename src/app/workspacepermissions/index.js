import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Switch, Avatar, Button} from 'antd';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import BasicHeader from "../../components/basicheader";
import Image from'../../data/assets/img/wps.jpg';

import * as workspaceActions from "../../data/redux/workspace_details/actions";

import "./index.scss";
import SelectUsers from '../selectUsers';
import ExistingWorkspaceList from './components/existingWorkspaceList';

function mapStateToProps(state) {
  return{
    user_details: state.user_details,
    permissions: state.workspace_details.permissions,
    userlist: state.workspace_details.userlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, workspaceActions), dispatch)
  };
}

class WorkspacePermissions extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle_create_channel:false,
      show_create_channel_members:false,
      members_create_channel: [],
      toggle_workspace_invite:false,
      show_workspace_invite_members: false,
      members_workspace_invitation: [],
      toggle_channel_invite:false,
      show_existing_workspaces:false,
      members_admin_permissions: [],
      permissions:this.props.permissions,
      userlist: [],
      new_members_create_channel: [],
      new_members_workspace_invitation: [],
      new_members_admin_permissions: [],
      type_create_channel: "global",
      type_workspace_invitation: "global"
    }    
  }

  componentDidMount() {
    let {actions} = this.props
    actions.fetchWorkspacePermissions()
    actions.fetchUserlist()
  }

   componentWillReceiveProps(nextProps){
        if(nextProps.permissions && nextProps.permissions.create_channel && nextProps.permissions.create_channel.type === 'global'){
           this.setState({
            toggle_create_channel:false,
            show_create_channel_members:false,
            permissions:nextProps.permissions,
            type_create_channel: "global"
          })
        }
        else if(nextProps.permissions && nextProps.permissions.create_channel && nextProps.permissions.create_channel.type === 'private'){
          this.setState({
            toggle_create_channel:true,
            show_create_channel_members:true,
            members_create_channel: nextProps.permissions.create_channel.members,
            permissions:nextProps.permissions,
            type_create_channel: "private"
          })
        }

        if(nextProps.permissions && nextProps.permissions.workspace_invitation && nextProps.permissions.workspace_invitation.type === 'global'){
          this.setState({
           toggle_workspace_invite:false,
           show_workspace_invite_members: false,
           permissions:nextProps.permissions,
           type_workspace_invitation: "global"
         })
       }
       else if(nextProps.permissions && nextProps.permissions.workspace_invitation && nextProps.permissions.workspace_invitation.type === 'private'){
         this.setState({
           toggle_workspace_invite:true,
           show_workspace_invite_members: true,
           members_workspace_invitation: nextProps.permissions.workspace_invitation.members,
           permissions:nextProps.permissions,
           type_workspace_invitation: "private"
         })
       }
       if(nextProps && nextProps.permissions && nextProps.permissions.admin){
        this.setState({
            members_admin_permissions: nextProps.permissions.admin
          
        })
      }
      if(nextProps && nextProps.userlist){
        this.setState((prevState)=>{
          return {
            ...prevState,
            userlist: nextProps.userlist
          }
        })
      }
   }

   toggleCreateChannel = (checked) => {
     if(checked === false){
        this.setState({
          toggle_create_channel:false,
          show_create_channel_members:false,
          // permissions: {
            // ...this.state.permissions.create_channel,
            type_create_channel: 'global',
          //   members: []            
          // }
          
        })
     }
     else if(checked === true){
      this.setState({
        toggle_create_channel:true,
        show_create_channel_members:true,
        // permissions: {
        // ...this.state.permissions.create_channel,
        type_create_channel: 'private'
      // }
      })
     }
   }

   toggleWorkspaceInvite = (checked) => {
     if(checked === false){
        this.setState({
          toggle_workspace_invite:false,
          show_workspace_invite_members:false,
          // ...this.state.permissions.workspace_invitation,
          type_workspace_invitation: 'global'
        })
      }
    else{
      this.setState({
        toggle_workspace_invite:true,
        show_workspace_invite_members:true,
        //...this.state.permissions.workspace_invitation,
        type_workspace_invitation: 'private'
      })
    }
  }

  toggleChannelInvite = (checked) => {
    if(checked===false) {
      this.setState({
      toggle_channel_invite: false,
      show_existing_workspaces: false
    })
    }if(checked===true) {
      this.setState({
        toggle_channel_invite: true,
        show_existing_workspaces: true
      })
  }
}

  

  receiveUpdatedMembersCreateChannel = (updatedMembers, add_members) => { 
    this.setState({
      members_create_channel: updatedMembers,
      permissions:{
        ...this.state.permissions,
        create_channel:{
          ...this.state.permissions.create_channel,
          members: updatedMembers
        }
      },
      new_members_create_channel: add_members
    })
  }

  receiveUpdatedMembersWorkspaceInvitation = (updatedMembers, add_members) => {
    this.setState({
      members_workspace_invitation: updatedMembers,
      permissions:{
        ...this.state.permissions,
        workspace_invitation:{
          ...this.state.permissions.workspace_invitation,
          members: updatedMembers
        }
      },
      new_members_workspace_invitation: add_members
    }) 
  }

  receiveUpdatedMembersAdminPermissions = (updatedMembers, add_members) => {
    this.setState({
      members_admin_permissions: updatedMembers,
      permissions:{
        ...this.state.permissions,
        admin: updatedMembers
      },
      new_members_admin_permissions: add_members
    }) 
  }

  updatePermissions = () => {
    let {actions} = this.props
    const {permissions, new_members_create_channel, new_members_workspace_invitation, new_members_admin_permissions} = this.state
    const workspace_id = localStorage.getItem("workspace_id")
    
     
    const find_members_create_channel = this.state.type_create_channel==="private"?permissions.create_channel.members.map((member) => {
      return ({userId: member.userId._id})
    }):[]
    const add_members_create_channel = this.state.type_create_channel==="private"?new_members_create_channel.map((member) => {
      return ({userId: member._id})
    }):[]

    const find_members_workspace_invitation = this.state.type_workspace_invitation==="private"?permissions.workspace_invitation.members.map((member) => {
      return ({userId: member.userId._id})
    }):[]
    const add_members_workspace_invitation = this.state.type_workspace_invitation==="private"?new_members_workspace_invitation.map((member) => {
      return ({userId: member._id})
    }):[]

    const find_members_admin_permissions = permissions.admin.map((member) => {
      return ({userId: member.userId._id})
    })
    const add_members_admin_permissions = new_members_admin_permissions.map((member) => {
      return ({userId: member._id})
    })
    
    const payload = {
      workspace_id: workspace_id,
      create_channel:{
        //type:this.state.permissions.create_channel.type,
        type:this.state.type_create_channel,
        members: [...find_members_create_channel, ...add_members_create_channel]
      },
      workspace_invitation:{
        type:this.state.type_workspace_invitation,
        members: [...find_members_workspace_invitation, ...add_members_workspace_invitation]
      },
      admin: [...find_members_admin_permissions, ...add_members_admin_permissions]
    }
    actions.updatePermissions(payload)
    // console.log('payload',payload)
    }
  
  render(){
    const {user_details} = this.props
    const { 
      toggle_create_channel, show_create_channel_members, members_create_channel,
      toggle_workspace_invite, show_workspace_invite_members, members_workspace_invitation,
      toggle_channel_invite, show_existing_workspaces,
      members_admin_permissions,
      userlist
    } = this.state    
    // console.log('this.state.permissions',this.state.permissions)
    return(
      <div>
        <BasicHeader />
        <div align="center">
        
          <div 
            className="create-workspacepermissions-container  wea-border-radius-10 wea-bg-white wea-t-mrgn-20 wea-box-shadow wea-pad-15" 
            align="left" >
            <div className="image">
              <img src={Image} className="image1" />
            </div>
            <div className="avatar" align="center"><Avatar size={100} icon="user"/>
              <div>
                {user_details && user_details.firstName + " " +user_details.lastName}
              </div>
            </div>
            <div className="heading-fontandcolour" style={{fontSize: "20px", marginLeft: "20px"}}>
              Permissions
            </div>
            <div style={{marginLeft: "20px"}}>
              The account owner has admin privileges for all the apps and access to all the actions. This cannot be disabled.
            </div>
            
            <br/>
            
            <div>
              <div className="create-workspacepermissions-container2">
                <div className="heading-fontandcolour">
                  Create Channels
                </div>
                <div className="text-colour">
                  Admin can opt to make the channel creation open for everyone in the workspace by selecting <strong>Global</strong> or permit a
                  few people by selecting <strong>Private</strong>
                </div>
                <br />
                {
                  toggle_create_channel
                  ?
                    <div className="switch-spacing-vertical">
                      Global
                      <span className="switch-spacing"></span>
                      <Switch
                        checked={toggle_create_channel} 
                        onChange={(checked) => this.toggleCreateChannel(checked)}
                      /> 
                      <span className="switch-spacing"> </span>
                      <strong>Private</strong>
                    </div>
                  :
                    <div className="switch-spacing-vertical">
                      <strong>Global</strong>
                      <span className="switch-spacing"></span>
                      <Switch
                        checked={toggle_create_channel} 
                        onChange={(checked) => this.toggleCreateChannel(checked)}
                      /> 
                      <span className="switch-spacing"> </span>
                      Private
                    </div>
                }
                 {show_create_channel_members && userlist && 
                  <SelectUsers 
                    sendSelectedMembers={(updatedMembers, add_members)=>this.receiveUpdatedMembersCreateChannel(updatedMembers, add_members)} 
                    members={members_create_channel}
                    userlist = {userlist} 
                    />}
              </div>
            </div>
        
            <br/>

            <div className="create-workspacepermissions-container2">
              <div className="heading-fontandcolour">
                Workspace invite
              </div>
              <div className="text-colour">
                Admin can opt to make the workplace invite open for everyone 
                in the workspace by selecting <strong>Global</strong> or permit a few people by selecting <strong>Private</strong>
              </div>
      
              <br />
              {
                toggle_workspace_invite 
                ?
                <div className="switch-spacing-vertical">
                  Global <span className="switch-spacing"> </span>
                  <Switch 
                    checked={toggle_workspace_invite} 
                    onChange={(checked) => this.toggleWorkspaceInvite(checked)}/>
                  <span className="switch-spacing"> </span><strong>Private</strong>
                </div>
                :
                <div className="switch-spacing-vertical">
                  <strong>Global</strong> <span className="switch-spacing"> </span>
                  <Switch 
                    checked={toggle_workspace_invite} 
                    onChange={(checked) => this.toggleWorkspaceInvite(checked)}/>
                  <span className="switch-spacing"> </span>Private
                </div>
              }
              {show_workspace_invite_members && 
                <SelectUsers 
                  sendSelectedMembers={
                    (updatedMembers, add_members) => 
                      this.receiveUpdatedMembersWorkspaceInvitation(updatedMembers, add_members)} 
                  members={members_workspace_invitation}
                  userlist = {userlist} />}
            </div>
            
            <br />
          
            <div className="create-workspacepermissions-container2">
              <div className="heading-fontandcolour">
                Channel invite
              </div>
              <div className="text-colour">
                Admin can opt to make the channel invite open for everyone in the workplace by selecting <strong>Global</strong> or permit a
                few people by selecting <strong> Private</strong>
              </div>
              <br />
              <div className="switch-spacing-vertical">
              Global 
              <span className="switch-spacing"> </span>
              <Switch 
                checked={toggle_channel_invite}
                onChange={(checked)=>{this.toggleChannelInvite(checked)}}
              />
              <span className="switch-spacing"> </span>Selective
              </div>
               {show_existing_workspaces===true? <ExistingWorkspaceList user_details={user_details} /> : ''}
            </div>

            <br/>
            
            <div>
              <div className="create-workspacepermissions-container2">
                <div className="heading-fontandcolour">
                  Admin Permissions
                </div>
                <div className="text-colour">
                  Admin can opt to make the channel creation open for everyone in the workspace by selecting <strong>Global</strong> or permit a
                  few people by selecting <strong>Private</strong>
                </div>
                <br />
                {/* {console.log(members_admin_permissions)} */}
                {members_admin_permissions!==undefined  &&
                  <SelectUsers 
                    sendSelectedMembers={
                      (updatedMembers, add_members) => 
                        this.receiveUpdatedMembersAdminPermissions(updatedMembers, add_members)} 
                    members={members_admin_permissions} 
                    userlist = {userlist} />}

              </div>
            </div>

            <br />
            
            <div className="apply-button-div">
              <Button 
                type="primary" 
                size="large" 
                className="apply-button"
                onClick={() => this.updatePermissions()}>
                Apply
                </Button>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

WorkspacePermissions.propTypes = {
  user_details: PropTypes.object.isRequired,
  actions: PropTypes.object,
  permissions: PropTypes.object,
  userlist: PropTypes.array
}

export default withRouter(
  connect(
    mapStateToProps, 
    mapDispatchToProps, 
    null, 
    {withRef: true}
    )(WorkspacePermissions)
    );