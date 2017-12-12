import React,{Component}from 'react'
import {Route} from 'react-router-dom'
import Header from '../../component/homePage/home/Header.js'
import Banner from '../../component/homePage/home/Banner.js'
import List from '../../component/homePage/home/List.js'
// import Detail from './Detail.js'
let myScroll=null;
export default class Home extends Component{
    constructor({history,location}){
        super()
        this.state={
            history
        }
    }
    render(){
        return (
                <div className='home page'>
                    <Header history={this.state.history}/>
                    <div className='main_box'>
                        <div className='wrapper_info'>
                            <Banner/>
                            <List history={this.state.history}/>
                        </div>
                    </div>
                </div>
        )
    }
    componentDidMount(){
        myScroll=new IScroll('.main_box',{
            prodeType:3
        })
        myScroll.on('scrollStart',()=>{
            myScroll.refresh()
        })
    }
    componentDidUpdate(){
        //console.log('更新了')
        myScroll.refresh()
    }
}