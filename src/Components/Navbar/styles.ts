import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  min-height: fit-content;
  padding: 3rem;
`;

export const LogoContainer = styled.div`
  min-width: 30vw;
  display: flex;
  justify-content: flex-end;
  > h1 {
    font-size: 30px;
    font-weight: bolder;
    > span {
      font-size: 20px;
      color: var(--logored);
    }
  }
`;

export const IconsContainer = styled.div`
  min-width: 30vw;
`;
