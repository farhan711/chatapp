import React, {Component} from 'react';
import {Switch, Avatar} from 'antd';

class Permissions extends Component{
  render(){
    return(
      <div >
      <div align="center"><Avatar/></div>
        
        
        Permissions
        <br />
        The account owner has admin privileges for all the apps and access to all the actions. This cannot be disabled.
        <br />
        Create Channels
        <br />
        Global {<Switch/>} Private {<Switch/>}
        <br />
        Workplace invite
        <br />
        Global {<Switch/>} Private {<Switch/>}
        <br />
        Channel invite
        <br />
        Global {<Switch/>} Private {<Switch/>}
      </div>      
    );
  }
}

export default Permissions;