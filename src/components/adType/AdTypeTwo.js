import React, { Component } from 'react'
import {AdContainer} from './AdTypeTwo.style'
import { Icon} from 'antd-mobile';

export default class AdTypeTwo extends Component {
    render() {
        return (
            <AdContainer>
                <ul className="list">
                    {this.props.item.data.map((imgs,index)=>{
                     return   <li key={index}><img src={imgs.pic}  alt=""/></li>
                    })}
                  
                  
                </ul>
                 <div className="tips">
                <span className="tip-label">{this.props.item.ad_name}</span>
                     <span className="tip-more">
                     <Icon type="right" size="xxs"/>
                     </span>
                 </div>
            </AdContainer>
        )
    }
}
