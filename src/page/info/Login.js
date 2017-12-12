import React,{Component} from 'react'
import Header from '../../component/homePage/home/Header.js'

export default class Login extends Component{
    constructor({history}){
        super()
        this.state={
            history
        }
    }
    render(){
        return (
            <div className='login_box'>
                <Header history={this.state.history}/>
                <div className='login_content'>
                    <div className='user_box'>
                        <input type='text' placeholder='请输入手机号/邮箱' />
                        <span className='border_c'></span>

                    </div>
                    <div className='pass_box'>
                        <input type='password' placeholder='输入密码/验证码' />
                        <span className='border_c'></span>
                    </div>
                    <div className='btn_box_login'>
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}