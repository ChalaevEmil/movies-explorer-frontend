import AuthForm from "../AuthForm/AuthForm";

export default function Login() {
  return <AuthForm title={"Рады видеть!"} button={"Войти"} path={"/signup"} />;
}
