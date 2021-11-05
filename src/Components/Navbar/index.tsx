import { Container, LogoContainer, IconsContainer } from "./styles";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useCart } from "../../context/cart";
import { Card } from "../Card";
import { ButtonComponent } from "../Button";
import { useAuth } from "../../context/Auth";
import { SlideFade } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useCatalogue } from "../../context/catalogue/context";
import { useState } from "react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const { isOpen: isSearchOpen, onToggle } = useDisclosure();
  const { cart, deleteProduct } = useCart();
  const { Logout } = useAuth();
  const { handleSearch } = useCatalogue();
  const history = useHistory();
  const getTotalValue = () => {
    const value = cart
      .map((product) => Number(product.price))
      .reduce((a, b) => a + b, 0);
    return Math.round(value * 100) / 100;
  };
  return (
    <>
      <Container>
        <LogoContainer>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
        </LogoContainer>
        <IconsContainer>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaSearch />}
            onClick={onToggle}
          />
          <IconButton
            aria-label="cart"
            variant="ghost"
            icon={<FaShoppingCart />}
            onClick={onOpen}
          />
          <IconButton
            aria-label="login"
            variant="ghost"
            icon={<BiLogIn />}
            onClick={() => Logout()}
          />
        </IconsContainer>
      </Container>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrinho</DrawerHeader>

          <DrawerBody>
            {cart.map((product, index) => (
              <Card
                key={index}
                heading={product.name}
                price={`R$ ${product.price}`}
                caption={product.category}
                img={product.img}
                product={product}
                callback={deleteProduct}
                innerText="Remover"
                colorScheme="red"
              />
            ))}
            <p>Total: R$ {getTotalValue()}</p>
          </DrawerBody>

          <DrawerFooter>
            <ButtonComponent
              variant="outline"
              innerText="Cancelar"
              onClick={onClose}
            ></ButtonComponent>
            <ButtonComponent
              variant="solid"
              colorScheme="blue"
              innerText="Finalizar a compra"
            ></ButtonComponent>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <SlideFade in={isSearchOpen} offsetY="-80px">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder="Digite a categoria do produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement width="2.5rem">
            <IconButton
              aria-label="Search database"
              icon={<FaSearch />}
              onClick={() => {
                handleSearch(search);
                setSearch("");
              }}
              colorScheme="green"
            />
          </InputRightElement>
        </InputGroup>
      </SlideFade>
    </>
  );
};
