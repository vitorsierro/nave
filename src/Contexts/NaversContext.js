import React, { createContext, useState } from 'react'
import { pegarTudo } from '../api/navers';


export const GlobalContext = createContext();

export function  NaversContext ({children}){

    const [form, setForm] = useState([{}]);
    
    const [token, setToken] = useState("");
    const [id, setId] = useState(0)
    function adicionarToken(novotoken){
      setToken(novotoken)
      console.log("adicionar Token " + novotoken)
    }

    function adicionarForm(novoForm){
      setForm(novoForm);
      console.log("adicionar formulario " + novoForm)
    }
    function adicionarId(novoid){
      setId(novoid)
    }
    
    return (
        <GlobalContext.Provider value={{form, token, id, adicionarForm, adicionarToken, adicionarId}}>
            {children }
        </GlobalContext.Provider>
    )    
    
}