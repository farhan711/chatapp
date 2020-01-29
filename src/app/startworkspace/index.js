import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Avatar, Button } from "antd";
import { FaSistrix, FaAngleRight, FaPlus } from "react-icons/fa";

import * as loginActions from "../../data/redux/login_details/actions";
import "./index.scss";
import { assets } from "../../data/assets/assetsurl";

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Object.assign({}, loginActions), dispatch)
//   };
// }

class StartWorkspace extends Component {
  onLogout = () => {
    // console.log("button clicked", e);
    // e.preventDefault();
    loginActions.logoutUser();
    // actions.logoutUser();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div
          className="wea-flex wea-flex-jsb wea-flex-ac wea-bg-white wea-full-width wea-b-mrgn-15 
                wea-height-60 wea-b-border-light"
          style={{ padding: "0px 30px" }}
        >
          <div className="avatar-header wea-flex wea-flex-jsb">
            <Avatar src="../../data/assets/img/logowe.png" />
            <span className="wea-font-lg wea-font-ultra-bold wea-l-mrgn-15 header">
            </span>
          </div>
          <Button
            className="findworkspace-btn"
            style={{ background: "black", color: "white", height: "40px" }}
            onClick={this.onLogout.bind(this)}
          >
            Logout
          </Button>
        </div>
        <div className="wea-flex wea-flex-center">
          <div className="start-workspace-container wea-box-shadow">
            <div className="wea-pad-10 wea-mrgn-10">
              <div className="start-workspace-title wea-font-lg">
                <b>Start with a Workspace</b>
              </div>
              <p className="wea-b-pad-10">
                Here everything happens in a workspace, Like a virtual office
                building, a workspace is where your team can gather slack to
                communicate and get work done.
              </p>
              <div>
                <hr />
                <div
                  className="wea-flex wea-flex-jsb wea-flex-ac"
                  style={{ padding: "10px 10px" }}
                  onClick={() => {
                    this.props.history.push("/find_workspace");
                  }}
                >
                  <div className="wea-flex">
                    <div
                      style={{
                        padding: "8px 10px",
                        background: "green",
                        borderRadius: "8%"
                      }}
                    >
                      <FaSistrix
                        className="wea-flex-ac wea-flex"
                        style={{ fontSize: "20px", color: "white" }}
                      />
                    </div>
                    <div className="wea-l-pad-10">
                      <div className="start-workspace-subtitle wea-font-xs">
                        <b>Find your workspace</b>
                      </div>
                      <div className="wea-font-xxs">
                        Join/login to existing workspaces on ZZZ
                      </div>
                    </div>
                  </div>

                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                <hr />
                <div
                  className="wea-flex wea-flex-jsb wea-flex-ac"
                  style={{ padding: "10px 10px" }}
                  onClick={() => {
                    this.props.history.push("/create_workspace");
                  }}
                >
                  <div className="wea-flex">
                    <div
                      style={{
                        padding: "8px 10px",
                        background: "blue",
                        borderRadius: "8%"
                      }}
                    >
                      <FaPlus
                        className="wea-flex-ac wea-flex"
                        style={{ fontSize: "20px", color: "white" }}
                      />
                    </div>
                    <div className="wea-l-pad-10">
                      <div className="start-workspace-subtitle wea-font-xs">
                        <b>Create a new workspace</b>
                      </div>
                      <div className="wea-font-xxs">
                        Got your company or organisation on ZZZ
                      </div>
                    </div>
                  </div>

                  <div>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="start-workspace-form-image"
              src={assets.startworkspace}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
StartWorkspace.propTypes = {
  history:PropTypes.object
};
export default StartWorkspace;
// export default connect(null,mapDispatchToProps)(StartWorkspace);
// export default withRouter(connect(null, mapDispatchToProps, null, { withRef: true })(StartWorkspace));
