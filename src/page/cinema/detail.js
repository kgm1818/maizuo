import React,{Component} from 'react'
import homeServices from '../../services/homeServices.js'
export default class Detail extends Component{
    constructor({match}){
        super()
        this.state={
            result:{},
            id:match.params.id
        }
    }
    render(){
        return (
            <div className='cinema_detail'>
               <div className='wrapper_cinema_detail'>
                    <div className='application-view_pic'>
                        <img src='../../../static/images/bg_cover.png' />
                    </div>
                    <ul className='detail_list'>
                        <li>
                            <div className='icon_info'>
                                <i className='iconfont'>&#xe64e;</i>
                            </div>
                            <div className='info_list'>
                                <h3>订座票</h3>
                                <p>选好场次及座位，到影院自助机取票</p>
                            </div>
                            <div className='reservations'>
                                <span>立即订座</span>
                            </div>
                        </li>
                        <li>
                            <div className='icon_info bg_icon_info'>
                                <i className='iconfont'>&#xe748;</i>
                            </div>
                            <div className='info_list'> 
                                <h3>通兑票</h3>
                                <p>有效期内到影院前台兑换影票</p>
                            </div>
                            <div className='reservations bg_none'>
                                <span>立即订票</span>
                            </div>
                        </li>
                        <li>
                            <div className='icon_info bg_seller_info'>
                                <i className='iconfont'>&#xe6ac;</i>
                            </div>
                            <div  className='info_list'>
                                <h3>小卖品</h3>
                                <p>来访记录点击分类</p>
                            </div>
                            <div className='reservations'>
                                <span>购买</span>
                            </div>
                        </li>
                        <li>
                            <div className='icon_info address_info'>
                                <i className='iconfont'>&#xe69e;</i>
                            </div>
                            <div  className='info_list'>
                                <p>{this.state.result.address?
                                    this.state.result.address:''}</p>
                            </div>
                        </li>
                        <li>
                             <div className='icon_info call_info'>
                                <i className='iconfont'>&#xe68c;</i>
                            </div>
                            <div className='info_list'>
                                <p>{this.state.result.telephones?
                                this.state.result.telephones[0]:''}</p>
                            </div>
                        </li>
                    </ul>
                    <div className='pic_icon_info'>
                        <div className='pic_icon'>
                            <ul className='list_icon'>
                               {
                                   this.state.result.services?
                                   this.state.result.services
                                   .map((item,index)=>{
                                       return(
                                        <li key={index}>
                                            <div className='icon_img'>
                                               <img src={item.iconUrl} />
                                            </div>
                                            <p className='pic_title'>
                                                {item.name}
                                            </p>
                                         </li>
                                       )
                                   }):''
                               }
                            </ul>
                            <p className='tishi'>
                            {this.state.result.services?
                            this.state.result.services[0].type==1?
                            this.state.result.services[0].description:'暂无简介' :"暂无简介"}
                            </p>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
    componentDidMount(){
        //console.log(this.props,'444')
        homeServices.getCinemaDetail(this.state.id)
        .then(result=>{
            console.log(result)
            this.setState({result})
        })
    }
}