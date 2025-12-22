import { render, screen } from "@testing-library/react";
import Contato from "../pages/Contato";

test("renderiza informações de contato", () => {
  render(<Contato />);

  expect(screen.getByText("Entre em Contato")).toBeInTheDocument();
  expect(screen.getByText(/Email:/)).toBeInTheDocument();
  expect(screen.getByText(/Telefone:/)).toBeInTheDocument();
  expect(screen.getByText(/Localização:/)).toBeInTheDocument();
});
