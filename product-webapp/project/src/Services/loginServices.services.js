import axios from "axios";

console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const baseURL = 'http://' + ip + ":8080"

export function postData(formValues, callback, errorcallback){
  axios.post("http://${baseURL}/authentication/api/v1/userauth",formValues)
  .then(res => {
    //do something
    if(callback != null){
       callback(res);
    }
  })
  .catch(err => {
    // catch error
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}

// export function getData(config, callback, errorcallback){
//     axios.get("http://localhost:8080/user/api/v1/newplayer")
//     .then(res => {
//       //do something
//       if(callback != null){
//          callback(res);
//       }
//     })
//     .catch(err => {
//       // catch error
//       if(errorcallback != null){
//          errorcallback(err);
//       }
//     })
// }

// export function getData(config, callback, errorcallback){
//   axios.get("http://localhost:8080/newground")
//   .then(res => {
//     //do something
//     if(callback != null){
//        callback(res);
//     }
//   })
//   .catch(err => {
//     // catch error
//     if(errorcallback != null){
//        errorcallback(err);
//     }
//   })
// }
