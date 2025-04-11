import React, { useCallback, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google'
import Profile from '../Components/HomeScreen/Profile';

function Login() {


    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('name') ? true : false);

    const onSuccess = useCallback((response) => {
        console.log('res', response)
        const { name, picture, email } = jwtDecode(response.credential);
        localStorage.setItem('name', name);
        localStorage.setItem('picture', picture)
        localStorage.setItem("email", email)
        setIsLoggedIn(true);
        console.log("decodede", jwtDecode(response.credential))
    }, [])

    const onError = useCallback((err) => {
        setIsLoggedIn(false);
        console.log("errr", err)
    })

    return (
        <>
        {isLoggedIn ? 
               <Profile/>
           :
            <GoogleLogin onSuccess={onSuccess} onError={onError}/>
        }
        </>
    )
}

export default Login