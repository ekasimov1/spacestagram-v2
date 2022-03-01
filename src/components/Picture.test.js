import { formatDate, getUrl } from "./Picture";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Picture from "./Picture";

describe("Picture", () => {
  it("formats selected date to YYYY-MM-DD", () => {
    const date = new Date(2022, 1, 2);
    expect(formatDate(date)).toEqual("2022-02-02");
  });

  it("formats selected date to YYYY-MM-DD", () => {
    const date = new Date(2022, 1, 2, 3, 23);
    expect(formatDate(date)).toEqual("2022-02-02");
  });

  it("gets url as a string using variables", () => {
    const apiKey = "12345";
    const formattedDate = "2022-02-21";
    expect(getUrl(apiKey, formattedDate)).toEqual(
      "https://api.nasa.gov/planetary/apod?api_key=12345&date=2022-02-21"
    );
  });
});

describe("Like Button", () => {
  it("renders Like Button", () => {
    render(<Picture />);

    expect(screen.getByTestId("like-button")).toHaveStyle({
      color: "rgba(0, 0, 0, 0.54)",
    });
  });

  it(" checks if clicked like button changes color ", () => {
    render(<Picture />);
    fireEvent.click(screen.getByTestId("like-button"));

    expect(screen.getByTestId("like-button")).toHaveStyle({
      color: "rgb(244, 67, 54)",
    });
  });
});
