import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Jumbotron } from "./";

describe("Jumbotron", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Jumbotron title="foo" subtitle="bar" />);

    expect(getByText("foo")).toBeInTheDocument();
    expect(getByText("bar")).toBeInTheDocument();
  });

  it("contains an expected text", () => {
    render(<Jumbotron title="foo" subtitle="bar" />);

    const expectedText = "foobar";

    screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === expectedText;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
  });

  it("contains the correct DOM nodes", () => {
    render(<Jumbotron title="my-title" subtitle="my-subtitle" />);

    const nodeTitle = screen.getByText("my-title");

    expect(nodeTitle.localName).toBe("h2");
    expect(nodeTitle.className).toBe("display-4 mb-4");

    const nodeSubtitle = screen.getByText("my-subtitle");

    expect(nodeSubtitle.localName).toBe("p");
    expect(nodeSubtitle.className).toBe("lead");
  });
});

// renders title correctly when provided
it("should render title correctly when provided", () => {
  const { getByText } = render(
    <Jumbotron title="Test Title" subtitle="Test Subtitle" />
  );
  expect(getByText("Test Title")).toBeInTheDocument();
});

// handles missing title gracefully
it("should handle missing title gracefully", () => {
  const { container } = render(<Jumbotron subtitle="Test Subtitle" />);
  expect(container.querySelector(".display-4")).toBeEmptyDOMElement();
});
