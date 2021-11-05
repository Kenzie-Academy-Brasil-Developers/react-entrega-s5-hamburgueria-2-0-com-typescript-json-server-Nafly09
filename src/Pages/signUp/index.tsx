import { Container, Content, AnimationContainer } from "./styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/Auth";
import Input from "../../Components/Input";
import { ButtonComponent } from "../../Components/Button/index";
import { Header, HeadlineContainer } from "../home/styles";
import bag from "../../assets/shopping-bag.svg";

export const SignUp = () => {
  const { signUp } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula\n, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(signUp)}>
            <Input
              name="name"
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome completo"
              error={errors.name?.message}
            />
            <Input
              name="email"
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              error={errors.password?.message}
            />
            <Input
              name="passwordConfirm"
              register={register}
              icon={FiLock}
              label="Confirmação de senha"
              placeholder="Confirmação de senha"
              type="password"
              error={errors.passwordConfirm?.message}
            />
            <ButtonComponent
              colorScheme="green"
              variant="solid"
              innerText="Enviar"
              type="submit"
            ></ButtonComponent>
            <p>
              Já tem uma conta? Faça seu{" "}
              <Link to="/" style={{ color: "green" }}>
                Login
              </Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Header>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <HeadlineContainer>
          <div>
            <img src={bag} />
          </div>
          <h2
            style={{
              alignSelf: "center",
              fontSize: 14,
              fontWeight: 500,
              width: "16rem",
            }}
          >
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </h2>
        </HeadlineContainer>
      </Header>
    </Container>
  );
};
