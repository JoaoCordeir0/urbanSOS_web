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
        const decoded = verify(data.access_token, decryptKey())
        
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
        verify(localStorage.getItem('TokenUser'), decryptKey())                        
        next()
    } 
    catch (e) 
    {
        next('/login')
    }
}

export function getToken() {   
    try 
    {
        const token = localStorage.getItem('TokenUser')            
        return token
    } 
    catch (e) 
    {
        const token = 'null'
        return token 
    }    
}

export function credentials() {
    const urlApi = String(endpointUrl)
    const tokenApi = String(getToken())
    const headerApi = { "x-access-token" : tokenApi }       
    
    return {
        urlApi,
        tokenApi,
        headerApi,
    }
}

function decryptKey() {           
    let potency = 3
    let sum_potency = 0
    let use_potency = true

    const chars = endpointKey.split('')
    
    for (let i = 1; i <= chars.lenght; i++) 
    {
        sum_potency = use_potency ? potency * i : sum_potency

        if (i == sum_potency)
        {
            console.log(chars[i])                
            use_potency = true
        }
        else 
        {
            use_potency = false
        }
    }

    return endpointKey
}