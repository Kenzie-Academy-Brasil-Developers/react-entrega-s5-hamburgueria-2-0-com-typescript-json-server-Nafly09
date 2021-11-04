import { Container, LogoContainer, IconsContainer } from "./styles";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useState, useRef } from "react";
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

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, deleteProduct } = useCart();
  const { Logout } = useAuth();
  const history = useHistory();
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
    </>
  );
};
