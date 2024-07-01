import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EmojiRedCross } from "./index";

describe("EmojiRedCross", () => {
  it("should render an emoji with properly description", () => {
    render(<EmojiRedCross />);

    const element = screen.getByRole("img", { name: /Red cross mark/i });

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/^❌$/);
  });
});

// Renders a span element
it("should render a span element", () => {
  const { container } = render(<EmojiRedCross />);
  const spanElement = container.querySelector("span");
  expect(spanElement).toBeInTheDocument();
});

// Handles missing role attribute gracefully
it("should handle missing role attribute gracefully", () => {
  const { container } = render(<EmojiRedCross />);
  const spanElement = container.querySelector("span");
  expect(spanElement).toHaveAttribute("role", "img");
});
