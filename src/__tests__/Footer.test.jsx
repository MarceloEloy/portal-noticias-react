import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renderiza o texto do footer", () => {
  render(<Footer />);
  expect(screen.getByText("© 2025 - Mundo Notícias")).toBeInTheDocument();
});
