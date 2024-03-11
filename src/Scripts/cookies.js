import { useCookies } from 'vue3-cookies';


export const userPosition = () => {

    return () =>{
        const {cookies} = useCookies ();
        return cookies.get('userPosition')
    }
}
// export const userPosition = (() => {
//     const { cookies } = useCookies();
//     return cookies.get('userPosition');
// })();
