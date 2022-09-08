import React, { useState } from "react";
import { Container, InputFormText, LabelForm, BotaoForm, Form, LabelContainer } from "../stylesGeral";
import { IconLinkedin, ParagrafoForm, ContainerRedes, IconWhatsApp, IconGitHub } from "./styles";
import { Link } from "react-router-dom";

export default function LoginForm(){




const pegaInputs = (e) =>{
    e.preventDefault()
}



    return(
        <Container>


            <LabelContainer>CONECTE-SE</LabelContainer>

            <Form onSubmit={(e)=>pegaInputs(e)} >
                    
                <LabelForm htmlFor="user"> Usuário</LabelForm>

                <InputFormText type='text' id="user" name="user" autoComplete="off"/>

                

                <LabelForm htmlFor="password"> Senha </LabelForm>

                <InputFormText type='password' id="password" name="password"/>

                

                <BotaoForm type='submit'> Entrar </BotaoForm>

            </Form>

                <ParagrafoForm>Esqueceu sua senha?</ParagrafoForm>

                <Link to='/cadastro'>
                <ParagrafoForm>Não tem uma conta?</ParagrafoForm>
                </Link>

                
                <ContainerRedes>
                <a target='_blank' href="https://www.linkedin.com/in/rafael-alves-521493214/"><IconLinkedin/></a>
                <a target='_blank' href="https://wa.me/12988143462"><IconWhatsApp/></a>
                <a target='_blank' href="https://github.com/rRafaelAlves"><IconGitHub/></a>
                    
                    
                    
                </ContainerRedes>


        </Container>
    )
}