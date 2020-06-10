import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import LikeButton from "../LikeButton";

describe("LikeButton component", () => {
  let onClick;
  beforeEach(() => {
    onClick = jest.fn();
    render(<LikeButton initialCount={3} onClick={onClick} />);
  });

  it("should display a button with +1 as a title", () => {
    expect(screen.getByTitle("+1", { selector: "button" })).toBeVisible();
  });

  it("should display initial count", () => {
    expect(screen.getByRole("button")).toHaveTextContent("3");
  });

  it("should call onClick prop on click", () => {
    fireEvent.click(screen.getByTitle("+1"));
    expect(onClick).toHaveBeenCalled();
  });
});
