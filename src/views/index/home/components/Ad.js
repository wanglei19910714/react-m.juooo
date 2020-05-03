import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 

class Ad extends Component {
    handleClick(category_id){
        this.props.history.push('/perform/'+category_id)
    }

    render() {
        return (
                <div className="ad-wrap">
                    <div className="ad-label">
                        {this.props.list.map((item)=>{
                         return  <div onClick={this.handleClick.bind(this,item.category_id)}
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
 

export default withRouter(Ad)