import React from "react";
import './App.css'
import CadastroForm from "./components/CadastroForm";
import ContainerCadastrado from "./components/ContainerCadastrado";
import LoginForm from "./components/LoginForm";
import { Body } from "./components/stylesGeral";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {




  return (
    <Body>
     


        <BrowserRouter>

            <Routes>
                <Route path="/" element={<LoginForm  />} />
                <Route path="/cadastro" element={<CadastroForm  />} />
                <Route path="/main" element={<ContainerCadastrado />}></Route>
            </Routes>

          </BrowserRouter>


      
     </Body>
  );
}

export default App;
