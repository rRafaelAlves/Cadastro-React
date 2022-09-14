import React from "react";
import { Container, InputFormText, LabelForm, BotaoForm, Form, LabelContainer, BotaoRetornar, MessageError } from "../stylesGeral";
import { NameFormCasdastro, InputCadastroNomeDiv  } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { BodyInitial } from "../stylesGeral";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

export default function CadastroForm(props){
        

    
    const Navigate = useNavigate()

    const schema = yup.object().shape({
        nome: yup.string().min(2, 'Nome deve ter no mínimo 2 letras').required('Nome é obrigatório'),
        sobrenome: yup.string().min(2, 'Sobrenome deve ter no mínimo 2 letras').required('Sobrenome é obrigatório'),
        email: yup.string().email('Por favor digite um e-mail válido').required('Email é obrigatório'),
        passwordCreate: yup.string().min(5, 'Digite uma senha de pelo ao menos 5 digitos').required('Senha é obrigatória'),
        passwordAgain: yup.string().required('Por favor repita a senha').oneOf([yup.ref('passwordCreate')], 'As senhas devem ser iguais')
        
    })


    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(schema)
    })
    

    const pegaInputs  =  (e) =>{
        console.log(e)
        reset()

        const user = (e.nome + '.' + e.sobrenome).toLowerCase()
        const nome = e.nome
        const sobrenome = e.sobrenome
        const email = e.email
        const senha = e.passwordCreate
        

         const data={
            nome,
            sobrenome,
            email,
            senha
        }
      

      localStorage.setItem(user, JSON.stringify(data));
      
      Navigate('/')
        
    }




    return(

        

    <BodyInitial>
        <Container>


            <Link to='/'>
                <BotaoRetornar />
            </Link>


            <LabelContainer>CADASTRE-SE</LabelContainer>



            <Form onSubmit={handleSubmit(pegaInputs)} >

                <NameFormCasdastro>
                    
                    <InputCadastroNomeDiv>

                        <LabelForm htmlFor="nome"> Nome</LabelForm>

                        <InputFormText {...register("nome")} type='text' id="nome" name="nome" autoComplete="off"/>
                        {errors.nome?.message && <MessageError>{errors.nome?.message}</MessageError>}

                    </InputCadastroNomeDiv>

                     <InputCadastroNomeDiv>

                        <LabelForm htmlFor="Sobrenome"> Sobrenome</LabelForm>

                        <InputFormText {...register("sobrenome")} type='text' id="sobrenome" name="sobrenome" autoComplete="off"/>
                        {errors.sobrenome?.message && <MessageError>{errors.sobrenome?.message}</MessageError>}

                    </InputCadastroNomeDiv>

                </NameFormCasdastro>


                <LabelForm htmlFor="email" > Email </LabelForm>

                <InputFormText {...register("email")} type='text' id="email" name="email" autoComplete="off"/>
                {errors.email?.message && <MessageError>{errors.email?.message}</MessageError>}

                

                <LabelForm htmlFor="passwordCreate"> Insira uma senha </LabelForm>

                <InputFormText {...register("passwordCreate")} type='password' id="passwordCreate" name="passwordCreate"/>
                {errors.passwordCreate?.message && <MessageError>{errors.passwordCreate?.message}</MessageError>}

                <LabelForm htmlFor="passwordAgain"> Repita a senha </LabelForm>

                <InputFormText {...register("passwordAgain")} type='password' id="passwordAgain" name="passwordAgain"/>

                {errors.passwordAgain?.message && <MessageError>{errors.passwordAgain?.message}</MessageError>}
               

                

                <BotaoForm type='submit'> Cadastrar </BotaoForm>

            </Form>


        </Container>
    </BodyInitial>
    )
}