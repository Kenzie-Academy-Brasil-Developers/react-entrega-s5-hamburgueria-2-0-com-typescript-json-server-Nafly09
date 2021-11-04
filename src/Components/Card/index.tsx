import { CardContainer, ImageContainer, InfoContainer } from "./styles";
import { ButtonComponent } from "../Button";

interface CardProps {
  heading: string;
  caption: string;
  price: string;
  img: string;
}

export const Card = ({ heading, caption, price, img }: CardProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={img} alt="product" />
      </ImageContainer>
      <InfoContainer>
        <h3>{heading}</h3>
        <span>{caption}</span>
        <p>{price}</p>
        <ButtonComponent
          colorScheme="green"
          variant="solid"
          innerText="Adicionar"
        />
      </InfoContainer>
    </CardContainer>
  );
};
