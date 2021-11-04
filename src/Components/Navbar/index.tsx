import { Container, LogoContainer, IconsContainer } from "./styles";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useState } from "react";

export const Navbar = () => {
  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@kenzieBurguer:token") || ""
  );
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");
  };
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
        <IconButton
          aria-label="login"
          variant="ghost"
          icon={<BiLogIn />}
          onClick={() => Logout()}
        />
      </IconsContainer>
    </Container>
  );
};
