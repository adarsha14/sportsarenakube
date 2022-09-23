import axios from "axios";

//const baseURL = "http://34.201.191.117:8080/user";

console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const baseURL = 'http://' + ip + ":8080/user"


export function getData( callback, errorcallback) {
  axios.get(`${baseURL}/api/v1/player/userEmail/`+sessionStorage.getItem("email"))
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

export function getDataByPlayerEmail( email,callback, errorcallback) {
  axios.get(`${baseURL}/api/v1/player/userEmail/`+email)
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

export function putData( data, callback, errorcallback) {
  console.log("inside put data fn");
  axios.put(`${baseURL}/api/v1/player`, data)
    .then(res => {
      //do something
      console.log(res.data);
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

export function getGroundProfileData(groundID, callback, errorcallback) {
  axios.get(`${baseURL}/api/v1/ground/groundID/`+sessionStorage.getItem("groundID"))
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

export function putGroundData( data, callback, errorcallback) {
  console.log("inside put data fn");
  axios.put(`${baseURL}/api/v1/ground`, data)
    .then(res => {
      //do something
      console.log(res.data);
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
// export function deleteData(id, type, callback, errorcallback) {
//   axios.delete(`${baseURL}/${type}/${id}`)
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

// export function postData(type, data, callback, errorcallback) {
//   axios.patch(`${baseURL}/${type}`, data)
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
