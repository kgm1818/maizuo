import React,{Component}from 'react'
import {Route,Link} from 'react-router-dom'
import Header from '../../component/homePage/home/Header.js'
import homeServices from '../../services/homeServices.js'
import Detail from './detail.js'
import '../../../static/css/cinema.css'

let myScroll=null;
export default class Cinema extends Component{
    constructor({history}){
        super()
        this.state={
            history,
            result:[]
        }
    }
    render(){
        let html=this.state.result.map((item,index)=>{
            return (
                <li className='district' key={index}>
                    <p className='district_title'
                    onClick={this.handlerShow.bind(this,index)}>{item.district}</p>
                    {
                        item.cinemas.map((list,listIndex)=>{
                            return (
                                <Link to={'/cinema/detail/'+list.id}  key={listIndex}>
                                <div className='district_info' style={{display:item.isShow?'':'none'}}>
                                    <h3 className='film_title_box'>
                                        <strong>{list.name}</strong>
                                        <span className='tong_left'>座</span>
                                        <span className='tong_right'>通</span>
                                    </h3>
                                    <p className='activice'>
                                        {
                                            list.labels.map((label,labelIndex)=>{
                                                return (
                                                    <span key={labelIndex} className={label.type.toLowerCase()}>{label.name}</span>
                                                )
                                            })
                                        }
                                    </p>
                                    <p className='description_address'>
                                        <span>{list.address}</span>
                                    </p>
                                    <p className='distance'>{list.distance}</p>
                                    <span className='btnIcon'><i className='iconfont'>&#xe775;</i></span>
                                </div>
                                </Link>
                            )
                        })
                    }
                </li>
            )
        })

       
        return (
           <div className='cinema_box'>
                <Header history={this.state.history}/>
                <div className='cinema_info'>
                    <div className='wrapper_cinema'>
                        <ul>
                            {html}
                        </ul>
                    </div>
                </div>
                <Route path='/cinema/detail/:id' component={Detail}/>
           </div>
        )
    }
    handlerShow(index){

        this.state.result[index].isShow=!this.state.result[index].isShow
        this.setState({result:this.state.result})
    }
    componentDidMount(){
        homeServices.getCinema()
        .then(result=>{
            this.setState({result})
        })

        myScroll=new IScroll('.cinema_info',{
            
        })
    }
    componentDidUpdate(){
        myScroll.refresh()
    }
}