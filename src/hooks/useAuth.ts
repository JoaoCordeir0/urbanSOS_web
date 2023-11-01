import axios from 'axios';
import { ref } from 'vue';

const endpointUrl = import.meta.env.VITE_URL_ENDPOINT

export interface ILoginState {
    isLoading: boolean,
    isAdmin: boolean,    
    message: String,
    token: String
}

export async function apiLogin(username, password) {

    var params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)

    const { data } = await axios.post(`${endpointUrl}/user/login`, params)
    
    const token = data.access_token

    if (token != undefined) 
    {  
        var params = new URLSearchParams()
        params.append('token', token)
        
        const { data } = await axios.post(`${endpointUrl}/token/decode`, params)
                    
        if (data.admin == 1) {            
            localStorage.setItem('Token', token)    
            localStorage.setItem('IdUser', data.user)
            localStorage.setItem('NameUser', data.name)
            localStorage.setItem('EmailUser', data.email)
            localStorage.setItem('CpfUser', data.cpf)    

            window.location.href = "/dashboard"
        } else {
            // joga o usuário para ver suas informações caso não seja um adm
            window.location.href = "https://api.urbansos.com.br/"
        }                    
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
    if ((new RegExp('invalid')).test(data.message) ||         
        (new RegExp('expired')).test(data.message))    
    {                
        localStorage.clear()
        window.location.href = "/login"        
    }        
    return data
}
