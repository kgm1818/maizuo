import React from 'react'
import Header from '../../component/homePage/home/Header.js'
import homeServices from '../../services/homeServices.js'
let myScroll=null;
export default class City extends React.Component{
    constructor({history}){
        super()
        this.state={
            history,
            result:{}
        }
    }
    render(){
        console.log(this.state.result)
        return (
            <div className='city page'>
               <Header history={this.state.history}/>
                <div className='city_box'>
                    <div className='city_content'>
                        <p className='city_title'>GPS定位你所在的城市</p>
                        <div className='current_adds'>
                            <strong>深圳</strong>
                        </div>
                        <p className='city_title'>热门城市</p>
                        <div className='hot_city'>
                            <span>北京</span>
                            <span>上海</span>
                            <span>广东</span>
                            <span>深圳</span>
                        </div>
                        <p className='city_sort'>按字母排序</p>
                        <ul className='letter_sort'>
                            {
                                this.state.result.Char?this.state.result.Char.map((item,index)=>{
                                    return <li key={index}>
                                        {item.map((list,oIndex)=>{
                                            return <span key={oIndex}>{list}</span>
                                        })}
                                    </li>
                                }):''
                            }
                        </ul>
                        {
                            this.state.result.data?this.state.result.data.map((item,index)=>{
                                return (
                                    <div className='city_list_info' key={index}>
                                        <p>{item.title}</p>
                                        <ul className='city_list'>
                                            {
                                            item.infoCity.map((city,oIndex)=>{
                                                return(
                                                    <li key={oIndex}>
                                                        {
                                                            city.map((info,iIndex)=>{
                                                                return <span key={iIndex}>{info.name}</span>
                                                            })
                                                        }
                                                    </li>
                                                 )
                                            })
                                            }
                                        </ul>
                                    </div>
                                )
                            }):''
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        homeServices.getCitysData()
        .then(result=>{
            this.setState({result})
        })
        myScroll=new IScroll('.city_box')
    }
    componentDidUpdate(){
        myScroll.refresh();
    }
}