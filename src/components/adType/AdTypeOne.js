import React, { Component } from 'react'
import {AdContainer} from './AdTypeOne.style'

export default class AdTypeOne extends Component {
    render() {
        return (
            <AdContainer>
                 <img src={this.props.item.ad_img} alt=""/>
            </AdContainer>
        )
    }
}
