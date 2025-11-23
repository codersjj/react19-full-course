import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../src/components/Button";

describe("Button Component", () => {
  it("should render a Button component", async () => {
    render(<Button>Click me</Button>);

    const btn = screen.getByText("Click me");

    expect(btn).toBeInTheDocument();
  });
});
