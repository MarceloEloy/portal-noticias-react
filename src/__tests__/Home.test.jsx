import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

vi.mock("../data/noticias", () => ({
  noticias: [
    { id: 1, titulo: "Tecnologia Avança", categoria: "Tech" },
    { id: 2, titulo: "Política Atual", categoria: "Politica" },
  ],
}));

test("mostra as notícias iniciais", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Tecnologia Avança")).toBeInTheDocument();
  expect(screen.getByText("Política Atual")).toBeInTheDocument();
});

test("filtra notícias pela busca", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText("Pesquisar notícias...");

  fireEvent.change(input, { target: { value: "Tech" } });

  expect(screen.getByText("Tecnologia Avança")).toBeInTheDocument();
  expect(screen.queryByText("Política Atual")).toBeNull();
});
