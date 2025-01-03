import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #ff4040;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const HomeButton = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Page404 = () => {
  return (
    <Page404Container>
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <HomeButton to="/">Voltar para a página inicial</HomeButton>
    </Page404Container>
  );
};
