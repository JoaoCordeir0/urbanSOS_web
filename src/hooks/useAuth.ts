import { ref } from 'vue';
import { sign, verify } from 'jsonwebtoken'

const endpointKey = import.meta.env.VITE_KEY_ENDPOINT
const urlApi = import.meta.env.VITE_URL_ENDPOINT  


// Interface da tabela de reports
export interface IInfoData {
    message: String,
    access_token: String
}

// Funcão que consulta a API e retorna os reports
export async function apiLogin(username, password) {
   
    const response = await fetch(`${urlApi}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    const data = await response.json()

    if (data.access_token != undefined) {
        const decoded = decodeToken(data.access_token)
        
        localStorage.setItem('TokenUser', data.access_token)
        localStorage.setItem('NameUser', decoded.name)
        localStorage.setItem('EmailUser', decoded.email)
        localStorage.setItem('CpfUser', decoded.cpf)
    }

    const loginData = ref<IInfoData[]>(data);

    return {
        loginData,
    };
}

export function checkAuth(to, from, next) {
    try {
        let token = localStorage.getItem('TokenUser')        
        verify(token, endpointKey)
        next()
    } catch (e) {
        next('/')
    }
}

export async function getToken(action) {   
    try {
        const token = localStorage.getItem('TokenUser')    
        const decoded = verify(token, endpointKey)
        return {
            token,
        };
    } catch (e) {
        window.location.href = '/login'
    }    
}

export function decodeToken(token) {
    const decoded = verify(token, endpointKey)

    return {
        decoded,
    };
}