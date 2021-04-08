import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const cadastrarLogin = async () => {
  const article = { login: "teste", senha: "teste" };
  api
    .post("users/signup", article)
    .then((res) =>
      res
        .setState({ status: res.data.status})
        .then (console.log("cadastrado com sucesso"), console.log(res.data))
        .catch(alert("Error não foi possivel criar um usuario"))
    );
    console.log("cadastrado com sucesso")
};
export const logar = async (article, setToken) => {
  article = { login: "teste", senha: "teste" };
  api
    .post("users/login", article)
    .then((res) =>
      res
        .setState({ status: res.data.status })
        .then(setToken(res.data.token))
        .then (console.log("logado com sucesso"), console.log(res.data))
        .catch(alert("Error não foi possivel entrar nesse usuario"))
    );
};
