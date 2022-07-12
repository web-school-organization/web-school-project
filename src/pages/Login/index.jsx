import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Input, Button, Link, TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import learning from "../../assets/Learning-bro.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { LoginContext } from "../../contexts/login/loginContext";

import { FormLogin, MainLogin, MainLoginDiv } from "./styled";

const Login = () => {
  const history = useHistory();

  const { Login } = useContext(LoginContext);

  const [showPassword, setShowPassword] = useState("password");

  const schemaForm = yup.object().shape({
    email: yup
      .string()
      .required("Digite seu e-mail")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Digite sua senha")
  });

  const onHandleSubmit = (formLogin) => Login(formLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });

  return (
    <MainLogin>
      <MainLoginDiv bc="var(--blue-0)" className="MainLoginDiv">
        <img alt="Gif Imagem garoto estudando" src={learning} />
      </MainLoginDiv>

      <MainLoginDiv className="MainLoginForm">
        <FormLogin onSubmit={handleSubmit(onHandleSubmit)} className="form">
          <h2>Login</h2>

          <TextField
            label="E-mail"
            className="Input"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email && (
            <span className="errorMessage1">{errors.email.message}</span>
          )}

          <TextField
            label="Senha"
            className="Input"
            type={showPassword}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
          {showPassword === "password" ? (
            <AiOutlineEye
              className="showPassword"
              onClick={() => setShowPassword("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="showPassword"
              onClick={() => setShowPassword("password")}
            />
          )}

          <Button variant="contained" type="submit">
            Entrar
          </Button>

          <Link className="Link" onClick={() => history.push("/")}>
            voltar para a página inicial
          </Link>
        </FormLogin>
      </MainLoginDiv>
    </MainLogin>
  );
};

export default Login;
