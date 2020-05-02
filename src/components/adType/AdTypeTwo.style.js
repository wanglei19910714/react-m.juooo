import styled from 'styled-components'

export const AdContainer = styled.div`
 margin-bottom:.04rem;
 padding:.14rem .1rem;
 width:1.7rem;
 height:2.65rem;
 background:url("https://m.juooo.com/static/img/child_bg.d794527.png");
 border:1px solid  rgba(242,255,229);
 border-radius:.04rem;
 background-size:cover;
  .list{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    li{
      width:.72rem;
      /* margin:0 .01rem; */
      margin-bottom:.04rem;
       
      /* margin-right:.04rem; */
      img{
        width:.72rem;
        height:1rem;
      }
    }
  }
  .tips{
    padding-top:.09rem;
    text-align:center;
    color:#80BE41;
    .am-icon-xxs {
    vertical-align: middle;
    }
  }
`