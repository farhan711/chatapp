import React, { Component } from "react";
import { Modal, Button } from "antd";
import PropTypes from 'prop-types'
import ImageUploader from "../ImageUploader";

export default class ImageUpload extends Component {
  render() {
    const { visible, confirmLoading } = this.props.options;
    const { handleCancel, handleOk } = this.props.funcs;
    return (
      <Modal
        title="Upload Image"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            style={{ background: "grey", color: "white" }}
            onClick={this.handleCancel}
          >
            Return
          </Button>,
          <Button
            key="submit"
            style={{ background: "black", color: "white" }}
            loading={confirmLoading}
            onClick={handleOk}
          >
            Upload
          </Button>
        ]}
      >
        <div className="wea-pad-10">
          <ImageUploader setProfileImg={this.props.setProfileImg} />
        </div>
      </Modal>
    );
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
ImageUpload.propTypes = {
  options: PropTypes.object,
  funcs: PropTypes.object,
  setProfileImg: PropTypes.object
};
}
