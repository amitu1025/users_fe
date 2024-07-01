import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ErrorAlert } from "./";

describe("ErrorAlert", () => {
  it("renders correctly", () => {
    const { getByRole, getByText } = render(<ErrorAlert errorMessage="foo" />);

    expect(getByRole("alert")).toBeInTheDocument();
    expect(getByText("foo"));
  });
});

// renders error message correctly when provided
it("should render error message correctly when provided", () => {
  const { getByText } = render(<ErrorAlert errorMessage="Test Error" />);
  expect(getByText("Test Error")).toBeInTheDocument();
});
