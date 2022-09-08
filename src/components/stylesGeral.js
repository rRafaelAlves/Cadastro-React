import styled from "styled-components";

export const Container = styled.div`
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(182, 179, 203);
border-radius: 12px;
width: 340px;
height: 480px;
box-shadow: 0px 5px 11px 3px rgba(0,0,0,0.72);
padding: 20px;
margin: 60px;
`

export const LabelContainer = styled.h2`
margin-bottom: 20px;
`

export const InputFormText = styled.input`
width: 60%;
border: 1px solid black;
border-radius: 4px;
background-color: #fff;
padding 6px;

`

export const LabelForm = styled.label`
font-size: 16px;
`

export const BotaoForm = styled.button`
border-radius: 8px;
text-align: center;
padding: 8px;
width: 66%;
background-color: rgb(65, 40, 240);
color: #fff;
border:1px solid rgb(65, 20, 240);
margin: 12px;

    &:hover{
        opacity: 0.9;
        transition: 0.4s;

    }
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const BotaoRetornar = styled.div`
position: absolute;
top: 30px;
left: 30px; 
width: 28px;
height: 28px;
background-image: url(https://cdn-icons-png.flaticon.com/512/61/61449.png?w=360);
background-size: 100%;
`