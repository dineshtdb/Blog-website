import React from "react";

export default function Login(){
    return(
        <div>
            <form className="login">
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="paswword"/>
                <button>Login</button>
            </form>
        </div>
    );
}