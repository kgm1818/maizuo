import React from 'react'
import Header from '../../component/homePage/home/Header.js'
import '../../../static/css/card.css'
export default class Card extends React.Component{
    constructor({history}){
        super()
        this.state={
            history,
            title:'卖座卡'
        }
    }
    render(){
        let html='';
        let label='';
        let labelBot=''
        if(this.state.title=='卖座卡'){
            label='active'
            html= (<div>
                        <div className='card_user'>
                            <input type='text' placeholder='请输入卡号' />
                            <span className='border_c'></span>
                        </div>
                        <div className='pass_card'>
                            <input type='password' placeholder='输入密码' />
                            <span className='border_c'></span>
                        </div>
                       
                     </div>)
        }else{
            labelBot='active'
            html=(<div>
                    <div className='card_user'>
                        <input type='text' placeholder='请输入15位电子卖座卡号' />
                        <span className='border_c'></span>
                    </div>
                </div>)
        }
       
        return (
            <div className='card_box'>
                <Header history={this.state.history}/>
                <div className='card_info'>
                    <p className='tab_card'>
                        <span className={label} onClick={this.handlerCard.bind(this)}
                        >{this.state.title}</span>
                        <span className={labelBot} onClick={this.handlerDan.bind(this)}>
                        {this.state.title}</span>
                    </p>
                    <div className='card_content'>
                       {html}
                       <div className='btn_box_login'>
                            <button>查询</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handlerCard(){
        this.setState({
            title:'卖座卡'
        })
    }
    handlerDan(){
        this.setState({
            title:'电子卖座卡'
        })
    }
}