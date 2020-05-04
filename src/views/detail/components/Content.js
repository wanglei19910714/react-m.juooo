import React, { Component } from 'react'

export default class Content extends Component {

    componentDidMount(){
        let infoHeight = document.querySelector('.introContainer')
        console.log(infoHeight);
        
    }

    render() {
        
       
        if(this.props.detailInfo.static_data){
            let {static_data={},share_data={}} = this.props.detailInfo
        
            var important_note = {__html:static_data.important_note};
            
            
            var desc = {__html:static_data.show_desc.desc}
            return (
                <div className="content-wrapper">
                    <div className="support">
                        <span>电子票</span>
                        <span>电子票</span>
                    </div>
                    <div className="secondary">
                        <div className="secondary-info">
                            <p className="time">
                            2019.04.04 - 2020.12.31
                            </p>
                            <p className="plcae">
    
                            上海 | 淮海755四楼
            
                            </p>
                            <p className="address">
                            上海淮海中路755号近瑞金二路
    
                            </p>
                        </div>
                        <div className="pointer">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABQVBMVEUAAAD/fzz/dj7/fD3/ZET/Y0T/fzv/dD7/bEL/Z0P/bEH/fTz/ZkP/cz//akL/YUX/hTr/YUT/bUH/fTz/jTf/jTj/gTv/bEH/ZET/fjz/ez3/ezz/ezz/gzv/YUX/YEX/jjj/dD//cUD/izj/YEX/eD7/jjf/dD//YUT/iTn/ezz/hzn/YUX/jTj/YkT/YEX/eD7/X0X/bUH/jjf/hzn/YEX/eT3/eD7/bEH/fD3/iDn/izj/ej3/hDr/Y0T/hzr/dj//aEP/YUX/gzv/b0H/gzv/bEH/gzv/bEH/ej3/jjj/bUH/gDz/fTz/ckD/jzf/bUH/eD7/hTr/gjv/gTv/dT//bEH/Y0T/hTr/iDn/gTv/aUL/ZUP/cUD/Z0P/eD7/bkH/fjz/izj/ej3/fDz/gzv/dT//cz//ijn/jTj/YUVF8FolAAAAVnRSTlMAAhALQurEmE42Lhv7+ff19fHx08avmZdaWjowLP76+vrv7NXSv7y0nJuJbmNYU05EPDs7JRsX+uzs7Onn1szMycO9vbyzrayTk4uHfHx6empqZFFGJpDcPtEAAAHiSURBVDjLfdNnXxpBEAbw5w4pgigKiAgmlhi7SYyaHnvv7Y4DThQrfP8P4LJuvUWf1//fzN7MHNQszmTHUl4p9W9nZhFtY81l6s+e55VKpYdyuRzJW6b5PlanxiOmhW5v04PBMvsNYnghau7v76a1YqHPxNSD5q42HlJMptFoZ2q1VaGs7Fvm8XGCdzxRDUXCPD0dg6Y43Ah8GEHc+MkiRe0fzYzvb9IBqc2GIof5/FGENyPm5mYBQFYxkQJoCuOsEDHONmAPS9MvhmdFqSHIcbptzMlHbxEj1MSrIcgZwJTYRioBJYkkN5UcMrIZtES5qazhj/j4Sx195eY6DDmgZR0t+8xcd0FOGoG0ClUIqlbxLCZt68bmhaoufottBA5xgZtqGCtiY9M6OuDG/Y8psdVfttbtJzfuJM7Jo9nm91S0K4w7i8SQPKEzaU5pM2qaS8CGckJRm/XKObLQOoAL9aZHorF4PJbrU0xzHoCV5kaekGo+WXRJuvF10+wATb9m2Da4meT/ZlrcvdksJA7sLynU1oSXIDL4o1XINB+/QUkhSQuZRsvViPnonjgCKY6yQty4vZ0wEh9VmjFjprNPNT1siKYyjZmObm4+fAHeVqYxE+uiaAB4X5nGzHy4dxaBvADSVUHeBpCfPgAAAABJRU5ErkJggg==" alt=""/>
                        </div>
                    </div>
                    <div className="introContainer">
                        <h3 className="title">演出介绍</h3>
                        <div className="intro_content">
                          
                           <div  dangerouslySetInnerHTML={important_note}></div> 
                           <div  dangerouslySetInnerHTML={desc}></div>

                           <div className="mask"></div>
                           <div className="more">展示全部</div>

                        </div>
                    </div>

                  
                </div>
            )
        }else{
            return ''
        }
       
    }
}


