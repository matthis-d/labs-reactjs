import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import LikeButton from "../LikeButton";

describe("LikeButton component", () => {
  beforeEach(() => {
    render(<LikeButton initialCount={3} />);
  });

  it("should display a button with +1 as a title", () => {
    expect(screen.getByTitle("+1", { selector: "button" })).toBeVisible();
  });

  it("should display initial count", () => {
    expect(screen.getByRole("button")).toHaveTextContent("3");
  });

  it("should increment count on click", () => {
    fireEvent.click(screen.getByTitle("+1"));
    expect(screen.getByRole("button")).toHaveTextContent("4");
  });
});
