import React from "react";
import { Container, InputFormText, LabelForm, BotaoForm, Form, LabelContainer, BotaoRetornar } from "../stylesGeral";
import { NameFormCasdastro, InputCadastroNomeDiv  } from "./styles";
import { Link } from 'react-router-dom'

export default function CadastroForm(props){

    


    const pegaInputs = (e) =>{
        e.preventDefault()
        let nome =  e.target.nome.value

         const data={
            nome: e.target.nome.value,
            sobrenome: e.target.sobrenome.value,
            email: e.target.email.value,
            senha: e.target.passwordCreate.value
        }

        
       props.users.push(nome=data)
        console.log(props.users)
        
    }

    return(

        


        <Container>


            <Link to='/'>
                <BotaoRetornar />
            </Link>


            <LabelContainer>CADASTRE-SE</LabelContainer>



            <Form onSubmit={(e)=>pegaInputs(e)} >

                <NameFormCasdastro>
                    
                    <InputCadastroNomeDiv>

                        <LabelForm htmlFor="nome"> Nome</LabelForm>

                        <InputFormText type='text' id="nome" name="nome" autoComplete="off"/>

                    </InputCadastroNomeDiv>

                     <InputCadastroNomeDiv>

                        <LabelForm htmlFor="Sobrenome"> Sobrenome</LabelForm>

                        <InputFormText type='text' id="sobrenome" name="sobrenome" autoComplete="off"/>

                    </InputCadastroNomeDiv>

                </NameFormCasdastro>


                <LabelForm htmlFor="email" > Email </LabelForm>

                <InputFormText type='email' id="email" name="email" autoComplete="off"/>

                

                <LabelForm htmlFor="passwordCreate"> Insira uma senha </LabelForm>

                <InputFormText type='password' id="passwordCreate" name="passwordCreate"/>

                <LabelForm htmlFor="passwordAgain"> Repita a senha </LabelForm>

                <InputFormText type='password' id="passwordAgain" name="passwordAgain"/>

                

                <BotaoForm type='submit'> Cadastrar </BotaoForm>

            </Form>


        </Container>
    )
}