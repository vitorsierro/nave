import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export function  NaversContext ({children}){
    const [token, setToken] = useState("");
    const [id, setId] = useState("")
    function adicionarToken(novotoken){
      setToken(novotoken)
    }

    function adicionarId(novoid){
      setId(novoid)
    }
    
    return (
        <GlobalContext.Provider value={{token, id, adicionarToken, adicionarId}}>
            {children }
        </GlobalContext.Provider>
    )    
    
}