import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "../../src/components/Toggle";

describe("Toggle Component", () => {
  it("should render button", () => {
    render(<Toggle />);

    const btn = screen.getByRole("button", { name: "Toggle" });

    expect(btn).toBeInTheDocument();
  });

  it("should toggle the visibility of the element when clicked", async () => {
    const user = userEvent.setup();
    render(<Toggle />);

    const btn = screen.getByRole("button", { name: "Toggle" });

    expect(screen.queryByText("Hi, there!")).toBeNull();

    await user.click(btn);

    expect(screen.queryByText("Hi, there!")).toBeInTheDocument();

    await user.click(btn);

    expect(screen.queryByText("Hi, there!")).toBeNull();
  });
});
