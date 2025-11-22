import { describe, expect, it } from "vitest";
import { add, divide, factorial, subtract } from "../mathUtil";

describe("Math Utilities", () => {
  it("should add numbers correctly", () => {
    // Arrange
    const a = 3;
    const b = 4;

    // Act: perform the action
    const result = add(a, b);

    // Assert: verify the result
    expect(result).toBe(7);
    expect(add(-2, 3)).toBe(1);
    expect(add(-2, 3)).not.toBe(-1);
  });

  it("should subtract two numbers correctly", () => {
    // Arrange
    const a = 3;
    const b = 4;

    // Act: perform the action
    const result = subtract(a, b);

    // Assert: verify the result
    expect(result).toBe(-1);
  });

  it("should divide two numbers correctly or throw error when dividing by zero", () => {
    const a = 6;
    const b = 2;

    expect(divide(a, b)).toBe(3);
    expect(() => divide(a, 0)).toThrowError("Division by zero is not allowed");
  });

  it("should factorial correctly or throw error when the number is negative", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(0)).toBe(1);
    expect(() => factorial(-1)).toThrowError("Number must be non-negative");
  });

  it.each([
    [1, 2, 3],
    [3, 8, 11],
  ])("adds %i and %i to equal %i", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});
