import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 80px;
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
  display: flex;
  align-items: center;
`;
