import styled, { css } from "styled-components";



export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  height: 3rem;
`;


