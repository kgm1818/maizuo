import React from 'react'
import {Link} from 'react-router-dom'
import homeServices from '../../../services/homeServices.js'
// let {getHotFilemsData} = homeServices;
export default class List extends React.Component{
    constructor({history}){
        super()
        this.state={
            history,
            result:[],
            willFiles:[]
        }
    }
    render(){
        let html=this.state.result.map((item,index)=>{
            return  (
                 <li key={index} className='hot_con' onClick={this.btnDetail.bind(this,index)}>
                     <div className='img_info'>
                         <img src={item.cover} />
                       </div>
                          <div className='hot_info'>
                            <h3>{item.name}</h3>
                            <p>{item.intro}</p>
                            <span>{item.grade}</span>
                         </div>
                 </li>
            )
        })
        let willFile=this.state.willFiles.map((item,index)=>{
               return (
                <li key={index} className='will_con' onClick={this.btnDetailWill.bind(this,index)}>
                    <div className='will_img'>
                        <img src={item.cover} />
                    </div>
                    <p className='will_info'>
                        <span>{item.name}</span>
                        <span>{item.premiereAt}</span>
                    </p>
                 </li>
               )
        })
        return html.length?(
            <div className='list_box'>
                <div className='list_info'>
                    <ul className='hot_films'>
                        {html}
                    </ul>
                    <Link to='/film'>
                        <div className='hot_more' >更多热映电影</div>
                    </Link>
                </div>
                <div className='will_films'>
                    <div className='films_title'>
                        <span >即将上映</span>
                    </div>
                    <ul className='will_films_info'>
                         {willFile}
                    </ul>
                    <Link to='/film'>
                    <div className='will_more'>更多即将上的映电影</div>
                    </Link>
                </div>
            </div>
        ):''
    }
    componentDidMount(){
        //热映
        homeServices.getHotFilemsData()
        .then(result=>{
            this.setState({result})
        })
        //即将上映
        homeServices.getWillFilmsData()
        .then(result=>{
            this.setState({willFiles:result})
        })
        //点击热映详情
        // $('.hot_con').on('top',function (){
        //     console.log('585')
        // })

    }
    btnDetail(index){
         this.state.history.push('/home/detailhot/'+this.state.result[index].id)
       
    }
    btnDetailWill(index){
        this.state.history.push('/home/detailwill/'+this.state.willFiles[index].id)
      
   }
    

   
}