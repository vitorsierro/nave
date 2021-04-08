import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario/Formulario";
import Navers from "./components/Home/Navers";
import Login from "./components/Login/Login";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="/" element={<Navers />}/>
        <Route
          path="Adicionar"
          element={<Formulario dados={"Adicionar"} />}
        />
        <Route
          path="Editar/:id"
          element={<Formulario dados={"Editar"}/>}
        />
      </Routes>
    </BrowserRouter>

  );
}
