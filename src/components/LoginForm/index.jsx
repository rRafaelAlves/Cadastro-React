import React,{useEffect} from "react";
import { Container, InputFormText, LabelForm, BotaoForm, Form, LabelContainer } from "../stylesGeral";
import { IconLinkedin, ParagrafoForm, ContainerRedes, IconWhatsApp, IconGitHub } from "./styles";
import { Link, useNavigate} from "react-router-dom";
import { BodyInitial } from "../stylesGeral";
import {toast, ToastContainer
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm(props){

const Navigate = useNavigate()



useEffect(()=>{
    const token = sessionStorage.getItem(`token`)
    console.log(token)

    if(token){
        Navigate('/main')
    }else{
        
        return
    }

},[])





const atribuiToken = () =>{

    

    let token = '0'

    for(let i = 1; i <= 24; i++){

        

        token = token + Math.floor(Math.random() * 10) + 1
        
    }

    
    sessionStorage.setItem('token', token);
    
    
    Navigate('/main')
}






const pegaInputs = (e) =>{
    e.preventDefault()

    const userDigitado = e.target.user.value

    if(localStorage.getItem(`${userDigitado}`)){

        const user = JSON.parse(localStorage.getItem(`${userDigitado}`))

        if(user.senha === e.target.password.value){

            sessionStorage.setItem('userAtual', JSON.stringify(user));
            atribuiToken()
        }else{
            toast.error('Senha incorreta')
        }

    }else{
        toast.error('Usuário desconhecido')
    }

}



    return(
    <BodyInitial>
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
                <a target='_blank' rel="noreferrer"  href="https://www.linkedin.com/in/rafael-alves-521493214/"><IconLinkedin/></a>
                <a target='_blank' rel="noreferrer"  href="https://wa.me/12988143462"><IconWhatsApp/></a>
                <a target='_blank' rel="noreferrer"  href="https://github.com/rRafaelAlves"><IconGitHub/></a>
                    
                    
                    
                </ContainerRedes>


        </Container>
        <ToastContainer />
    </BodyInitial>
    )
}