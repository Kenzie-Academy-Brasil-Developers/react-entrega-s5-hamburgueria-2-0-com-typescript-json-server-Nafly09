import { Container, LogoContainer, IconsContainer } from "./styles";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";

export const Navbar = () => {
  return (
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
        />
        <IconButton aria-label="login" variant="ghost" icon={<BiLogIn />} />
      </IconsContainer>
    </Container>
  );
};
