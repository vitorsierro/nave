import React, { useState} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import Menu from "../Menu/Menu";
import styled from "../../styles/Navers.module.css";
import Popup from "../Popup/Popup";
import { GlobalContext } from "../../Contexts/NaversContext";

export default function Navers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate()
  const global = React.useContext(GlobalContext);
  const form =  global.form;

  
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
            form.map(({ nome, cargo, urlFoto, id }) => (
              <div key={nome} className={styled.Container}>
                <img src={`./${urlFoto}.png`} alt="foto dos navers" />
                <p className={styled.Titulo}>{nome}</p>
                <p className={styled.Subtitulo}>{cargo}</p>

                <button onClick={() => {setIsModalVisible(true)}}>
                  <img src="./delete.svg" alt="excluir" className={styled.Editar} />
                </button>
                <button onClick={()=>{navigate(`Editar/${id}`);}} >
                  <img src="./edit.svg" alt="Editar" className={styled.Editar} />
                </button>
              </div>
            ))}
        </main>
      </div>
     
      {isModalVisible ? (
        <Popup onClose={() => setIsModalVisible(false)} dados={"Excluir"} />
      ) : null}
    </>
    
  );
}
