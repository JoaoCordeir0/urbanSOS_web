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

    if (data.access_token != undefined) {

        console.log(decryptKey())
        return

        jwt.verify(data.access_token, 'sua-chave-secreta', (err, decoded) => {
            if (err) {
                console.error('Erro ao verificar o token:', err);
            } else {
                console.log('Token verificado com sucesso:', decoded);
            }
        });       
    }

    const loginData = ref<ILoginData[]>(data);

    return { loginData }
}

export function checkAuth(to, from, next) {
    try {
        verify(localStorage.getItem('TokenUser'), decryptKey())
        next()
    }
    catch (e) {
        next('/login')
    }
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