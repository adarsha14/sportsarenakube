import axios from "axios";

//const baseURL= "http://34.201.191.117:8080/user";
console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const baseURL = 'http://' + ip + ":8080/user"


export function getGroundList( callback, errorcallback) {
    // const url = `${baseURL}/${type}`;
    // console.log(url);
    axios.get(`${baseURL}/api/v1/groundslist`)
      .then(res => {
        //do something
        if (callback != null) {
          callback(res);
        }
      })
      .catch(err => {
        // catch error
        if (errorcallback != null) {
          errorcallback(err);
        }
      })
  }
  

  export function getGroundCityAndSport( city,groundType, callback, errorcallback) {
    // const url =`${baseURL}/?city=${city}&&groundType=${groundType}`;
    // console.log(url);
    axios.get(`${baseURL}/api/v1/groundslist/city/`+city+`/groundType/`+groundType)
      .then(res => {
        //do something
        if (callback != null) {
          callback(res);
        }
      })
      .catch(err => {
        // catch error
        if (errorcallback != null) {
          errorcallback(err);
        }
      })
  }
  

 
  // export function getView( type, callback, errorcallback) {
  //   axios.get(`${baseURL}/${type}`)
  //     .then(res => {
  //       //do something
  //       if (callback != null) {
  //         callback(res);
  //       }
  //     })
  //     .catch(err => {
  //       // catch error
  //       if (errorcallback != null) {
  //         errorcallback(err);
  //       }
  //     })
  // }
