export default {
    bannerData:function (result){
           return result.data.billboards.map(item=>{
                return {
                    name:item.name,
                    imageUrl: item.imageUrl
                }
            })
    },
    hotData:function (result){
        //console.log(result)
        return result.data.films.map(item=>{
            return {
                id:item.id,
                name:item.name,
                intro:item.intro,
                cover:item.cover.origin,
                grade:item.grade
            }
        })

    },
    willFilesData:function (result){
        return result.data.films.map(item=>{
            return {
                id:item.id,
                name:item.name,
                cover:item.cover.origin,
                premiereAt: getTime(item.premiereAt)
            }
        })
        function getTime(time){
            return `${1+new Date(time).getMonth()}月${new Date(time).getDate()}日`
        }
    },
    citysData(result){
        let arrChar=[];
        for(let i=0;i<26;i++){
            arrChar.push(String.fromCharCode(65+i));
        }
       let arr=result.data.cities.map(item=>{
           return {
               name:item.name,
                start:item.pinyin.substr(0,1)
           }
        })
        let data=[]
        let arrCharArr=[]
       for(let i=0;i<arrChar.length;i++ ){
           let arrTemp=[];
            for(let j=0;j<arr.length;j++){
                if(arrChar[i]==arr[j].start){
                    arrTemp.push(arr[j])
                }
            }
            let resultData=[]
            while(arrTemp.length>0){
                 resultData.push(arrTemp.splice(0,4));
             }	
             let obj={
                 title:arrChar[i],
                 infoCity:resultData
             }
             if(obj.infoCity.length){
                data.push(obj) 
                arrCharArr.push(obj.title)
             }
       }
       let Char=[]
       while(arrCharArr.length>0){
          Char.push(arrCharArr.splice(0,4));
        }
       return {
        Char,
        data
       }
    },
    filmsDetail(result){
        let film=result.data.film
        return {
            cover:film.cover.origin,
            director:film.director,
            actors:film.actors,
            nationLanguage:film.nation+"("+film.language+")",
            category:film.category,
            premiereAt:new Date(film.premiereAt).getMonth()+1+'月'+new Date(film.premiereAt).getDate()+'日',
            synopsis:film.synopsis   
        }

    },
    nowPlaying(result){
        let films=result.data.films;
        let total=result.data.page.total;
        let arr=films.map(item=>{
           return {
                cover:item.cover.origin,
                name:item.name,
                intro:item.intro,
                watchCount:item.watchCount,
                cinemaCount:item.cinemaCount,
                grade:item.grade
           }
        })
        return {
            total:total,
            films:arr
        }
    },
    comingData(result){
        let films=result.data.films;
        let total=result.data.page.total;
       let arr=films.map(item=>{
           let d=new Date(item.premiereAt);
           let type=d.getDay()
           switch(type){
                case 1:
                    type='星期一';
                break;
                case 2:
                     type='星期二';
                break;
                case 3:
                     type='星期三';
                break;
                case 4:
                  type='星期四';
                 break;
                 case 5:
                     type='星期五';
                 break;
                 case 6:
                    type='星期六';
                  break;
                  case 7:
                     type='星期日';
                 break;
                 default :
                 break;
           }
           return {
                cover:item.cover.origin,
                name:item.name,
                intro:item.intro,
                premiereAt:d.getMonth()+1+'月'+d.getDate()+'日上映',
                type:type
           }
        })
        return {
            total:total,
            films:arr
        }
    },
    cinemaData(result){
       let allValArr= result.data.cinemas.map(item=>{
            return {
                    id:item.id,
                    name:item.name,
                    address:item.address,
                    district:item.district.name,
                    labels:item.labels,
                    distance:'距离未知'
                }
        })
        let districtAllArr=[];
        let obj={};
        for(let i=0;i<allValArr.length;i++){
            let district=allValArr[i].district;
                if( obj[district]){
                    obj[district].push(allValArr[i])
                }else{
                    obj[district]=[];
                }
        }

        for(var attr in obj){
            districtAllArr.push({
                district:attr,
                cinemas:obj[attr],
                isShow:false
            })
        }
        // console.log(districtAllArr)
        return districtAllArr
    },
    cinemaDetail(result){
        let data=result.data.cinema
        return {
            address:data.address,
            telephones:data.telephones,
            services:data.services
        }
    },
    showwxList(result){
        let arr=result.data.map(item=>{
            return {
                imageSrc:item.imageSrc,
                name:item.name,
            }
            let valArr=[]
            while (arr.length>0) {
                valArr.push(arr.splice(0,8))
            }
            console.log(valArr)
            return valArr
        })
    }
}