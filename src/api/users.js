import axios from "axios";

export const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});

export const logar = async (dados, setToken) => {
  api.post("users/login", dados)
    .then((res) => (setToken(res.data.token)))
    .catch((err) => {
           alert("Não foi possivel efetuar o login!");
           console.log(err)
           })
};