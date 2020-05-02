import React, { Component } from 'react'
import {AdContainer} from './AdTypeZero.style'

export default class AdTypeZero extends Component {
  
    render() {
        let item = this.props.item
        return (
            <AdContainer>
                 <div className="show_img">
                     <img src={item.pic} alt=""/>
        <span>{item.city_name}</span>
                 </div>
                 <div className="show_info">
                     <div className="show_info_title">
                         <img src={item.method_icon} alt=""/>
        <h3>{item.name}</h3>
                     </div>
                     <div className="show_info_date">
        <span>{item.start_show_time}</span>
                     </div>
                     <p className="show_info_price">
                         <span className="price">¥ {item.min_price} </span>
                         <span className="tip">起</span>
                    </p>
                    <p className="show_info_tags">
                        {item.support_desc.map((item,index)=>{
                         return  <span key={index}>{item}</span>
                        })}
                    </p>
                 </div>
            </AdContainer>
        )
    }
}
