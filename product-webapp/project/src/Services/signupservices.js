import axios from "axios";

// export default axios.create({
//     baseURL:"http://localhost:3000/",
// });

// async function signupServices(){
//     const getDetails = async () => {
//         return await axios.get("http://localhost:3000/players");
//     }
//     let msg = "Hello";
//     console.log(getDetails());
//     return msg;
// }

// export default signupServices;
// export function getData(config, callback, errorcallback){
//     axios.get("http://localhost:3000/players/1")
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

console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const baseURL = 'http://' + ip + ":8080/user"


export function postData(type, formValues,callback,  errorcallback){
    axios.post(`http://${baseURL}/api/v1/${type}`,formValues)
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
// export function putData( type,id, formValues,callback,  errorcallback){
//     axios.post(`http://localhost:3000/${type}/${id}`,formValues)
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
