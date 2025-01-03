import styled from "styled-components";

export const ContainerCards = styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
max-width: 960px;
margin: 0 auto;

`

export const Card = styled.div`
background-color: #0c2530;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 20px;
gap: 15px;
padding: 10px;
`

export const CardTitle = styled.h2`
font-size: 24px;
color: #a6afb8;
`

export const CardImg = styled.img`
max-width: 200px;
border-radius: 20px;
`