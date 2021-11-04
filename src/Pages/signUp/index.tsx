import { Container, Content, AnimationContainer } from "./styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/Auth";
import Input from "../../Components/Input";
import { ButtonComponent } from "../../Components/Button/index";

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
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome completo"
              name="name"
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              icon={FiLock}
              label="Confirmação de senha"
              placeholder="Confirmação de senha"
              type="password"
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <ButtonComponent
              colorScheme="green"
              variant="solid"
              innerText="Enviar"
              type="submit"
            ></ButtonComponent>
            <p>
              Já tem uma conta? Faça seu <Link to="/">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
