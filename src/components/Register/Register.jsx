import AuthForm from "../AuthForm/AuthForm";

export default function Register() {
  return (
    <AuthForm
      title={"Добро пожаловать"}
      button={"Зарегистрироваться"}
      path={"/signin"}
    />
  );
}
