import { ref } from 'vue';
import { verify } from 'jsonwebtoken'

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

    if (data.access_token != undefined) {
        const decoded = verify(data.access_token, endpointKey)
        
        localStorage.setItem('TokenUser', data.access_token)
        localStorage.setItem('NameUser', decoded.name)
        localStorage.setItem('EmailUser', decoded.email)
        localStorage.setItem('CpfUser', decoded.cpf)
    }

    const loginData = ref<ILoginData[]>(data);

    return { loginData }
}

export function checkAuth(to, from, next) {
    try 
    {        
        verify(localStorage.getItem('TokenUser'), endpointKey)                        
        next()
    } 
    catch (e) 
    {
        next('/login')
    }
}

export async function getToken() {   
    try 
    {
        const token = localStorage.getItem('TokenUser')            
        return { token }
    } 
    catch (e) 
    {
        const token = ''
        return { token }
    }    
}

export async function credentials() {
    const urlApi = String(endpointUrl)
    const tokenApi = String((await getToken()).token)
    const headerApi = { "x-access-token" : tokenApi }       
    
    return {
        urlApi,
        tokenApi,
        headerApi,
    }
}