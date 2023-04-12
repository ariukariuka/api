import React, { useContext, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import { UserContext } from '../../userContext'

const Header = () => {
    const {setUserInfo, userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: "include",
        }).then(res => {
           res.json().then(userInfo => {
                setUserInfo(userInfo)
           })
        })
    }, [])

    const logOut = () => {
        fetch('http://localhost:4000/logout', {
            credentials: "include",
            method: 'POST'
        });
        setUserInfo(null)
    }

    const username = userInfo?.username;

    return (
       <>
            <header className='w-full h-[140px]'>
                <div className='w-full flex h-full  justify-between items-center'>
                    <div>
                        <Link className='font-[800] text-[30px]' to='/'>My blog</Link>
                    </div>
                    <div className='flex text-[20px] font-[500] gap-[30px]'>
                        {username && (
                            <>
                                <Link to="/create">
                                    Create new post
                                </Link>
                                <button onClick={logOut}>Logout</button>
                            </>
                        )}
                        {!username && (
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                        )}
                       
                    </div>
                </div>
                
            </header>
       </>
    )
}

export default Header