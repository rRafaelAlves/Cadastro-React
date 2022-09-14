import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(182, 179, 203);
border-radius: 12px;
width: 940px;
height: 580px;
box-shadow: 0px 5px 11px 3px rgba(0,0,0,0.72);
padding: 20px;
margin: 60px;

@media (max-width: 768px) {
    margin: 20px;
    width: 100%;
    height: 380px;
  }
`

export const ConteudoMain = styled.p`
position: relative;
font-size: 28px;



`

export const Name = styled.span`
color: red;
`

export const Logout = styled.div`
position: absolute;
font-size: 22px;
top: 18px;
right: 80px;

&:hover{
    text-decoration: underline;
    cursor: pointer;
    color: blue;
}

@media (max-width: 768px) {
    top: 18px;
    right: 20px;
  }

`