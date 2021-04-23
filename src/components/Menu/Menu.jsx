import React from 'react';
import { useNavigate } from 'react-router';
import styled from "../../styles/Nav.module.css";

export default function Menu(){
    const navigate = useNavigate()
    return(
        <nav>
        <div className={styled.Logo} onClick={()=>{navigate("/Home")}}>
            <img src="./rocket.png" alt="Rocket icon"/>
            <p>nave.rs</p>
        </div>
        <button onClick={()=>{navigate("/")}}>Sair</button>
    </nav>
    );
}