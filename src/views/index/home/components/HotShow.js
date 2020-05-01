import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

export default class HotShow extends Component {
    render() {
        return (
            <div className="hotShow">

                
              
                    <div className="txt">
                        <h1>热门演出</h1>
                        <button>
                            全部
                            <i>
                            <Icon type='right' />
                            </i>
                        </button>
                    </div>
                    <ul className="list">
                        {this.props.list.map((item,index)=>{
                          return  <li>
                          <img src={item.pic} alt="test"/>
                        <h3>{item.show_name}</h3>
                          </li>
                        })}
                       
                    </ul>
                </div>
               
            
        )
    }
}
