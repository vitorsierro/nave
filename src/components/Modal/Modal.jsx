import React, { useState, useEffect } from 'react';
import styled from '../../styles/Modal.module.css'
import styles from '../../styles/Popup.module.css'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { pegarUmNaver, deletarNaver } from '../../api/navers';
import { GlobalContext } from '../../Contexts/NaversContext';

export default function Modal({ onClose = () => { } }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate();
  const global = React.useContext(GlobalContext);
  const [formulario, setFormulario] = useState([{}])
  useEffect(()=>{
      pegarUmNaver(global.token,setFormulario,global.id)
  },[])
  
  function handleDelete(){
    setIsPopUpVisible(true)
    deletarNaver(global.token,global.id)
  }
  function formatDate(number){
    if (number !== "" && number !== undefined){
    const idade = number
    var [ano,mes,dia] = idade.replaceAll("-", "/").split("T")[0].split("/")
  }
    return `${dia}/${mes}/${ano}`
  }
  return (
    <div className={styles.Modal}>
      <div className={styled.Modal}>
        <img src={`./${formulario.url}.png`} alt="Imagem do funciario" className={styled.ModalFoto} />
        <button className={styled.ExitButton} onClick={onClose}>
          <div className={styled.BordeLeft}></div>
          <div className={styled.BordeRight}></div>
        </button>
        <form className={styled.ModalForm}>
          <main className={styled.ModalMain}>
            <h2 className={styled.ModalH2}>{formulario.name}</h2>
            <p className={`${styled.ModalMainP} ${styled.ModalP}`}>{formulario.job_role}</p>

            <h4 className={styled.ModalH4}>Idade</h4>
            <p className={styled.ModalMainP}>{formatDate(formulario.birthdate)}</p>

            <h4 className={styled.ModalH4}>tempo de empresa</h4>
            <p className={styled.ModalMainP}>{formatDate(formulario.admission_date)}</p>

            <h4 className={styled.ModalH4}>Projestos que participou</h4>
            <p className={styled.ModalMainP}>{formulario.project}</p>
          </main>
          <footer className={styled.ModalFooter}>
            <button onClick={() => { handleDelete() }} className={styled.BotaoDireito}>
              <img src="./delete.svg" alt="excluir" className={styled.Editar} />
            </button>
            <button onClick={() => { navigate('/Editar'); }} >
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
