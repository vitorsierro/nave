import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario/Formulario";
import Navers from "./components/Home/Navers";
import Login from "./components/Login/Login";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Navers />}/>
        <Route
          path="Adicionar"
          element={<Formulario dados={"Adicionar"} />}
        />
        <Route
          path="Editar"
          element={<Formulario dados={"Editar"}/>}
        />
      </Routes>
    </BrowserRouter>

  );
}
