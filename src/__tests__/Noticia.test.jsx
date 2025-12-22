import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Noticia from "../pages/Noticia";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: () => ({ id: "1" }),
  };
});

vi.mock("../data/noticias", () => ({
  noticias: [
    {
      id: 1,
      titulo: "Notícia Teste",
      categoria: "Tech",
      autor: "Autor X",
      data: "2025-01-01",
      imagem: "img.jpg",
      conteudo: "Conteúdo de teste"
    }
  ],
}));

beforeEach(() => {
  localStorage.clear();
});

test("renderiza dados da notícia", () => {
  render(
    <MemoryRouter>
      <Noticia />
    </MemoryRouter>
  );

  expect(screen.getByText("Notícia Teste")).toBeInTheDocument();
  expect(screen.getByText("Conteúdo de teste")).toBeInTheDocument();
});

test("adiciona comentário", () => {
  render(
    <MemoryRouter>
      <Noticia />
    </MemoryRouter>
  );

  const textarea = screen.getByPlaceholderText("Escreva seu comentário...");
  fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });

  fireEvent.click(screen.getByText("Enviar comentário"));

  expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
});

test("curte a notícia", () => {
  render(
    <MemoryRouter>
      <Noticia />
    </MemoryRouter>
  );

  const botaoCurtir = screen.getByText(/Curtir/);

  fireEvent.click(botaoCurtir);

  expect(botaoCurtir.textContent).toContain("1");
});
