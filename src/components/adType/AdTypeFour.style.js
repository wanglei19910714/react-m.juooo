import styled from 'styled-components'

export const AdContainer = styled.div`
 width:1.7rem;
 margin-bottom:.04rem;
 padding:.15rem .15rem .04rem;
 background:#fffcf5;
 border:1px solid #e6c8a8;
 border-radius:.05rem;
 position: relative;
 .card-bg{
    position:absolute;
    top:.05rem;
    right:.05rem;
   
    
    img{
      width:.25rem;
      height:.25rem;
    }
 }
 .search{
  color:#896039;
   .search-info{
    
     .search-info-title{
      display:flex;
      align-items:center;
       h3{
        font-size:.17rem;
        margin-right:.04rem;
        font-weight:450;
        
        padding:.03rem 0;
       }
       img{
         width:.16rem;
         height:.16rem;
       }
     }
     p{
       
      margin-top:0.15rem;
      font-size:.12rem;
     }
   }

   .search-row{
     margin-top:.15rem;
      span{
        display:block;
        width:1.37rem;
        line-height:.31rem;
        margin-bottom:.15rem;
        border-radius:.15rem;
        background:#ffe8d0;
        text-align:center;
      }
   }
 }   
`