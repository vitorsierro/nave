import React from "react";
import styled from "../../styles/Popup.module.css";

export default function Popup({ onClosed = () => {  }, dados }) {
  dados = dados.toLowerCase();

  return (
    <div className="modal" id="modal">
      <div className={styled.Popup}>
        <header>
          <button className={styled.ExitButton} onClick={onClosed}>
            <div className={styled.BordeLeft}  />
            <div className={styled.BordeRight} />
          </button>
        </header>
      <main>
        <h2>Nave {dados}</h2>
      </main>
      <footer>
        <p>Nave {dados} com sucesso!</p>
      </footer>
    </div>
    </div>
  );
}
