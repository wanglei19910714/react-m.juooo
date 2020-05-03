import React, { Component } from 'react'
 
import Header from './components/Header'
import Nav from './components/Nav'
import AdTypeZero from '../../components/adType/AdTypeZero'
import {connect} from 'react-redux'
import './perform.scss'
import {getShowList} from '../../api/perform'
import BScroll from '@better-scroll/core'
 class Perform extends Component {
  constructor(){
    super();
    this.state = {
      categoryId:0,
      showList:[],
    }
  }
  
  async  componentDidMount(){
    let categoryId = this.props.match.params.categoryId ? this.props.match.params.categoryId : 0
   
    let show = await getShowList({category:categoryId,city_id:this.props.currentCityId})
    
    this.setState({
     
      showList:show.data.data.list,
      categoryId:categoryId
    })
    this.initScroll()
   
   
  }
  initScroll(){
    this.bscroll = new BScroll('.scroll-wrapper-list', {
        scrollY: true,
        click: true,
        probeType: 3 
      })
  }

  //列表数据
  updateShowList= async(category=this.state.categoryId,city_id = this.props.currentCityId)=> {
    let show = await getShowList({category,city_id})
    this.setState({
      showList:show.data.data.list,
      categoryId:category
    })
  }


  render(){
    return <div className="perform-pages">
      <Header></Header>
      <Nav updateShowList={this.updateShowList} 
        categoryId={this.props.match.params.categoryId}
      >
      </Nav>
      <div className="scroll-wrapper-list">
          <div className="list">
              {this.state.showList.map((item,index)=>{
                return <AdTypeZero item={item} key={index}></AdTypeZero>
              })}
         </div>
      </div>  
    </div>
  }
}

export default connect(state=>state.city)(Perform)