import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const noticiaMock = {
  id: 1,
  titulo: "Notícia Teste",
  categoria: "Tecnologia",
  imagem: "img.jpg"
};

test("não renderiza nada sem notícia", () => {
  const { container } = render(<NewsCard />);
  expect(container.firstChild).toBeNull();
});

test("renderiza notícia corretamente", () => {
  render(
    <MemoryRouter>
      <NewsCard noticia={noticiaMock} />
    </MemoryRouter>
  );

  expect(screen.getByText("Notícia Teste")).toBeInTheDocument();
  expect(screen.getByText("Tecnologia")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
