import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.scss'
const Home = ({ifloged}) => {
    const navigate = useNavigate();
    useEffect(() => {
        JSON.parse(localStorage.getItem('login'))?.value==='done' ? navigate("/") : JSON.parse(localStorage.getItem('login')) ? navigate("/login") : navigate("/login")
    }, [ifloged])
    return (
        <div className='Home'>
            <div className="image">
                <img src="/image/quiz-logo-icon-symbol_101884-1075.avif" alt="" />
            </div>
        </div>
    )
}

export default Home
