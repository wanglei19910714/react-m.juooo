import React, { Component } from 'react'
import BScroll from '@better-scroll/core'
import {connect} from 'react-redux'
import City from './City'

import {getCategoryList} from '../../../api/perform'

 
 class Nav extends Component {
    constructor(){
        super()
        this.state = {
            activeId:0,
            categoryList:[],
            isShowCity:"city_hidden"
        }
    }
 

    handleClick(id){
        this.setState({
            activeId:id
        })
        this.props.updateShowList(id)
    }

    // 城市列表显示与隐藏
  isShowCity = ()=>{
    this.setState({
      isShowCity: this.state.isShowCity === 'city_hidden' ? 'city_show' : 'city_hidden'
    })
   }


   async componentDidMount(){
       let cate = await getCategoryList()
       this.setState({
           categoryList:[{id:0,"name":"全部"},...cate.data.data],
           activeId:this.props.categoryId
       })
       this.initBscroll()
    }

    initBscroll(){
        new BScroll('.scroll-wrapper', {
            click:true,
            scrollX: true,
            probeType: 3
        })
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="scroll-wrapper">
                    <div className="scroll-content">
                        <ul className="nav">
                           {this.state.categoryList.map((item)=>{
                                return <li key={item.id} 
                                onClick={this.handleClick.bind(this,item.id)}
                                className={item.id*1===this.state.activeId*1?"active":""}>{item.name}
                                </li>
                            }) }
                             
                     </ul>
                    </div>
                </div>
                <div className="city" onClick={this.isShowCity}>
                    {this.props.cityName}
                    <img src="https://m.juooo.com/static/img/add_icon_small.13b13aa.png" alt="" />
                </div>


                <div className={`cityList ${this.state.isShowCity}`}>
                    <City  isShowCity={this.isShowCity}
                        updateShowList={this.props.updateShowList}>
                    </City>
                </div>
            </div>
        )
    }
}

export default connect(state=>state.city)(Nav)