import React, { Component } from 'react'
import BScroll from '@better-scroll/core'
const data= [
 {id: 0, name: "全部"},
 {id: 35, name: "演唱会"},
 {id: 36, name: "音乐会"},
 {id: 37, name: "话剧歌剧"},
 {id: 38, name: "儿童亲子"},
 {id: 79, name: "音乐剧"},
 {id: 91, name: "戏曲综艺"},
 {id: 99, name: "展览"},
 {id: 86, name: "舞蹈芭蕾"}]

var list = []
export default class Nav extends Component {
    constructor(){
        super()
       
        this.state = {
            activeId:0,
            flag:true
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.list.length !==0 && state.flag){
            list= [{id:0,"name":"全部"},...props.list]
            
            setTimeout(()=>{
                new BScroll('.scroll-wrapper', {
                    click:true,
                    scrollX: true,
                    probeType: 3
                })
            })

            return {flag:false}
        }
        return {}
    }

    handleClick(id){
        console.log(id);
        
        this.setState({
            activeId:id
        })
    }
    componentDidMount(){
       
       
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="scroll-wrapper">
                    <div className="scroll-content">
                        <ul className="nav">
                           {list.map((item)=>{
                                return <li key={item.id} 
                                onClick={this.handleClick.bind(this,item.id)}
                                className={item.id===this.state.activeId?"active":""}>{item.name}
                                </li>
                            }) }
                             
                     </ul>
                    </div>
                </div>
                <div className="city">
                    全国
                    <img src="https://m.juooo.com/static/img/add_icon_small.13b13aa.png" alt=""/>
                </div>
            </div>
        )
    }
}
