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
  acesso(token).get("/navers/").then((res) =>
      (setForm(res.data.json)
  )).catch((e)=>{alert("Error não foi possivel entrar nesse usuario")})
};

export const pegarUmNaver = async (token, setDados, id) => {
  acesso(token)
    .get(`/navers/${id}`)
    .then((res) => 
      setDados(res.data.json),
    ).then((res) => 
      console.log(res.data.json)
    );
};

export const criarNaver = async (token, dados) => {
  dados = JSON.stringify(dados)
  acesso(token)
    .post("/navers", dados)
    .then((res) =>
      res
        .setState({ status: res.data.status })
        .catch(alert("Error não foi possivel criar um usuario"))
    );
};

export const atualizarNaver = async (token, dados, id) => {
  dados = JSON.stringify(dados)
  acesso(token)
    .post(`/navers/${id}`, dados)
    .then((res) =>
      res
        .setState({ status: res.data.status })
        .catch(alert("Error não foi possivel criar um usuario"))
    );
};

export const deletarNaver = async (token, id) => {
  acesso(token)
    .delete(`/navers/${id}`)
    .catch(alert("Error não foi deletar o usuario"));
};
