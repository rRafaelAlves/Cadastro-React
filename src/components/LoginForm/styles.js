import styled from "styled-components";

export const ParagrafoForm = styled.p`
font-size: 12px;
color: blue;
text-decoration: none;

 &:hover{
    text-decoration: underline;
    cursor: pointer;

 }
`

export const ContainerRedes = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`
export const IconLinkedin = styled.div`
width: 28px;
height: 28px;
background-image: url(https://cdn-icons-png.flaticon.com/512/174/174857.png);
background-size: 100%;
margin: 4px;

&:hover{
    cursor: pointer;

}

`
export const IconWhatsApp = styled.div`
width: 28px;
height: 28px;
background-image: url(https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360);
background-size: 100%;
margin: 4px;

&:hover{
    cursor: pointer;

}

`
export const IconGitHub = styled.div`
width: 28px;
height: 28px;
background-image: url(https://cdn-icons-png.flaticon.com/512/25/25231.png);
background-size: 100%;
margin: 4px;

&:hover{
    cursor: pointer;

}

`

