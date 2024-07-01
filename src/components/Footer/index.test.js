import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Footer } from "./";

// renders footer element with correct class names
it("should render footer element with correct class names", () => {
  const { container } = render(<Footer />);
  const footer = container.querySelector("footer");
  expect(footer).toHaveClass(
    "footer mt-auto py-3 fixed-bottom bg-dark border-top border-info"
  );
});

// handles missing or incorrect class names gracefully
it("should handle missing or incorrect class names gracefully", () => {
  const { container } = render(<Footer />);
  const footer = container.querySelector("footer");
  expect(footer).not.toHaveClass("non-existent-class");
});
