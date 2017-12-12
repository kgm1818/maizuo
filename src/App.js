import React,{Component} from 'react'
import {BrowserRouter as Router,NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Home from './page/home/Home.js'
import Film from './page/film/Film.js'
import City from './page/city/City.js'
import Cinema from './page/cinema/Cinema.js'
import Card from './page/card/Card.js'
import Showwxpaytitle from './page/showwxpaytitle/Showwxpaytitle.js'

import Login from './page/info/Login.js'
import Detailhot from './page/home/Detailhot.js'
import Detailwill from './page/home/Detailwill.js'
export default class App extends Component{

    render(){
        return (
            <Router>
                <div id='root'>
                    <Switch>
                        <Route exact path='/' render={()=>{
                            return <Redirect to='/home' />
                        }}/>
                        <Route exact path='/home' component={Home} />
                        <Route  path='/home/detailhot/:id' component={Detailhot} />
                        <Route  path='/home/detailwill/:id' component={Detailwill} />
                        <Route path='/film' component={Film} />
                        <Route path='/city' component={City} />
                        <Route path='/cinema' component={Cinema} />
                        <Route path='/showwxpaytitle' component={Showwxpaytitle} />
                        <Route path='/card' component={Card} />
                        <Route path='/login' component={Login} />
                        
                    </Switch>
                </div>
            </Router>

        )
    }

}