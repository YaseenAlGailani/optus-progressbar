import { fireEvent, render, screen } from "@testing-library/react";
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
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toEqual(4);
  });

  it("renders a select element", () => {
    render(<Home />);
    const select = screen.getByRole("combobox");

    expect(select).toBeInTheDocument();
  });

  it("updates only the active bar", () => {
    render(<Home />);
    const [pb1, pb2, pb3] = screen.getAllByRole("progressbar");
    const [m10, m25, p10, p25] = screen.getAllByRole("button");
    
    fireEvent.click(p10);
    console.log(pb1.querySelector("span").innerHTML);
    expect(pb1.querySelector("span").innerHTML).toBe("10%");
    expect(pb2.querySelector("span").innerHTML).toBe("0%");
    expect(pb2.querySelector("span").innerHTML).toBe("0%");
  });

  it("updates A11y status with new progress", () => {
    render(<Home />);

    const [m10, m25, p10, p25] = screen.getAllByRole("button");
    fireEvent.click(p10);
    const statusDiv = screen.getByRole("status");
    expect(statusDiv.innerHTML).toBe("Progress bar 1: 10%");
  });
});
