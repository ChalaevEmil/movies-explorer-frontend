import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  element: Component,
  isLogged,
  ...props
}) {
  return isLogged ? (
    <Component isLogged={isLogged} {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}
