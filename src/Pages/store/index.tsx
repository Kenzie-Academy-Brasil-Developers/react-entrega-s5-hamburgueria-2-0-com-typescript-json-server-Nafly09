import { useCatalogue } from "../../context/catalogue/context";
import { Container } from "./styles";
import { Card } from "../../Components/Card";

export const Store = () => {
  const { catalogue } = useCatalogue();
  return (
    <Container>
      {catalogue.map((product, index) => (
        <Card
          key={index}
          heading={product.name}
          price={`R$ ${product.price}`}
          caption={product.category}
          img={product.img}
        />
      ))}
    </Container>
  );
};
