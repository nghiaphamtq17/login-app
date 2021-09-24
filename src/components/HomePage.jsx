import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const check = useSelector((state) => state.user.isAuth);
    console.log(check);
    return (
        
        <div>
            hello world

            <Link to="/login">to login</Link>
        </div>
    )
}

export default HomePage
