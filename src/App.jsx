import React, {useState} from "react";
import './App.css'
import CadastroForm from "./components/CadastroForm";
import ContainerCadastrado from "./components/ContainerCadastrado";
import LoginForm from "./components/LoginForm";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {

  const users = []


  return (
    <div className="body">

<BrowserRouter>
   <Routes>
          <Route path="/" element={<LoginForm users={users} />} />
          <Route path="/cadastro" element={<CadastroForm users={users} />} />
        </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
