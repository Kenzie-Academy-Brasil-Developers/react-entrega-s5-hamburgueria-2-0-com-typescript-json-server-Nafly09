import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 100vw;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  > h1 {
    font-size: 30px;
    font-weight: bolder;
    margin: 1rem;
    > span {
      font-size: 20px;
      color: var(--logored);
    }
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex: column;
  justify-content: center;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 95px;
  padding: 0.5rem;
  margin: 0 0.5rem;

  @media (min-width: 425px) {
    width: 377px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-right: 1rem;
    min-width: 60px;
    min-height: 60px;
    max-height: 60px;
    background-color: #27ae601a;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const customAppearence = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px)
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${customAppearence} 1s;

  form {
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }

    > div {
      margin-top: 16px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;
