import React from 'react'
import homeServices,{getBannerData} from '../../../services/homeServices.js'
let mySwiper=null;
export default class Banner extends React.Component{
    constructor(){
        super()
        this.state={
                result:[]
        }
    }
    render(){
        let html=this.state.result.map((item,index)=>{
            return (
                <div className="swiper-slide" key={index}>
                    <img src={item.imageUrl}/>
                 </div>
            )
               
            
        })
        return (
            <div className='banner_box swiper-container'>
                <div className="swiper-wrapper">  
                    {html}
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
        )
    }
    componentDidMount(){
        //请求数据
        homeServices.getBannerData()
        .then(result=>{
            this.setState({result})
        })
        //轮播
        mySwiper = new Swiper ('.swiper-container', {
           loop: true,
            // 如果需要分页器
            autoplay:3000,
            pagination: {
              el: '.swiper-pagination',
            }

          }) 

    }
    componentDidUpdate(){
       mySwiper.update()
    }
}