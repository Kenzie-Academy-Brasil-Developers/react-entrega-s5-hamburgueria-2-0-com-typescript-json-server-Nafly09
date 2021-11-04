import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 300px;
  min-height: 150px;
  padding: 0 1.3rem;
  > img {
    max-height: 300px;
    max-width: 150px;
  }
  @media (min-width: 1615px) {
    padding: 0;
  }
`;
