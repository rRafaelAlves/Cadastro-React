import styled from "styled-components";


export const Body = styled.div`
background-image: url(https://wallpaperaccess.com/full/2641087.gif);
background-size: 100%;
background-repeat: no-repeat;
height: 100vh;
cursor: context-menu;

@media (max-width: 768px) {
    background-image: url(https://c.tenor.com/SJpxJsB4P3sAAAAC/wallpaper-aesthetic.gif);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`

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


@media (max-width: 768px) {
    width: 100%;
    height: 380px;
    margin: 20px;
  }

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

&.error{
    border: 1px solid red;
}

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

export const BodyInitial = styled.div`
display: flex;
justify-content:flex-end;
align-items:center;
height: 100vh;
width: 100%;
`

export const BodyMain = styled.div`
display: flex;
justify-content:center;
align-items:center;
height: 100vh;
width: 100%;
`

export const MessageError = styled.p`
font-size: 10px;
color: red;
`