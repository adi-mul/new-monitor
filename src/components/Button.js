import styled from "styled-components";

export const ButtonContainer =styled.button`
font-family:copperplate gothic;
text-transform:capitalize;
font-size:1.4rem;
margin-right:10px;
border:0.05rem solid white;
height:60px;
background:#AC3B61;
color:white;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
  background:#AC3B61 ;
  color:white;
}
&:focous{
  outline:none;
}

`