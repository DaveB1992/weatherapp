import React from "react";
import render from "@testing-library/react";
import ForecastDetails from "../Components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 15,
    wind: {
      speed: 10,
      direction: "n",
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
