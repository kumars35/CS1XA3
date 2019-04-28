const BASE_URL = 'http://localhost:8000/api/v1';

const getToken = () => {
    return localStorage.getItem('token')
};

export const loadRestaurants = () => new Promise((resolve, reject) => {
    fetch(BASE_URL + '/restaurant/',{
        headers:{
            Authorization: 'Token ' + getToken()
        }
    })
        .then(resp => {
            if (!resp.ok) {
                reject(resp.statusText);
            }
            else {
                resolve(resp.json());
            }
        }).catch(err => reject(err))
});

export const loadItems = (restaurantId) => new Promise((resolve, reject) => {
    fetch(BASE_URL + `/items/${restaurantId}/`,{
        headers:{
            Authorization: 'Token ' + getToken()
        }
    })
        .then(resp => {
            if (!resp.ok) {
                reject(resp.statusText);
            }
            else {
                resolve(resp.json());
            }
        })
        .catch(err => reject(err))
});

export const placeOrder = (payload) => new Promise((resolve, reject) => {
   fetch(BASE_URL + '/createOrder/',{
       method: "POST",
       body: JSON.stringify(payload),
       headers:{
           'Content-Type': 'application/json',
           'Accept': 'application/json',
           Authorization: 'Token ' + getToken()
       }
   })
       .then(resp => {
           if (!resp.ok) {
               reject(resp.statusText);
           }
           else {
               resolve(resp.json());
           }
       })
       .catch(err => reject(err))
});

export const signIn = (payload) => new Promise((resolve, reject) => {
   fetch(BASE_URL + '/api-token-auth/', {
       method: "POST",
       body: JSON.stringify(payload),
       headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
       }
   })
       .then(resp => {
           if (!resp.ok) {
               reject(resp.statusText);
           }
           else {
               resolve(resp.json());
           }
       })
       .catch(err => reject(err))
});

export const loadOrders = () => new Promise((resolve, reject) => {
   fetch(BASE_URL + '/orders/',{
       headers:{
           Authorization: 'Token ' + getToken()
       }
   })
       .then(resp => {
           if (!resp.ok) {
               reject(resp.statusText);
           }
           else {
               resolve(resp.json());
           }
       })
       .catch(err => reject(err))
});

export const registerUser = (payload) => new Promise((resolve, reject) => {
   fetch(BASE_URL +'/register/',{
       method: "POST",
       body: JSON.stringify(payload),
       headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
           Authorization: 'Token ' + getToken()
       }})
           .then(resp => {
               if (!resp.ok) {
                   reject(resp.statusText);
               }
               else {
                   resolve(resp.json());
               }
           })
           .catch(err => reject(err))
});

