import { sign } from 'jsonwebtoken'

export async function getToken(action:string) {      
    const token = sign(
        { requester: 'Web Dashboard', action: action },
        import.meta.env.VITE_KEY_ENDPOINT,
        {
            expiresIn: "5h",
        }
    );

    return {
        token,    
    };
}
