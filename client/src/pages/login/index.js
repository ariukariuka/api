import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../../components/header'
import { UserContext } from '../../userContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");
    const {setUserInfo} = useContext(UserContext);
    async function login(e) {
        e.preventDefault()
        const response =  await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": "application/json"},
            credentials: "include"
        })
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            }) 
            
        } else {
            alert("buruu bnshdee")
        }
    }
    if(redirect){
        return <Navigate to={"/"}/>
    }
    return(
        <div className='max-w-[1300px]  mx-auto px-[2.5rem]'>
            <Header/>
            <div className='w-full relative top-[50%] flex justify-center'>
                <form onSubmit={login}>
                    <div className='py-[4rem]'>
                        <h1 className='text-center text-[30px]'>LOGIN</h1>
                    </div>
                    <div className='mb-[1rem]'>
                        <input 
                            placeholder='Username' 
                            className='w-[300px] border-[2px] border-solid border-[#000] outline-none px-[25px] py-[10px] rounded-[15px]' 
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input  
                            placeholder='Password' 
                            className='w-[300px] border-[2px] border-solid border-[#000] outline-none px-[25px] py-[10px] rounded-[15px]' 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className='w-full flex justify-center mt-[20px]'>
                        <button className='text-center w-[300px] rounded-[15px] py-[10px] bg-[#000] text-[#fff]' type='submit'>login</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Login

