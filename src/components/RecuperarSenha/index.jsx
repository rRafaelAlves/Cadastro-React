import React,{useEffect} from "react";
import { Container, InputFormText, LabelForm, BotaoForm, Form, LabelContainer } from "../stylesGeral";
import { useNavigate} from "react-router-dom";
import { BodyInitial } from "../stylesGeral";
import {toast, ToastContainer
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { MessageError } from "../stylesGeral";

export default function RecuperarSenha(props){

const Navigate = useNavigate()

const [userValidado, setUserValidado] = useState(false)
const [userCurrent, setUserCurrent] = useState("")

useEffect(()=>{
    const token = sessionStorage.getItem(`token`)

    if(token){
        Navigate('/main')
    }else{
        
        return
    }

},[])



const schema = yup.object().shape({
    passwordCreate: yup.string().min(5, 'Digite uma senha de pelo ao menos 5 digitos').required('Senha é obrigatória'),
    passwordAgain: yup.string().required('Por favor repita a senha').oneOf([yup.ref('passwordCreate')], 'As senhas devem ser iguais')
    
})


const {register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema)
})


const pegaInputs = (e) =>{
    e.preventDefault()

    const userDigitado = e.target.user.value

    if(localStorage.getItem(`${userDigitado}`)){

        const user = JSON.parse(localStorage.getItem(`${userDigitado}`))

        if(user.email === e.target.email.value){
            setUserCurrent(userDigitado)
            setUserValidado(true)

            
        


          // 

        }else{
            toast.error('Email Incorreto')
        }

    }else{
        toast.error('Usuário desconhecido')
    }

}

const redefinirSenha = (data) =>{
   
    const user = JSON.parse(localStorage.getItem( userCurrent ))
    let manipulaUser = {...user}
    manipulaUser.senha = data.passwordCreate

    localStorage.setItem(userCurrent, JSON.stringify(manipulaUser));

    
    setUserCurrent("")
    setUserValidado(false)
    toast.loading('Redefinindo Senha')

    setTimeout(function(){
        toast.success('Senha Redefinida')
      }, 1000)
      setTimeout(function(){
        Navigate('/')
      }, 2000)
}



    return(
    <BodyInitial>
        <Container>

        <Link to='/'>
                <BotaoRetornar />
            </Link>
            
        <LabelContainer>RECUPERAR SENHA</LabelContainer>
{userValidado === false && 


<Form onSubmit={(e)=>pegaInputs(e)} >
                    
<LabelForm htmlFor="user"> Digite seu Usuário </LabelForm>

<InputFormText type='text' id="user" name="user" autoComplete="off"/>



<LabelForm htmlFor="password"> Digite seu Email </LabelForm>

<InputFormText type='email' id="email" name="email"/>



<BotaoForm type='submit'> Recuperar </BotaoForm>

</Form>


}
            



            {userValidado === true && 

                <Form onSubmit={handleSubmit(redefinirSenha)} >
                    
                    <LabelForm htmlFor="user"> Digite a nova senha </LabelForm>
    
                    <InputFormText {...register("passwordCreate") } type='text' id="passwordCreate" name="passwordCreate" autoComplete="off"/>
                    {errors.passwordCreate?.message && <MessageError>{errors.passwordCreate?.message}</MessageError>}
                    
    
                    <LabelForm htmlFor="password"> Repita a senha </LabelForm>
    
                    <InputFormText {...register("passwordAgain") } type='text' id="passwordAgain" name="passwordAgain"/>
                    {errors.passwordAgain?.message && <MessageError>{errors.passwordAgain?.message}</MessageError>}
                    
    
                    <BotaoForm type='submit'> Redefinir </BotaoForm>
    
                </Form>



}



            


        </Container>
        <ToastContainer />
    </BodyInitial>
    )
}