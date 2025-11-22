// A.A.A
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should add numbers correctly", () => {
    // Arrange
    const a = 3;
    const b = 4;

    // Act: perform the action
    const result = a + b;

    // Assert: verify the result
    expect(result).toBe(7);
  });
});
