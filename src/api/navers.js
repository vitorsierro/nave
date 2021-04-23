import axios from "axios";
function acesso(token) {
  
  const api = axios.create({
    baseURL: "https://navedex-api.herokuapp.com/v1/",
    headers: {
      "Content-type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  });
  return api;
}

export const pegarTudo = async (token, setForm) => {
 await acesso(token).get("/navers/")
    .then((res) => (setForm(res.data)))
    .catch((err) => {
      alert("Error não foi pegar as informações!");
      console.log(err)
      })
};

export const pegarUmNaver = async (token, setForm, id) => {
  console.log(id)
  await acesso(token).get(`/navers/${id}`)
   .then((res) => (setForm(res.data)))
   .catch((err) => {
    alert("Error não foi pegar a informação!");
    console.log(err)
    })};

export const criarNaver = async (token, formulario) => {
  formulario = JSON.stringify(formulario)
  console.log(formulario)
  acesso(token).post("/navers", formulario)
        .then(() => (console.log("dados enviado com sucesso")))
        .catch((err) => {
          alert("Error não foi possivel criar um usuario!");
          console.log(err)
          })};

export const atualizarNaver = async (token, formulario, id) => {
  formulario = JSON.stringify(formulario)
  console.log(id)
  console.log(formulario)
  acesso(token).put(`/navers/${id}`, formulario)
    .then((res) => (console.log("dados atualizado com sucesso")))
    .catch((err) => {
        alert("Error não foi possivel criar um usuario!");
        console.log(err)
        })};

export const deletarNaver = async (token, id) => {
  acesso(token).delete(`/navers/${id}`)
  .then(() => (console.log("Dados delato com sucesso")))
  .catch((err) => {
    alert("Error não foi deletar o dado!");
    console.log(err)
    })};
