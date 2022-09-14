import React, { useEffect } from "react";
import { ContainerMain, ConteudoMain, Name, Logout } from "./styles";
import { BodyMain } from "../stylesGeral";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function ContainerCadastrado(){

    

    let schema = yup.object().shape({
        nome: yup.string().required(),
        sobrenome: yup.string().required(),
        email: yup.string().email().required(),
        senha: yup.string().required()
      });
      

    const user = JSON.parse(sessionStorage.getItem(`userAtual`))
    const Navigate = useNavigate()


    useEffect(()=>{
        const token = sessionStorage.getItem(`token`)
        console.log(token)

        if(token){
            return
        }else{
            
            Navigate('/ ')
        }

    })




    const Sair = ()=>{
        sessionStorage.clear()
        Navigate('/')
    }


    return(
        <BodyMain>
            <ContainerMain>
                <Logout onClick={()=> Sair()}>Sair</Logout>
            
                <ConteudoMain>Olá, você está conectado como: {<Name>{user ? user.nome : ''} {user ? user.sobrenome : ''}</Name>}</ConteudoMain>


            </ContainerMain>
        </BodyMain>
    )
}