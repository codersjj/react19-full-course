import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Example from "../../src/components/Example";

describe("Example Component", () => {
  beforeEach(() => {
    render(<Example />);
  });

  it("should render the correct heading", () => {
    const header = screen.getByRole("heading", { name: "React Testing" });
    expect(header).toBeInTheDocument();
  });

  it("should find an input placeholder", () => {
    const inputNode = screen.getByPlaceholderText("Enter text");
    expect(inputNode).toBeInTheDocument();
  });

  it("should type in the input element", async () => {
    cleanup();
    const user = userEvent.setup();

    render(<Example />);

    const inputNode = screen.getByTestId("custom-input");
    expect(inputNode).toBeInTheDocument();

    await user.type(inputNode, "Hello");
    expect(inputNode).toHaveValue("Hello");
  });

  it("should find a tag with specific href", () => {
    const link = screen.getByRole("link", { name: /visit google/i });
    expect(link).toHaveAttribute("href", "https://google.com");
  });

  it("should render multiple input elements", () => {
    const inputNodes = screen.getAllByPlaceholderText(/Enter something/i);
    expect(inputNodes.length).toBe(2);

    inputNodes.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });
  });

  it("should render multiple image elements", () => {
    const imgs = screen.getAllByAltText(/Sample Image/i);
    expect(imgs.length).toBe(2);
  });
});
