import AuthForm from "../AuthForm/AuthForm";

export default function Register({
  onRegisterUser,
  serverError,
  onServerError,
  isLoading,
}) {
  return (
    <AuthForm
      title={"Добро пожаловать"}
      button={"Зарегистрироваться"}
      path={"/signin"}
      handleUserData={onRegisterUser}
      serverError={serverError}
      onServerError={onServerError}
      isLoading={isLoading}
    />
  );
}
