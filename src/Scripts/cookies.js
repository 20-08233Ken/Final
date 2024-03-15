import { useCookies } from 'vue3-cookies';


export const userPosition = () => {

    return () =>{
        const {cookies} = useCookies ();
        return cookies.get('userPosition')
    }
}

export const userCampus = () => {

    return () =>{
        const {cookies} = useCookies ();
        return cookies.get('userCampus')
    }
}

export const userCollege = () => {

    return () =>{
        const {cookies} = useCookies ();
        return cookies.get('userCollege')
    }
}

// import { useCookies } from 'vue3-cookies';


// export const userCookies = () => {

//     return () =>{
//         const {cookies} = useCookies ();
//         return {
//             userPosition:cookies.get('userPosition'),   
//             userCampus:cookies.get('userCampus')
//         }

//     }
// }
// export const userPosition = (() => {
//     const { cookies } = useCookies();
//     return cookies.get('userPosition');
// })();
