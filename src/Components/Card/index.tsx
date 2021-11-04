import { CardContainer, ImageContainer, InfoContainer } from "./styles";
import { ButtonComponent } from "../Button";

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
}

interface CardProps {
  heading: string;
  caption: string;
  price: string;
  img: string;
  product: any;
  innerText?: string;
  callback: (product: Product) => void;
  colorScheme: string;
}

export const Card = ({
  heading,
  caption,
  price,
  img,
  product,
  innerText,
  callback,
  colorScheme,
}: CardProps) => {
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
          colorScheme={`${colorScheme}`}
          variant="solid"
          innerText={`${innerText}`}
          onClick={() => callback(product)}
        />
      </InfoContainer>
    </CardContainer>
  );
};
