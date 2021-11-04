import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 300px;
  max-height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--grey);
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.4rem;
  cursor: pointer;
  :focus {
    border-color: var(--green);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  > h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey);
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 14px;
    font-weight: 600;
    color: var(--green);
    margin-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  min-width: 300px;
  > img {
    max-width: 300px;
    max-height: 150px;
  }
`;
