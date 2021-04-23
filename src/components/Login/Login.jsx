import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logar } from '../../api/users';
import { GlobalContext } from '../../Contexts/NaversContext';
import styled from "../../styles/Login.module.css";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const global = React.useContext(GlobalContext);
    var dados = {"email":"", "password":""}
    function handleClick(event) {
        event.preventDefault();
        dados = {"email":email, "password":password}
        logar(dados, setToken)  
    }
    
    useEffect(()=>{
        global.adicionarToken(token)
        if (token !== "" || token === undefined) {
            navigate('/Home');
        }
    }, [token])

    return (
        <div className={styled.LoginContainer}>
            <header className={styled.LoginHeader}>
                <img src='./rocket.png' alt="rocket" className={styled.LoginHeaderIMG} />
                <p className={styled.LoginHeaderP}>nave.rs</p>
            </header>
            <main className={styled.LoginMain}>
                <label className={styled.LoginLabel}>E-mail</label>
                <input className={styled.LoginInput} placeholder="Email" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                <label className={styled.LoginLabel}>Senha</label>
                <input className={styled.LoginInput} placeholder="Senha" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
            </main>
            <footer>
                <button className={styled.LoginButton} onClick={(event)=>{handleClick(event)}}>Entrar</button>
            </footer>
        </div>
    );
}