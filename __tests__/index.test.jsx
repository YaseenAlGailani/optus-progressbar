import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("React Progress Bars");

    expect(heading).toBeInTheDocument();
  });

  it("renders three progress bars", () => {
    render(<Home />);
     const progressBars = screen.getAllByRole("progressbar");

     expect(progressBars.length).toEqual(3);
  });

  it("renders four buttons", () => {
    render(<Home />);
    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toEqual(4);
  });
});
