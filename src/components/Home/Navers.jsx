import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../Contexts/NaversContext";
import Menu from "../Menu/Menu";
import styled from "../../styles/Navers.module.css";
import Popup from "../Popup/Popup";
import Modal from "../Modal/Modal"
import { pegarTudo, deletarNaver } from "../../api/navers";

export default function Navers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate()
  const global = React.useContext(GlobalContext);
  const [form, setForm] = useState([{}]);
  
  useEffect(() => {
    pegarTudo(global.token, setForm)
  }, [form])
  
  function handleDelete(id){
    setIsPopUpVisible(true)
    deletarNaver(global.token,id)
  }
  
  function handleEdit(id){
    navigate("/Editar");
    global.adicionarId(id);
  }
  function handleVisu(id){
    global.adicionarId(id)
    setIsModalVisible(true)        
  }
  
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className={styled.Navers}>
        <header>
          <p>Navers</p>
          <button onClick={() => { navigate('/Adicionar') }}>
            <p>Adicionar Naver</p>
          </button>
        </header>
        <main>
          {
            form.map(({ name, job_role, url, id }, key) => (
              <div key={key} className={styled.Container}>
                <div onClick={() => {handleVisu(id)}}>
                  <img src={`./${url}.png`} alt="foto dos navers" />
                  <p className={styled.Titulo}>{name}</p>
                  <p className={styled.Subtitulo}>{job_role}</p>
                </div>
                <button onClick={()=> {handleDelete(id)} }>
                  <img src="./delete.svg" alt="excluir" className={styled.Editar} />
                </button>
                <button onClick={() => {handleEdit(id) }} >
                  <img src="./edit.svg" alt="Editar" className={styled.Editar} />
                </button>
              </div>
            ))}
        </main>
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)} />
      ) : null}
      {isPopUpVisible ? (
        <Popup onClosed={() => setIsPopUpVisible(false)} dados={"Excluir"} />
      ) : null}
    </>

  );
}
