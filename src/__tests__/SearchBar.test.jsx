import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("chama onChange ao digitar", () => {
  const onChange = vi.fn();

  render(<SearchBar valor="" onChange={onChange} />);

  const input = screen.getByPlaceholderText("Pesquisar notícias...");
  fireEvent.change(input, { target: { value: "abc" } });

  expect(onChange).toHaveBeenCalledWith("abc");
});
