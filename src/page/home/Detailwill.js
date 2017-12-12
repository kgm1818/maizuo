import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../component/homePage/home/Header.js'
import homeServices from '../../services/homeServices.js'
export default class Detail extends React.Component{
    constructor({history,match}){
        super()
        this.state={
            history,
            filmsId:match.params.id,
            result:null
        }
    }
    render(){
        let filmsInfo=this.state.result;
        return filmsInfo?(
            <div className='detail_box'>
                <Header history={this.state.history} />
                <div className='detail_info'>
                    <div className='wrapper_detail'>
                        <div className='detail_pic'>
                            <img src={filmsInfo.cover} />
                        </div>
                        <div className='detail_content'>
                            <h3 className='detail_title'>
                                <span className='bg_c1'></span>
                                影片简介
                            </h3>
                            <p>
                                <span>导演：</span>
                                <span>{filmsInfo.director}</span>
                            </p>
                            <p>
                                <span>主演：</span>
                                {filmsInfo.actors.map((name,index)=>{
                                    return (
                                        <span key={index}>{name.name}|</span>
                                    )
                                })}
                            </p>
                            <p>
                                <span>地区语言：</span>
                                <span>{filmsInfo.nationLanguage}</span>
                            </p>
                            <p>
                                <span>类型：</span>
                                <span>{filmsInfo.category}</span>
                            </p>
                            <p>
                                <span>上映时间：</span>
                                <span>{filmsInfo.premiereAt}</span>
                            </p>
                            <div className='content_des'>{filmsInfo.synopsis}</div>
                            <div className='immediately'>
                                <Link to='/cinema'>
                                    <span className='comfirm'>立即购票</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):''
    }
    componentDidMount(){
        homeServices.getWillFilmsDetail(this.state.filmsId)
        .then(result=>{
            this.setState({result})
        })
    }
}