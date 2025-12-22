import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("renderiza inputs e botão de login", () => {
  render(<Login />);

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
  expect(screen.getByText("Entrar")).toBeInTheDocument();
});
