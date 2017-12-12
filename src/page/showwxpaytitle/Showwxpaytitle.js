import React,{Component} from 'react'
import Header from '../../component/homePage/home/Header.js'
import '../../../static/css/showwx.css'
import homeServices from '../../services/homeServices.js'
export default class Showwxpaytitle extends Component{
    constructor({history}){
        super()
        this.state={
            showwxResult:[],
            history
        }
    }
    render(){
        let showhtml=this.state.showwxResult.map((item,index)=>{
            return(
                <li key={index}>
                    <div className='title_com'>
                        <div className='title_pic'>
                            <img src={item.imageSrc} />
                        </div>
                        <p className='title_info'>{item.name}</p>
                    </div>
                </li>
            )
        })
        return (
            <div className='show_wxpay_box'>
                <Header history={this.state.history}/>
                <div className='show_box'>
                    <div className='show_info'>
                        <div className='swiper-container showwx_box'>
                            <div className="swiper-wrapper">  
                               <div className="swiper-slide">
                                   <img src='../../../static/images/show_banner.jpg' />
                               </div>
                            </div>
                            <div className="swiper-pagination"></div>
                         </div>
                         <div className='title_keyword'>
                            <ul className='title_list'>
                                {showhtml}
                            </ul>
                         </div>
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount(){
       //轮播
      let mySwiper = new Swiper ('.swiper-container', {
        loop: true,
         // 如果需要分页器
         autoplay:3000,
         pagination: {
           el: '.swiper-pagination',
         }

       }) 
       //列表
       homeServices.getShowwxList()
       .then(result=>{
            this.setState({showwxResult:result})
       })

    }
}