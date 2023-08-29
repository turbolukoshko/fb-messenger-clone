import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
