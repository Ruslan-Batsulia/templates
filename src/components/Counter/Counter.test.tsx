import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders with initial count", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("counter-value");
    expect(countElement).toHaveTextContent("0");
  });

  test("increments count when button is clicked", () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId("increment-button");
    const countElement = screen.getByTestId("counter-value");

    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent("1");

    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent("2");
  });
});
