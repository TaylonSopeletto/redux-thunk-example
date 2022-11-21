import axios from 'axios'

const baseUrl = 'http://localhost:3001'

export function getCartClientService(){
    const request = axios.get(baseUrl.concat('/get-cart'))
    return request
}

export function updateCartClientService(cart){
    const request = axios.put(baseUrl.concat('/set-cart'), cart)
    return request
}