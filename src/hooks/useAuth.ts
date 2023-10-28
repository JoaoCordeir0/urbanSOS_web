import { ref } from 'vue';
import { useRouter } from 'vue-router';

const endpointUrl = import.meta.env.VITE_URL_ENDPOINT

export interface ILoginState {
    isLoading: boolean,
    message: String,
    token: String
}

export async function apiLogin(username, password) {

    const responseLogin = await fetch(`${endpointUrl}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    const data = await responseLogin.json()

    const token = data.access_token

    // Decode token
    if (token != undefined) {
        const responseToken = await fetch(`${endpointUrl}/user/decodetoken`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })
        const decoded = await responseToken.json()

        localStorage.setItem('Token', token)
        localStorage.setItem('TokenExp', decoded.exp)
        localStorage.setItem('IdUser', decoded.user)
        localStorage.setItem('NameUser', decoded.name)
        localStorage.setItem('EmailUser', decoded.email)
        localStorage.setItem('CpfUser', decoded.cpf)
    }

    const loginData = ref<ILoginState[]>(data);

    return loginData 
}

export function checkAuth(to, from, next) {
    localStorage.getItem('Token') != undefined ? next() : next('/login')    
}

export function getToken() {
    try {
        const token = localStorage.getItem('Token')
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

export function validationRequest(data) {    
    if ((new RegExp('invalid')).test(data.message))    
    {                
        localStorage.clear()
        window.location.href = "/login"        
    }        
    return data
}