import styled from 'styled-components'

export const AdContainer = styled.div`
   color:#232323;
   width:1.7rem;
   height:100%;
   overflow: auto;
   margin-bottom:.04rem;
    .show_img{
        width:1.7rem;
        height:2.31rem;
        position: relative;
        img{
            width:100%;
            height:100%;
        }
        span{
            position:absolute;
            top:.08rem;
            right:.08rem;
            background:#333d49;
            color:#FEFEFE;
            font-size:.12rem;
            padding:0 .04rem;
        }
    }
    .show_info{
        padding:.08rem .1rem .1rem;
        border-color:#ebebeb;
        border-style:solid;
        border-width:0 1px 1px 1px;
        border-radius:.04rem;
        background:#fff;
        .show_info_title{
            position: relative;
            img{
                position:absolute;
                left:0px;
                top:0; 
                width:.33rem;
                height:.17rem;
            }
            h3{
               font-size:.14rem; 
               font-weight:350;
               line-height:.2rem;
               text-indent:.35rem;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
            }
        }
        .show_info_date{
            color:#666;
            font-size:.13rem;
            line-height:.3rem;
            font-weight:100;
        }

        .show_info_price{
            line-height:.3rem;
            .price{
                color:#FF6743;
                font-size:.16rem;
                font-weight:100;
            }
            .tip{
               color:#999;
               font-size:12px; 
            }
        }
        .show_info_tags{
            span{
                display: inline-block;
                padding: .01rem .05rem;
                background-color: #fff1ef;
                border-radius: 0.22667rem;
                color: #FF6743;
                font-size: 0.12rem;
                margin-right: .05rem;
                margin-bottom: .07rem;
            }
        }
    }

`