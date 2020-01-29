import React, { Component } from 'react';
import { Col } from 'antd';
import PropTypes from 'prop-types'
import { FaPlusCircle } from 'react-icons/fa';

import { ROUTE_PATH } from "../../../../data/config/constants";
import ExistingWorkspace from '../existingworkspace';
import './index.scss';
import { assets } from '../../../../data/assets/assetsurl';

class MainProfile extends Component {
    constructor(props) {
        super(props);
    }
    
    onCreateWorkspaceClick = () => {
        this.props.history.push('/create_workspace');
    }
    // const openWorkspace = id => {
    //     console.log(‘my id =====>>> ’,id)
    //     this.props.history.push(${ROUTE_PATH.WORKSPACE}/${id});
    //   };
     openWorkspace = (workspace_name) => {
        // this.props.actions.getWorkspaceDetails(payload);
        // console.log('workspace_name',workspace_name)
       const payload = {
              name : workspace_name
        }
        const goToWorkspacePage = id => {
            // console.log(id)
            // console.log(this.props.history)
            this.props.history.push(`${ROUTE_PATH.WORKSPACE}/${id}`);
          };
         this.props.actions.getWorkspaceDetails(payload, goToWorkspacePage);
     }

    render() {
        const {user_details} = this.props
        return (
            <Col xs={22} md={12} >
                  <div>
                        <div className="create_section" >
                            <div onClick={this.onCreateWorkspaceClick} className="wea-box-shadow wea-pointer wea-b-mrgn-10 wea-box-shadow-light wea-pad-15 wea-flex wea-flex-ac wea-flex-jsb wea-font-lg wea-border-radius-10" style={{background:"white"}}>
                                <div> <b>Create a new workspace</b></div>
                                <FaPlusCircle className="wea-font-xl" />
                            </div>
                        </div>
                    </div>
                <div className="workspaces wea-border-radius-10 wea-bg-white wea-t-mrgn-20 wea-box-shadow wea-pad-15">
                    <div className="" style={{ marginTop: "30px" }} >
                        <div  >
                            <h2 style={{ margin: "5px" }}>Existing Workspaces</h2>
                            {
                                user_details &&  user_details.user_details &&
                               user_details.user_details.workspace.map((workspace_name, index) => {
                                return (
                                    <ExistingWorkspace key={index} index={index} title={workspace_name.name} openWorkspace={this.openWorkspace} />
                                );
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <div style={{ margin: '50px 10px' }} className="create_section" >
                            <div style={{ height: "320px" }}>
                                <img className="create-workspace-picture" src={assets.profileImage} alt="" style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>

            </Col>
        )
    }
}

MainProfile.propTypes = {
    user_details: PropTypes.object,
    history: PropTypes.object,
    actions: PropTypes.object,
  };

export default MainProfile;