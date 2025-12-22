import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

test("renderiza o título do header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByText("Portal de Notícias")).toBeInTheDocument();
});

test("renderiza os links do menu", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Contato")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
