import { useCatalogue } from "../../context/catalogue/context";
import { Container } from "./styles";
import { Card } from "../../Components/Card";
import { Navbar } from "../../Components/Navbar";
import { useCart } from "../../context/cart";

export const Store = () => {
  const { catalogue } = useCatalogue();
  const { addProduct } = useCart();
  return (
    <div style={{ minWidth: "100vw" }}>
      <Navbar />
      <Container>
        {catalogue.map((product, index) => (
          <Card
            key={index}
            heading={product.name}
            price={`R$ ${product.price}`}
            caption={product.category}
            img={product.img}
            product={product}
            innerText="Adicionar"
            callback={addProduct}
            colorScheme="green"
          />
        ))}
      </Container>
    </div>
  );
};
