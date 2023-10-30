import { ref } from 'vue';

const endpointUrl = import.meta.env.VITE_URL_ENDPOINT

export interface ILoginState {
    isLoading: boolean,
    isAdmin: boolean,    
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
    
    if (data.access_token != undefined) 
    {  
        const token = data.access_token

        const responseToken = await fetch(`${endpointUrl}/token/decode`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })
        const decoded = await responseToken.json()
            
        if (decoded.admin == 1) {            
            localStorage.setItem('Token', token)    
            localStorage.setItem('IdUser', decoded.user)
            localStorage.setItem('NameUser', decoded.name)
            localStorage.setItem('EmailUser', decoded.email)
            localStorage.setItem('CpfUser', decoded.cpf)    

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
