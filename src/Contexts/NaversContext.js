import React, { createContext, useState } from 'react'
import { criarNaver } from '../api/navers';

export const GlobalContext = createContext();

export function  NaversContext ({children}){

    const [form, setForm] = useState([
      {
        "id": 0,
        "nome": "Vitor",
        "cargo": "Programador",
        "idade": "21",
        "empresa": "Sem",
        "projeto": "1",
        "urlFoto": "fotos/Vitor"
      },
      {
        "id": 1,
        "nome": "Antonio",
        "cargo": "Programador",
        "idade": "21",
        "empresa": "Sem",
        "projeto": "1",
        "urlFoto": "fotos/Vitor"
      },
      {
        "id": 3,
        "nome": "Vitor",
        "cargo": "Programador",
        "idade": "21",
        "empresa": "Sem",
        "projeto": "1",
        "urlFoto": "fotos/Vitor"
      },
      {
        "id": 4,
        "nome": "Antonio",
        "cargo": "Programador",
        "idade": "21",
        "empresa": "Sem",
        "projeto": "1",
        "urlFoto": "fotos/Vitor"
      }
    ]);
    const [token, setToken] = useState("");
    function adicionarToken(token){
      setToken(token)
      console.log(token)
    }

    function adicionarForm(novoForm){
      setForm(form +  novoForm);
    }
    
    
    return (
        <GlobalContext.Provider value={{form, token, adicionarForm, adicionarToken}}>
            {children }
        </GlobalContext.Provider>
    )    
    
}