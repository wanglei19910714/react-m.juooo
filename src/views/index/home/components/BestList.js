import React, { Component } from 'react'
import AdTypeZero from '../../../../components/adType/AdTypeZero'
import AdTypeOne from '../../../../components/adType/AdTypeOne'
import AdTypeTwo from '../../../../components/adType/AdTypeTwo'
import AdTypeFour from '../../../../components/adType/AdTypeFour'
import {withRouter}  from 'react-router-dom' 

const ad_type_arr  = [AdTypeZero,AdTypeOne,AdTypeTwo,0, AdTypeFour]

class BestList extends Component {

    handleDetail(item){
        // console.log(item.schedular_id);
        console.log(this.props);
        if(item.ad_type*1 ===0){
            this.props.history.push('/detail/'+item.schedular_id)
        }
        
    }
    render() {
        return (
            <div className="best-wrapper">
                <h2>为你推荐</h2>
                <div className="list">
                    {this.props.list.map((item,index)=>{
                        if(!item['ad_type']) item.ad_type = 0
                        let Comp = ad_type_arr[item['ad_type']];
                        return <div key={index}  onClick={this.handleDetail.bind(this,item)}><Comp item={item}   ></Comp></div>

                    })}
                   
                </div>
            </div>
        )
    }
}


export default  withRouter(BestList)