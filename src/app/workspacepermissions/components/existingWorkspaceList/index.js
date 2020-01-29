import React, { Component } from 'react';
import { Col } from 'antd';
import PropTypes from 'prop-types'

// import { ROUTE_PATH } from "../../../../data/config/constants";
import './index.scss';
import ExistingWorkspace from "../existingworkspace";

class ExistingWorkspaceList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // console.log(this.props.user_details.workspace)
        const {user_details} = this.props
        return (
            <Col xs={22} md={12} >
                <div >
                    <div className="" style={{ marginTop: "48px" }} >
                        <div>
                            <h2 className="heading-fontandcolour" style={{ marginLeft: "51%" }}>Existing Workspaces</h2>
                            {
                                user_details &&  user_details.workspace.map((workspace_name, index) => {
                                return (
                                    <div className="responsive-list" key={index}>
                                    <ExistingWorkspace key={index} index={index} title={workspace_name.name} openWorkspace={this.openWorkspace}
                                     />
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>

            </Col>
        )
    }
}

ExistingWorkspaceList.propTypes = {
    user_details: PropTypes.object,
    history: PropTypes.object,
    actions: PropTypes.object,
  };

export default ExistingWorkspaceList;