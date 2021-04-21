import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../Contexts/NaversContext";
import Menu from "../Menu/Menu";
import styled from "../../styles/Navers.module.css";
import Popup from "../Popup/Popup";
import Modal from "../Modal/Modal"
import { pegarTudo } from "../../api/navers";

export default function Navers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate()
  const global = React.useContext(GlobalContext);
  const [form, setForm] = useState([{}]);
  useEffect(()=>{
    pegarTudo(global.token, setForm)
  })
  
  console.log(form)
  return (
    <>
     <div>
        <Menu />
      </div>
      <div className={styled.Navers}>
        <header>
          <p>Navers</p>
          <button onClick={()=>{navigate('Adicionar')}}>
            <p>Adicionar Naver</p>
          </button>
        </header> 
        <main>
          {
            form.map(({ nome, cargo, urlFoto, id },key) => (
              <div key={key} className={styled.Container}>
                <div onClick={() => {setIsModalVisible(true)}}>
                <img src={`./${urlFoto}.png`} alt="foto dos navers" />
                <p className={styled.Titulo}>{nome}</p>
                <p className={styled.Subtitulo}>{cargo}</p>
                </div>
                <button onClick={() => {setIsPopUpVisible(true)}}>
                  <img src="./delete.svg" alt="excluir" className={styled.Editar} />
                </button>
                <button onClick={()=>{navigate("editar");global.adicionarId(id)}} >
                  <img src="./edit.svg" alt="Editar" className={styled.Editar} />
                </button>
              </div>
            ))}
        </main>
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}/>
      ) : null}
      {isPopUpVisible ? (
        <Popup onClosed={() => setIsPopUpVisible(false)} dados={"Excluir"} />
      ) : null}
    </>
    
  );
}
