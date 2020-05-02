import React, { Component } from 'react'
 
import Header from './components/Header'
import Nav from './components/Nav'
import AdTypeZero from '../../components/adType/AdTypeZero'
import './perform.scss'
import {getCategoryList,getShowList} from '../../api/perform'
import BScroll from '@better-scroll/core'
export default class Perform extends Component {
  constructor(){
    super();
    this.state = {
      category:0,
      categoryList:[],
      showList:[]
    }
  }

  async  componentDidMount(){
    let cate = await getCategoryList()
    let show = await getShowList({category:this.category})

    this.setState({
      categoryList:cate.data.data,
      showList:show.data.data.list
    })

    setTimeout(()=>{
      this.initScroll()
    },1000)
   
  }


  initScroll(){
    this.bscroll = new BScroll('.scroll-wrapper', {
        scrollY: true,
        click: true,
        probeType: 3 
       
      })
     
}


  render(){
    return <div className="perform-pages">
      <Header></Header>
      <Nav list={this.state.categoryList}></Nav>
      <div className="scroll-wrapper">
          <div className="list100 scroll-content">
                    {this.state.showList.map((item,index)=>{
                      return <AdTypeZero item={item} key={index}></AdTypeZero>
                    })}
                   
         </div>
      </div>  
     
    </div>
  }
   
  
}