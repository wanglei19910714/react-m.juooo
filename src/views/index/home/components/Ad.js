import React, { Component } from 'react'

 

export default class Ad extends Component {
  
   
    render() {
       
        return (
                <div className="ad-wrap">
                    <div className="ad-label">
                        {this.props.list.map((item)=>{
                         return  <div 
                         key={item.id} className="ad-label-item">
                         <img src={item.pic} alt=""/>
                        <span>{item.name}</span>
                     </div>
                        })}
                       
                    </div>
                </div>

       
        )
    }
}
 