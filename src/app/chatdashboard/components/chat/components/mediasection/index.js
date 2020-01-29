import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { Tabs } from "antd";
import PropTypes from 'prop-types';
import ImageSection from "./components/imagesection";
import DocSection from "./components/docsection";
import LinkSection from "./components/linksection";

const { TabPane } = Tabs;
function callback() {
  // console.log(key);
}
class MediaSection extends Component {
  render() {
    const {
      isMobile,
      screen_height,
      screen_width,
    } = this.props;
    return (
      <div
        className="wea-flex-column wea-full-parent-height wea-full-parent-height"
        style={{ position: "relative" }}
      >
        <div className="wea-pad-20 wea-box-shadow-light wea-flex wea-flex-ac wea-flex-jsb">
          <div className="">
            <div className="wea-font-md">
              <b>Media</b>
            </div>
            <div className="wea-font-xs">#general</div>
          </div>
          <div
            className="wea-font-lg wea-r-mrgn-10 wea-pointer"
            onClick={this.props.showMediaSection}
          >
            <FaTimes />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <Tabs
              tabBarStyle={{ display: "flex", justifyContent: "center" }}
              size={isMobile ? "large" : "large"}
              tabBarGutter={isMobile ? 40 : 70}
              defaultActiveKey="1"
              onChange={callback}
            >
              <TabPane tab="Images" key="1">
                <ImageSection
                  isMobile={isMobile}
                  screen_height={screen_height}
                  screen_width={screen_width}
                />
              </TabPane>
              <TabPane tab="Docs" key="2">
                <DocSection
                  isMobile={isMobile}
                  screen_height={screen_height}
                  screen_width={screen_width}
                />
              </TabPane>
              <TabPane tab="Links" key="3">
                <LinkSection
                  isMobile={isMobile}
                  screen_height={screen_height}
                  screen_width={screen_width}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
MediaSection.propTypes = {
  screen_width: PropTypes.object,
  screen_height: PropTypes.object,
  isMobile:PropTypes.object,
  showMediaSection:PropTypes.object
};
export default MediaSection;
