import React from "react";
import { useNavigate } from "react-router";
import styled from "../../styles/Popup.module.css";

export default function Popup({ onClose = () => { }, dados }) {
  dados = dados.toLowerCase();
  const navigate = useNavigate();

  function onCloser() {
    if(dados ==="excluir"){console.log("Entrou"); return (onClose);}
    else {return navigate('/');}
  }

  return (
    <div className="modal" id="modal">
      <div className={styled.Popup}>
        <header>
          <button className={styled.ExitButton} onClick={onCloser}>
            <div className={styled.BordeLeft}></div>
          <div className={styled.BordeRight}></div>
          </button>
        </header>
      <main>
        <h2>Nave {dados}</h2>
      </main>
      <footer>
        <p>Nave {dados} com sucesso!</p>
      </footer>
    </div>
    </div >
  );
}
