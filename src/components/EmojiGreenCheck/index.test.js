import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EmojiGreenCheck } from "./index";

describe("EmojiGreenCheck", () => {
  it("should render an emoji with properly description", () => {
    render(<EmojiGreenCheck />);

    const element = screen.getByRole("img", { name: /Green check mark/i });

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/^✅$/);
  });
});

// renders a span element
it("should render a span element", () => {
  const { container } = render(<EmojiGreenCheck />);
  const spanElement = container.querySelector("span");
  expect(spanElement).toBeInTheDocument();
});

// function is called without any props
it("should render correctly without any props", () => {
  const { container } = render(<EmojiGreenCheck />);
  expect(container).toMatchSnapshot();
});
