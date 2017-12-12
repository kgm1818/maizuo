import React,{Component}from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mean from './Mean.js'
export default class Header extends Component{
    constructor(){
        super()
        this.state={
            isShow:false,
            title:'卖座电影'
        }
    }
    render(){
        let title=this.state.title
        return (
            <div>
                <header className='header'>
                    <div className='header_left'>
                        <i onClick={this.btnShow.bind(this)} className='iconfont'>&#xe790;</i>
                        <strong className='title'>{title}</strong>
                    </div>
                    <div className='header_right'>
                        <span className='address' onClick={this.selectCity.bind(this)}>
                            深圳
                            <i className='iconfont'>&#xe772;</i>
                        </span>
                        <span className='person_info' onClick={this.infoPerson.bind(this)}>
                            <i className='iconfont'>&#xe788;</i>
                        </span>
                    </div>
                </header>
                <Mean isShow={this.state.isShow}
                 handlerTitle={this.handlerTitle.bind(this)}/>
            </div>
        )
    }
    //侧边栏效果
    btnShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    //city
    selectCity(){
      this.props.history.push('/city')
    }
    //登录
    infoPerson(){
        this.props.history.push('/login')
    }
    //侧边栏收回去
    // handlerIsShow(info){
    //     this.setState({
    //         isShow:info
    //     })
    // }
    //标题
    handlerTitle(obj){
        console.log(obj)
        this.setState({
            title:obj.title,
            isShow:obj.info
        })
    }
}