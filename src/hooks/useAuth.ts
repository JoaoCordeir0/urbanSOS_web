import { ref } from 'vue';
import jwt from 'jsonwebtoken'

const endpointKey = import.meta.env.VITE_KEY_ENDPOINT
const endpointUrl = import.meta.env.VITE_URL_ENDPOINT

export interface ILoginData {
    message: String,
    access_token: String
}

export async function apiLogin(username, password) {

    const response = await fetch(`${endpointUrl}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json()
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJuYW1lIjoiSm_Do28gVmljdG9yIENvcmRlaXJvIiwiZW1haWwiOiJqb2FvY29yZGVpcm8yMTM0QGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njc4OTAwIiwiaWF0IjoxNjk4NDIyMTA4LCJleHAiOjE2OTg0NDAxMDh9.iqzKmMiePGHp8JCdIyM4od7jb1GYwdXOzkeG0zI9M-Q'
    
    jwt.verify(token, 'urbansos2023', (err, decoded) => {
        if (err) {
            console.error('Erro ao verificar o token:', err);
        } else {
            console.log('Token verificado com sucesso:', decoded);
        }
    });           

    const loginData = ref<ILoginData[]>(data);

    return { loginData }
}

export function checkAuth(to, from, next) {    
    jwt.verify(localStorage.getItem('TokenUser'), decryptKey(), (err, decoded) => {
        err ? next('/login') : next()        
    })
}

export function getToken() {
    try {
        const token = localStorage.getItem('TokenUser')
        return token
    }
    catch (e) {
        const token = 'null'
        return token
    }
}

export function credentials() {
    const urlApi = String(endpointUrl)
    const tokenApi = String(getToken())
    const headerApi = { "x-access-token": tokenApi }

    return {
        urlApi,
        tokenApi,
        headerApi,
    }
}

function decryptKey() {
    let chars = (endpointKey.split('')).reverse()
    let endpointKey_decrypt = ''

    for (let c = 0; c <= chars.length; c += 7) {
        endpointKey_decrypt += chars[c]
    }
    return endpointKey_decrypt
}