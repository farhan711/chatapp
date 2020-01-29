import React, { Component } from "react";
import { Input } from "antd";
class EditProfileForm extends Component {
  render() {
    return (
      <div>
        <Input className="wea-tb-mrgn-5" placeholder="First Name" />
        <Input className="wea-tb-mrgn-5" placeholder="Last Name" />
        <Input className="wea-tb-mrgn-5" placeholder="Phone Number" />
        <div className="wea-font-md wea-t-mrgn-10" width={{ width: "100%" }}>
          Social Media Links
        </div>
        <Input className="wea-tb-mrgn-5" placeholder="Facebook" />
        <Input className="wea-tb-mrgn-5" placeholder="LinkedIn" />
      </div>
    );
  }
}

export default EditProfileForm;
