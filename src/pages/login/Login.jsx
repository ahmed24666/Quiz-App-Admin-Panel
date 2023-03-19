import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import "./login.scss";

export function Login({ifloged,setPost,post}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    let login = (e) => {
        e.preventDefault()
        setPost(null)
        const item = { email, password }
        fetch('https://edu-project.onrender.com/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then(data => {localStorage.setItem('login',JSON.stringify(data));setPost(data)})
            .then(e => JSON.parse(localStorage.getItem('login')).value=== "email or password is wrong." ? ifloged='wrong' : ifloged='logedin')
            .then(e => ifloged==='logedin' ? navigate("/") : navigate("/login"))
            .catch(err => console.error(err));
            console.log(post)
    }
    return (
        post===null?<Loader/>:(
        <div className="login">
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={login}>Login</button>
                    </form>
                </div>
        </div>
        )
    );
}
