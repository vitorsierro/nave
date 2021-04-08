import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { logar } from '../../api/users';
import { GlobalContext, NaversContext } from '../../Contexts/NaversContext';
import styled from "../../styles/Login.module.css";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = "";   
    const global = React.useContext(GlobalContext);
    function handleClick() {
        console.log("login efetuado com sucesso");
        logar({email, password}, token)
        global.adicionarToken(token)
        navigate('/');
    }
    
    return (
        <div className={styled.Container}>
            <header>
            <img src='./rocket.png' alt="rocket"/>
            <p>nave.rs</p>
            </header>
            <main>
            <label>E-mail</label>
            <input placeholder="Email" type="email" value={email} onChange={(event)=>{ setEmail(event.target.value)}}/>
            <label>Senha</label>
            <input placeholder="Senha" type="password" value={password} onChange={(event)=>{ setPassword(event.target.value)}}/>
            </main>
            <footer>
            <button onClick={handleClick()}>Entrar</button>
            </footer>
        </div>
    );
}