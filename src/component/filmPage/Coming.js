import React from 'react'
import homeServices from '../../services/homeServices.js'
let count=7;
let flag=true;
export default class Coming extends React.Component{
    constructor(){
        super()
        this.state={
            result:[],
            total:0
        }
    }
    render(){
       let html=this.state.result.map((item,index)=>{
            return (
                <li key={index}>
                    <div className='info_pic'>
                        <img src={item.cover} />
                    </div>
                    <div className='film_info_content'>
                        <h3 className='film_title'>
                            {item.name}
                            <span className='rating'>
                                <i className='iconfont'>&#xe775;</i>
                            </span>   
                        </h3>
                        <p className='description_info'>{item.intro}</p>
                        <p className='time_info'>
                            <span className='time_coming'>{item.premiereAt}</span>
                            <span className='time_coming'>{item.type}</span>
                        </p>
                    </div>
            </li>
            )
        })
        return (
            <ul className='list_film'>
                 {html}
            </ul>

        )
    }
    componentDidMount(){
        console.log('333')
        // homeServices.getComing(this.props.page,count)
        homeServices.getComing(this.props.page,count)
        .then(result=>{
            this.setState({
                result:result.films,
                total:result.total
            },()=>{
                this.props.totalPage(this.state.total)
            })
        })

    }
    componentWillReceiveProps(){
        //监听外部属性变化（此时page还是上一次的值）
        if(this.props.page){
           if(flag){
               flag=false;
                homeServices.getComing(this.props.page+1,count)
                .then(result=>{
                    let arr=this.state.result.concat(result.films)
                    console.log(arr)
                    this.setState({result:arr},()=>{
                        flag=true;
                        //触发page++
                        this.props.moreNext()
                    })
                })         
           }
        }
    }
}