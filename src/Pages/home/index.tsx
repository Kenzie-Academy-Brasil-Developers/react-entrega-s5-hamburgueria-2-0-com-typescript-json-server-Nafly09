import {
  Container,
  Content,
  AnimationContainer,
  Header,
  HeadlineContainer,
  StyledForm,
} from "./styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Components/Input";
import { ButtonComponent } from "../../Components/Button";
import api from "../../Services/api";
import { useHistory } from "react-router";
import bag from "../../assets/shopping-bag.svg";
import { Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";

interface User {
  email: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
  data: User[];
}

export const Login = () => {
  const history = useHistory();
  const toast = useToast();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ password, email }: User) => {
    const user = { password, email };
    api
      .post("/login", user)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem(
          "@kenzieBurguer:token",
          JSON.stringify(accessToken)
        );
        toast({
          title: "Login bem sucedido",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        history.push("/store");
      })
      .catch((e) =>
        toast({
          title: "Ocorreu um erro",
          description: `${e.response.data}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

  return (
    <Container>
      <Header>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
      </Header>
      <HeadlineContainer>
        <div>
          <img src={bag} />
        </div>
        <h2
          style={{
            alignSelf: "center",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </h2>
      </HeadlineContainer>

      <Content>
        <AnimationContainer>
          <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <ButtonComponent
              colorScheme="green"
              variant="solid"
              innerText="Logar"
              type="submit"
              isFullWidth
            />
            <p>
              Não tem uma conta? Crie a sua <Link to="signup">Agora</Link>
            </p>
          </StyledForm>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
