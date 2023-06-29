import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../Components/App";
import forecast from "../data/forecast.json";
import LocationDetails from "../Components/LocationDetails";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});

describe("LocationDetails", () => {
  it("render the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
