import React, { Component } from 'react';
import { assets } from "../../data/assets/assetsurl";

import './index.scss';

export default class SpinnerLoader extends Component {
    render() {
        return (
            <div className="loading">
                  <img className="loading-image" src={assets.dotsGIF} />
                  <div className="loading-text">Loading ...</div>
            </div>
        );
    }
}