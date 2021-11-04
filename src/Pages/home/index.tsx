import { Container, Content, AnimationContainer } from "./styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Components/Input";
import { ButtonComponent } from "../../Components/Button";
import api from "../../Services/api";
import { useHistory } from "react-router";

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

        return history.push("/store");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
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
            ></ButtonComponent>
            <p>
              Não tem uma conta? Crie a sua <Link to="signup">Agora</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
