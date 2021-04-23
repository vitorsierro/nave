import React, { useState, useEffect } from "react";
import Popup from "../Popup/Popup";
import styled from "../../styles/Formulario.module.css";
import { useNavigate } from "react-router";
import Menu from "../Menu/Menu";
import { GlobalContext } from "../../Contexts/NaversContext";
import { atualizarNaver, criarNaver, pegarUmNaver } from "../../api/navers";

export default function Formulario({ dados }) {
  const navigate = useNavigate();
  const global = React.useContext(GlobalContext);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");
  const [formulario, setFormulario] = useState({})
  var form = {}
  var id = global.id;
  
  function formatDate(number){
    if (number !== "" && number !== undefined){
    const idade = number
    var [ano,mes,dia] = idade.replaceAll("-", "/").split("T")[0].split("/")
  }
    return `${dia}/${mes}/${ano}`
  }
  
  useEffect(()=>{
    if(dados === "Editar"){
    pegarUmNaver(global.token, setFormulario, id)
    setName(formulario.name);
    setJobRole(formulario.job_role)
    setBirthdate(formatDate(formulario.birthdate))
    setAdmissionDate(formatDate(formulario.admission_date))
    setProject(formulario.project)
    setUrl(formulario.url)}
  },[formulario.id])
  function handleSubmit(event) {
    event.preventDefault()
    setisModalVisible(true);
    form = ({
      "job_role": jobRole,
      "admission_date": admissionDate,
      "birthdate": birthdate,
      "name": name,
      "project": project,
      "url": url
    })
    if (dados === "Adicionar") {
      criarNaver(global.token, form);
    } else{ 
    atualizarNaver(global.token, form, id) }
    navigate("/Home");
  }
  return (
    <>
      <Menu />
      <div className={styled.Formulario}>

        <header>
          <p onClick={() => { navigate("/Home") }}>
            <img src="./seta.svg" alt="Seta" />
            {dados} Naver
        </p>
        </header>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <main>
            <div className={styled.LabelInput}>
              <label>Nome</label>
              <input type="name" placeholder="Nome"
                value={name}
                required
                onChange={(event) => { setName(event.target.value) }} />
            </div>
            <div className={styled.LabelInput}>
              <label>Cargo</label>
              <input type="text" placeholder="Cargo"
                value={jobRole}
                required
                onChange={(event) => { setJobRole(event.target.value) }} />
            </div>

            <div className={styled.LabelInput}>
              <label>Idade</label>
              <input type="age" placeholder="Idade"
                value={birthdate}
                required
                onChange={(event) => { setBirthdate(event.target.value) }} />
            </div>
            <div className={styled.LabelInput}>
              <label>Tempo de empresa</label>
              <input
                type="text"
                placeholder="Tempo de empresa"
                value={admissionDate}
                required
                onChange={(event) => { setAdmissionDate(event.target.value) }}
              />
            </div>

            <div className={styled.LabelInput}>
              <label>Projetos que participou</label>
              <input
                type="text"
                placeholder="Projetos que participou"
                required
                value={project}
                onChange={(event) => { setProject(event.target.value) }}
              />
            </div>
            <div className={styled.LabelInput}>
              <label>URL da foto do Naver</label>
              <input
                type="text"
                placeholder="URL da foto do Naver"
                required
                value={url}
                onChange={(event) => { setUrl(event.target.value) }}
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
          <Popup onClosed={() => setisModalVisible(false)} dados={dados} />
        ) : null}
      </div>
    </>
  );
}
