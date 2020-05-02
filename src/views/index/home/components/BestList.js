import React, { Component } from 'react'
import AdTypeZero from '../../../../components/adType/AdTypeZero'
import AdTypeOne from '../../../../components/adType/AdTypeOne'
import AdTypeTwo from '../../../../components/adType/AdTypeTwo'
import AdTypeFour from '../../../../components/adType/AdTypeFour'
 

const ad_type_arr  = [AdTypeZero,AdTypeOne,AdTypeTwo,0, AdTypeFour]

export default class BestList extends Component {
    render() {
        return (
            <div className="best-wrapper">
                <h2>为你推荐</h2>
                <div className="list">
                    {this.props.list.map((item,index)=>{
                        if(!item['ad_type']) item.ad_type = 0
                        let Comp = ad_type_arr[item['ad_type']];
                        return <div key={index}><Comp item={item}></Comp></div>

                    })}
                   
                </div>
            </div>
        )
    }
}
