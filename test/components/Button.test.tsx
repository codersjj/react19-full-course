import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Button Component", () => {
  it("should render a Button component using getByText", async () => {
    render(<Button>Click me</Button>);

    const btn = screen.getByText("Click me");

    expect(btn).toBeInTheDocument();
  });

  it("should render a Button component using getByRole", async () => {
    render(<Button>Click me</Button>);

    const btn = screen.getByRole("button", {
      // name: "Click me",
      name: /click me/i,
    });

    expect(btn).toBeInTheDocument();
  });

  it("should render a Button component using getByTestId", async () => {
    render(<Button>Click me</Button>);

    const btn = screen.getByTestId("custom-btn");

    expect(btn).toBeInTheDocument();
  });
});
