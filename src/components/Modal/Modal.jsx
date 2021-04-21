import React, { useState } from 'react';
import styled from '../../styles/Modal.module.css'
import styles from '../../styles/Popup.module.css'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';

export default function Modal({ onClose = () => { } }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate()
  const dados = { nome: "Vitor Sierro", cargo: "Front-End Development", idade: "21", tempoEmpresa: "10", projetos: "5", urlFoto: "Vitor" }
  return (
    <div className={styles.Modal}>
      <div className={styled.Modal}>
        <img src={`./fotos/${dados.urlFoto}.png`} alt="Imagem do funciario" className={styled.ModalFoto} />
        <button className={styled.ExitButton} onClick={onClose}>
          <div className={styled.BordeLeft}></div>
          <div className={styled.BordeRight}></div>
        </button>
        <form className={styled.ModalForm}>
          <main className={styled.ModalMain}>
            <h2 className={styled.ModalH2}>{dados.nome}</h2>
            <p className={`${styled.ModalMainP} ${styled.ModalP}`}>{dados.cargo}</p>

            <h4 className={styled.ModalH4}>Idade</h4>
            <p className={styled.ModalMainP}>{dados.idade}</p>

            <h4 className={styled.ModalH4}>tempo de empresa</h4>
            <p className={styled.ModalMainP}>{dados.tempoEmpresa}</p>

            <h4 className={styled.ModalH4}>Projestos que participou</h4>
            <p className={styled.ModalMainP}>{`${dados.projetos} Anos`}</p>
          </main>
          <footer className={styled.ModalFooter}>
            <button onClick={(e) => { e.preventDefault(); setIsPopUpVisible(true); }} className={styled.BotaoDireito}>
              <img src="./delete.svg" alt="excluir" className={styled.Editar} />
            </button>
            <button onClick={() => { navigate('Editar'); }} >
              <img src="./edit.svg" alt="Editar" className={styled.Editar} />
            </button>
            {}
          </footer>
        </form>
        {isPopUpVisible ? (
          <Popup onClosed={() => { onClose(); return setIsPopUpVisible(false); }} dados={"Excluir"} />
        ) : null}
      </div>
    </div>
  )
};
