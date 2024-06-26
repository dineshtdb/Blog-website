import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setredirect]=useState(false);
    async function login(ev) {
        ev.preventDefault();
        const response=await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        if(response.ok){
            setredirect(true);
        }else{
            alert('worng')
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }

    return(
        <div>
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text"
                 placeholder="username"
                 value={username}
                 onChange={ev => setUsername(ev.target.value)}
                 />
                <input type="text"
                 placeholder="paswword"
                 value={password}
                  onChange={ev => setPassword(ev.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    );
}