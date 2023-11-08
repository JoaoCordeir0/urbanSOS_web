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

    localStorage.clear();
    
    var params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)

    const { data } = await axios.post(`${endpointUrl}/user/login`, params)
    
    validationRequest(data)

    const token = data.access_token

    if (token != undefined) 
    {       
        localStorage.setItem('Token', token)    
        localStorage.setItem('IdUser', data.user.id)
        localStorage.setItem('NameUser', data.user.name)
        localStorage.setItem('EmailUser', data.user.email)
        localStorage.setItem('CpfUser', data.user.cpf)  

        if (data.admin != undefined) {                          
            localStorage.setItem('AdminUser', '1')  
            localStorage.setItem('AdminCity', data.admin.cityId)  
            window.location.href = "/dashboard"
        } else {            
            window.location.href = "/user/" + data.user.id
        }
    }

    const loginData = ref<ILoginState[]>(data);

    return loginData 
}

export function checkAuthAdmin(to, from, next) {      
    localStorage.getItem('Token') != undefined && localStorage.getItem('AdminUser') == '1' ? next() : next('/login')    
}

export function checkAuthUser(to, from, next) {      
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
