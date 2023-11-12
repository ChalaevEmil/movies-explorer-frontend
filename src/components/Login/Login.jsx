import AuthForm from "../AuthForm/AuthForm";

export default function Login({
  isLoading,
  onLoginUser,
  serverError,
  onServerError,
}) {
  return (
    <AuthForm
      title={"Рады видеть!"}
      button={"Войти"}
      path={"/signup"}
      handleUserData={onLoginUser}
      serverError={serverError}
      onServerError={onServerError}
      isLoading={isLoading}
    />
  );
}
