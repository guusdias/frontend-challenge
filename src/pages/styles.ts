import styled from "styled-components";

export const Container = styled.main`
  text-align: center;
  width: 800px;
  height: 650px;
  margin: 0;
  background-color: #ffffff;
  padding: 40px 60px;
  border-radius: 5px;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 97vh;
    width: 84vw;
    margin: 0px;
    padding: 0px 20px;
  }
`;

export const Logo = styled.img`
  height: 10vmin;
  pointer-events: none;
`;

export const Header = styled.div`
  background-color: #4da6b4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
