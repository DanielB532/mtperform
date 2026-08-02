import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TheWheels } from "./TheWheels";

describe("TheWheels", () => {
  it("renders the forged spec stamp caption and build quality images", () => {
    render(<TheWheels />);

    expect(screen.getByText("Every wheel is stamped and traceable.")).toBeInTheDocument();
    expect(screen.getByText("19x8.5J")).toBeInTheDocument();
    expect(screen.getByText("ET45")).toBeInTheDocument();
    expect(screen.getByText("PCD 5x112")).toBeInTheDocument();
    expect(screen.getByText("CB 57.1")).toBeInTheDocument();
    expect(screen.getByText("Max load 750kg")).toBeInTheDocument();
    expect(screen.getByText(/Mill test reports available on request/i)).toBeInTheDocument();

    expect(screen.getByAltText("Wheel hub face detail")).toBeInTheDocument();
    expect(screen.getByAltText("Wheel barrel profile detail")).toBeInTheDocument();

    expect(screen.queryByText("Trade Pricing")).not.toBeInTheDocument();
    expect(screen.queryByText(/£/)).not.toBeInTheDocument();
  });
});
