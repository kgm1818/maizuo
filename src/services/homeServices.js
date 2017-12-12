import 'whatwg-fetch'
import Url_API from '../common/urlApi.js'
import  homeData from '../filter/homeData.js'
const homeServices={
     //轮播图
        getBannerData(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.bannerUrl}`)
                .then(function (response){
                   return response.json();
                })
                .then(function (result){
                    let data=homeData.bannerData(result)
                    data.push(data[0])
                    resolve(data)
                })
            })
        },
       //热映
        getHotFilemsData(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.hot_filmsUrl}`)
                .then(function (response){
                   return response.json();
                })
                .then(function (result){
                    let data=homeData.hotData(result)
                   // console.log(data)
                    resolve(data)
                })
		
            })
        },
        //即将上映
        getWillFilmsData(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.will_filmsUrl}`)
                .then(function (response){
                    return response.json();
                })
                .then(function (result){
                    let data=homeData.willFilesData(result)
                    resolve(data)
                })
            })
        },
        //城市
        getCitysData(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.cityUrl}`)
                .then(function (response){
                    return response.json();
                })
                .then(function (result){
                    let data=homeData.citysData(result)
                    resolve(data)
                })
            })
        },
        //详情(热映)
        getHotFilmsDetail(id){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.hotFilms_detailUrl}/${id}?__t=1512612202831`)
                .then(function (response){
                    return response.json();
                })
                .then(function (result){
                    let data=homeData.filmsDetail(result)
                    resolve(data)
                })
            })
        },
        getWillFilmsDetail(id){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.hotFilms_detailUrl}/${id}?__t=1512612975952`)
                .then(function (response){
                    return response.json();
                })
                .then(function (result){
                    let data=homeData.filmsDetail(result)
                    resolve(data)
                })
            })
        },
        //影片正在热映
          //热映
          getNowPlaying(page,count){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.now_playingUrl}?page=${page}&count=${count}`)
                .then(function (response){
                   return response.json();
                })
                .then(function (result){
                    let data=homeData.nowPlaying(result)
                    //console.log(data)
                   resolve(data)
                })
		
            })
        },
        //即将上映
        getComing(page,count){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.comingUrl}?page=${page}&count=${count}`)
                .then(function (response){
                   return response.json();
                })
                .then(function (result){
                    let data=homeData.comingData(result)
                   resolve(data)
                })
		
            })
        },
        getCinema(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.cinemaUrl}`)
                .then(function (response){
                    return response.json();
                })
                .then(function (result){
                    let data=homeData.cinemaData(result)
                    resolve(data)
                })
            })
        },
        getCinemaDetail(id){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.cinemaDetailUrl}/${id}?__t=1512712984370`)
                .then(response=>{
                    return response.json()
                })
                .then(function (result){
                    console.log(result)
                    let data=homeData.cinemaDetail(result)
                    resolve(data)
                })
            })
        },
        //商城分类
        getShowwxList(){
            return new Promise((resolve,reject)=>{
                fetch(`${Url_API.showwxListUrl}`)
                .then(function (response){
                   // return response.json()
                })
                .then(function (result){
                   // console.log(result)
                    //let data=homeData.showwxList(result)
                   // resolve(data)
                })
            })
        }
}

export default homeServices
