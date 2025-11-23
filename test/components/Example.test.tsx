import { render, screen } from "@testing-library/react";
import Example from "../../src/components/Example";

describe("Example Component", () => {
  it("should render the correct heading", () => {
    render(<Example />);
    const header = screen.getByRole("heading", { name: "React Testing" });
    expect(header).toBeInTheDocument();
  });
});
