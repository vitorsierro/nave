import axios from "axios";

function acesso(token) {
  const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      token: token,
    },
  });
  return api;
}

export const pegarTudo = async (url, token, setDados) => {
  acesso(token)
    .get("/navers")
    .then((res) =>
      res
        .setDados(res.dados.json)
        .catch(alert("Error não foi possivel criar um usuario"))
    );
};
export const pegarUmNaver = async (token, setDados, id) => {
  acesso(token)
    .get(`/navers/:${id}`)
    .then((res) =>
      res
        .setDados(res.dados.json)
        .catch(alert("Error não foi possivel criar um usuario"))
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
export const atualizarNaver = async (token, dados, setDados, id) => {
  dados = JSON.stringify(dados)
  acesso(token)
    .post(`/navers/:${id}`, dados)
    .then((res) =>
      res
        .setState({ status: res.data.status })
        .catch(alert("Error não foi possivel criar um usuario"))
    );
};

export const deletarNaver = async (token, setDados, id) => {
  acesso(token)
    .delete(`/navers/:${id}`)
    .catch(alert("Error não foi deletar o usuario"));
};
