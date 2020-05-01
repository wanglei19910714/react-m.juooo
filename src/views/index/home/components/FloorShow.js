import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

export default class FloorShow extends Component {
   
    render() {
        let arrFirst = this.props.list[0] ? this.props.list[0] :{}
       
        
        return (
            <div className="floorShow">
                    <div className="txt">
                        <h1>舞台剧</h1>
                        <button>
                            <i>
                            <Icon type='right' />
                            </i>
                        </button>
                    </div>
                    <div className="bigImg">
                        <img src={arrFirst.pic} alt=""/>
                        
                        <div className="text">
                            <p>
                            <strong >
                                {arrFirst.display_show_time}
                            </strong> 
                                <span> {arrFirst.week} </span>
                            </p>
                             <h3 >
                             {arrFirst.schedular_name}
                            </h3> 
                            <p className="address">
                            {arrFirst.city_name} |
                            {arrFirst.venue_name}
                            </p>
                      </div>


                    </div>
                    <ul className="list">
                        {this.props.list.slice(1).map((item,index)=>{
                          return  <li>
                          <img src={item.pic} alt="test"/>
                        <h3>{item.schedular_name}</h3>
                        <span>¥{parseInt(item.low_price)}</span><i> 起</i>
                          </li>
                        })}
                       
                    </ul>
                </div>
               
            
        )
    }
}
