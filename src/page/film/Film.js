import React,{Component} from 'react'
import Header from '../../component/homePage/home/Header.js'
import Nowplaying from '../../component/filmPage/Nowplaying.js'
import Coming from '../../component/filmPage/Coming.js'
import '../../../static/css/film.css'
let myScroll=null;
let flag=true;
let more=true;
let maxPage=0;
export default class Film extends Component{
    constructor({history}){
        super()
        this.state={
            history,
            title:'正在热映',
            page:1
        }
    }
    render(){
        let show='';
        let type=this.state.title;
        let now_active='';
        let com_active='';
            switch(type){
                case '正在热映':
                    show=<Nowplaying page={this.state.page}
                     moreNext={this.moreNext.bind(this)}
                     totalPage={this.totalPage.bind(this)}/>
                     now_active='active'
                    break;
                case '即将上映':
                   show=<Coming  page={this.state.page}
                   moreNext={this.moreNext.bind(this)}
                   totalPage={this.totalPage.bind(this)}/>
                   com_active='active'
                break;
                default :
                break;
            }
        return (
            <div className='film_box'>
                <Header history={this.state.history}/>
                <div className='film_con_box'>
                    <div className='wrapper_film'>
                        <div className='nav_select'>
                            <span className={'now_playing '+now_active} onClick={this.Nowplaying.bind(this)}>
                                正在热映
                            </span> 
                            <span className={'coming_soon '+com_active} onClick={this.comming.bind(this)}>
                                即将上映
                            </span>
                        </div>
                        <div className='film_info_box'>
                            {show}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Nowplaying(){
        this.setState({title:'正在热映',page:1})
        more=true;
    }
    comming(){
        this.setState({title:'即将上映',page:1})
        more=true;
    }
    totalPage(total){
       
        maxPage=total;
       // console.log(maxPage,'maxpage')
    }
    moreNext(){
        more=true;
    }
    componentDidMount(){
        myScroll=new IScroll('.film_con_box',{
            probeType:3
        })
        let height=0;
        let max=0;
        let  boxHeight=document.querySelector('.film_con_box').offsetHeight
        myScroll.on('scrollStart',()=>{
            height=document.querySelector('.wrapper_film').offsetHeight
            max=height-boxHeight
            myScroll.refresh()
        })
       
        myScroll.on('scroll',()=>{
            if(myScroll.y<-max/2){
                //page++;
                if(more){
                    more=false;
                    console.log(this.state.page,'page')
                    let num=++this.state.page
                    if(num<=maxPage){
                        console.log(num)
                        this.setState({page:num},()=>{
                            
                        })
                    }
                }               
            }
        })
    }
    componentDidUpdate(){
        // react更新是局部更新比如子组件更新父组件不会更新
        // myScroll.refresh()
        // consolse.log(myScroll)
    }
    
}
