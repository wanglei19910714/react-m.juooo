import React, { Component } from 'react'
import {AdContainer} from './AdTypeFour.style'

export default class AdTypeFour extends Component {
    render() {
        return (
            <AdContainer>
                <div className="search">
                    <div className="search-info">
                        <div className="search-info-title">
                            <h3>热门搜索</h3>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEUAAACJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDmJYDnfyg/SAAAAKHRSTlMA7C30WQr4vnPwrp+EJRXNycK0SkQ+ODEP1MZ5YB7mo5qUkWtm3reQfa68twAAAP5JREFUOMu9klmOg0AMRM0OYQkQYICQfZZ3/xMO0tCtDo0yf3lfLrmEy6ZFkz/SqIwucS6btBWKshGbGyZXqx8BXup3eeenCVCt+hWEWb+IPgthFJMdOJ2Zx4GdoR/guWLy4cGnVv2sfHlmgiRQIlaZTPbGJ0o4WIYJvpcyAC+wDAUkKhCUYnOG4q9q1EpWiPylYYCTHjGKTQJLsn4zZA5fetrWmkdIjTpa94MzNHrl0D71HQbRxNbPyngeW4PTGjpmvfoI3Ap12gjAca0nF9axf5iyPUBoOX4wCGPXsRxdzUJyn2+84ZDCz9LL9dgGc60d27zZMcg/jlpecvLlF8skIIw+ifHVAAAAAElFTkSuQmCC" alt=""/>
                        </div>
                        <p>大家都在看</p>
                    </div>
                    <div className="search-row">
                        {this.props.item.data.slice(0,4).map((item,index)=>{
                         return   <span key={index}>{item.word}</span>
                        })}
                      
                        {/* <span>冰雪奇缘</span>
                        <span>冰雪奇缘</span>
                        <span>冰雪奇缘</span> */}
                    </div>
                </div>
                <div className="card-bg">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAArlBMVEUAAADcoWncoWncoWncoWncoWndomrcoWncoWncoWncoWnjsH/coWnswpvswpvrwJfcoWncoWncoWncoWnpvJHcoWnswpvcoWncoWncoWnswpvcoWnswprswprswZrswpvswZjcoWncoWnmtojcoWnswpveo2zswpvswpvrwJjswZnrv5fswpvcoWnswpvswpvswpvirn3epG3coWnswpvswpvcoWnls4TswpvswpugmLQyAAAAOXRSTlMAM2aZAzEoGRIgEAdd/PaoLFglDJBwUVBKNB4W8NHEtZeSimZCOzgy6My7roV6d3RiSjsU4YaDW1pKbL0fAAABr0lEQVRIx7XV12KCMBSA4ZPI3lL33lpXHV28/4tVhhJCDuSm/5U3H2QK1KUEPYc6KxOkMx2a1rUkRUhfOYaUuFOmpiJDupStLyEsWsiRIBotJrECfY7o/0DwgclPvwkS9QpElSFG9Vba285vZ2tzR4zZlTfuvHamXhTnTTuFh+nN57HkxHoc5Y3XhYdpvabTXfHre3YjNvcMdR0jvmONuETlLpVi4AmIN6gifiTqMLQU9CWukLhXomrI1f2IxLXIo0CIpgiZkCRTMLxPhOxImlY2HkJcghq3jhDzeXRu7e/25vFjh5AReWWlot2IowAThLznJEivWyNtBV8ImZG8ZKkXGTnBFiE/DAnjG9jImmMjGxMmNV60eUYWAGshWRK2+EbSjMR/szOB8FmQTmY4T19ixaPcl5drUyTJNdZPD9G+Q5zNn//9jfAkyTCN/Dh77PVq9QnXUHRrZqPnrvtXUsoCUdqy5R/81nJDBNlCMiR4AfJ9V3GiY194VKg2Qmz0NSZg6dhMFEALxcN6AzxFEwkDqlLCsrCgJp1bA82G2mxTZYABUimGqalEDUIdmfcfq1143ayueDgAAAAASUVORK5CYII=" alt=""/>
                </div>
            </AdContainer>
        )
    }
}
