import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TheWheels } from "./TheWheels";

describe("TheWheels", () => {
  it("renders the trade pricing table with the requested size range and note", () => {
    render(<TheWheels />);

    expect(screen.getByText("Trade Pricing")).toBeInTheDocument();
    expect(screen.getByText("15\"")).toBeInTheDocument();
    expect(screen.getByText("26\"")).toBeInTheDocument();
    expect(screen.queryByText("28\"")).not.toBeInTheDocument();

    ["Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"].forEach(
      (construction) => {
        expect(screen.getByText(construction)).toBeInTheDocument();
      },
    );

    expect(screen.getByText(/Trade pricing available on request/i)).toBeInTheDocument();
    expect(screen.queryByText(/£/)).not.toBeInTheDocument();
  });
});
