import React, { useState } from "react";
import Popup from "../Popup/Popup";
import styled from "../../styles/Formulario.module.css";
import { useNavigate, useParams } from "react-router";
import Menu from "../Menu/Menu";
import { GlobalContext } from "../../Contexts/NaversContext";
import { criarNaver } from "../../api/navers";


export default function Formulario({ dados }) {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [projetos, setProjetos] = useState("");
  const [urlFotos, setUrlFotos] = useState("");
  const navigate = useNavigate();
  const global = React.useContext(GlobalContext);
  const tamanho = global.form.length
  const [formulario, setFormulario] = useState([...global.form, {
    "id": tamanho }])
    var ID = useParams().id;
    console.log(ID)
  
  function handleSubmit(event){
    event.preventDefault();
    setisModalVisible(true);
    setFormulario({
    "id": ID,
    "nome":nome,
    "cargo":cargo,
    "idade":idade,
    "empresa":empresa,
    "projetos":projetos,
    "urlFotos":urlFotos
    })
    console.log(formulario)
  }
  if(dados === "Adicionar"){
    ID = tamanho;
  }

  return (
    <>
      <Menu />
      <div className={styled.Formulario}>

        <header>
          <p onClick={() => { navigate("/") }}>
            <img src="./seta.svg" alt="Seta" />
            {dados} Naver
        </p>
        </header>
        <form onSubmit={handleSubmit}>
        <main>
          <div className={styled.LabelInput}>
            <label>Nome</label>
            <input type="name" placeholder="Nome" 
            value={formulario[ID].nome}
            onChange={(event) => { setNome(event.target.value) }} />
          </div>
          <div className={styled.LabelInput}>
            <label>Cargo</label>
            <input type="text" placeholder="Cargo"
            value={formulario[ID].cargo}
             onChange={(event) => { setCargo(event.target.value) }} />
          </div>

          <div className={styled.LabelInput}>
            <label>Idade</label>
            <input type="age" placeholder="Idade"
            value={formulario[ID].idade}
             onChange={(event) => { setIdade(event.target.value) }} />
          </div>
          <div className={styled.LabelInput}>
            <label>Tempo de empresa</label>
            <input
              type="text"
              placeholder="Tempo de empresa"
              value={formulario[ID].empresa}
              onChange={(event) => { setEmpresa(event.target.value) }}
            />
          </div>

          <div className={styled.LabelInput}>
            <label>Projetos que participou</label>
            <input
              type="text"
              placeholder="Projetos que participou"
              value={formulario[ID].projetos}
              onChange={(event) => { setProjetos(event.target.value) }}
            />
          </div>
          <div className={styled.LabelInput}>
            <label>URL da foto do Naver</label>
            <input
              type="text"
              placeholder="URL da foto do Naver"
              value={formulario[ID].urlFotos}
              onChange={(event) => { setUrlFotos(event.target.value) }}
            />
          </div>
        </main>
        <footer>
          <button
            type="submit"
            id="botao_pesquisar"
          >
            Salvar
        </button>
        </footer>
        </form>
        {isModalVisible ? (
          <Popup onClose={() => setisModalVisible(false)} dados={dados} />
        ) : null}
      </div>
    </>
  );
}
