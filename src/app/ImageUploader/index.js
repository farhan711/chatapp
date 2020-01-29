import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import PropTypes from 'prop-types'
const Dragger = Upload.Dragger;



export default class ImageUploader extends Component {
    render() {
        const {setProfileImg}=this.props;
        const props = {
            name: 'file',
            //listType: 'picture',
            // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                const status = info.file.status;
   
                if (status !== 'uploading') {
                    // console.log("uploading",info.file, info.fileList); 
                }
                if (status === 'done') {
                    setProfileImg(info.file.response.url);
                    // console.log('see info file ===> ',info.file)
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <Icon style={{ color: "black" }} type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
        )
    }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
ImageUploader.propTypes = {
    setProfileImg: PropTypes.object,
  };
}