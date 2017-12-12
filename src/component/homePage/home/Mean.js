import React,{Component}from 'react'
import {Link} from 'react-router-dom'
export default class Mean extends Component{
    constructor(){
        super()
        this.state={
            meanList:[
                {title:'首页',pathname:'/home'},
                {title:'影片',pathname:'/film'},
                {title:'影院',pathname:'/cinema'},
                {title:'商城',pathname:'/showwxpaytitle'},
                {title:'我的',pathname:'/login'},
                {title:'卖座卡',pathname:'/card'}
            ]
        }
    }
    render(){
        let html=this.state.meanList.map((item,index)=>{
            return (
                
                    <li  key={index} onClick={this.getTitle.bind(this,item.title)}>
                        <Link to={item.pathname}>
                        <span className='mean_info'>{item.title}</span>
                        <i className='iconfont'>&#xe775;</i>
                        </Link>
                    </li>
                
            )
        })
        return (
            <div className='mean_box'>
             {/* onClick={this.handlerhind.bind(this)} */}
                <div className='mean'>
                    <ul className='mean_list'>
                        {html}
                    </ul>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(newVal){
    //    console.log(newVal)
        if(newVal.isShow){
            document.querySelector('.mean_box').className='mean_box show_mean_box'
        }else{
            document.querySelector('.mean_box').className='mean_box back_mean_box'
        }
    }
    // handlerhind(){
       
    //     this.props.handlerIsShow(info)
    // }
    getTitle(title){
        let info=false;
        this.props.handlerTitle({title,info})
    }
    
}