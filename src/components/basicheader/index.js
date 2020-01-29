import React,{Component} from 'react';
import { Avatar } from "antd";
import {history} from '../../data/store/configureStore';

export default class BasicHeader extends Component{
    onHomepageButtonClick = ()=>{
        history.push('/');
    }
    render(){
        return(
            <div className="wea-pointer wea-flex wea-flex-center wea-bg-white wea-full-width wea-b-mrgn-15 
                wea-height-60 wea-b-border-light">
                <div onClick={this.onHomepageButtonClick}>
                    <Avatar className="wea-b-mrgn-5" src="../../data/assets/img/logowe.png" />
                    <span className="wea-font-lg wea-font-ultra-bold wea-l-mrgn-10">ZZZ</span>
                </div>
            </div>
        )
    }
}
