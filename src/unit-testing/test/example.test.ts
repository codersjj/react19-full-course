import { describe, it, expect } from "vitest";

describe("Vitest expect API demonstrations", () => {
  it("toBe", () => {
    const a = 5;
    const obj1 = { name: "Aria" };
    const obj2 = { name: "Aria" };
    expect(a).toBe(5);
    expect(obj1).not.toBe(obj2);
  });

  it("toEqual", () => {
    const a = 5;
    const obj1 = { name: "Aria" };
    const obj2 = { name: "Aria" };
    const obj3 = { name: "Aria", dob: undefined };
    const arr1 = [1, undefined, 2];
    const arr2 = [1, , 2];
    expect(a).toEqual(5);
    expect(obj1).toEqual(obj2);
    expect(obj1).toEqual(obj3);
    expect(arr1).toEqual(arr2);
  });

  it("toStrictEqual", () => {
    const obj1 = { name: "Elena" };
    const obj2 = { name: "Elena" };
    const obj3 = { name: "Elena", dob: undefined };
    const arr1 = [1, undefined, 2];
    const arr2 = [1, , 2];
    expect(obj1).toStrictEqual(obj2);
    expect(obj1).not.toStrictEqual(obj3);
    expect(arr1).not.toStrictEqual(arr2);
  });

  it("toBeTruthy", () => {
    const val = 5;
    expect(val).toBeTruthy();
    expect(false).not.toBeTruthy();
    expect(null).not.toBeTruthy();
    expect(undefined).not.toBeTruthy();
    expect(NaN).not.toBeTruthy();
    expect(0).not.toBeTruthy();
    expect(-0).not.toBeTruthy();
    expect(0n).not.toBeTruthy();
    expect("").not.toBeTruthy();
  });

  it("toBeGreaterThan", () => {
    const num = 5;
    expect(num).toBeGreaterThan(4);
    expect(num).not.toBeGreaterThan(5.1);
    expect(num).not.toBeGreaterThan(5);
  });

  it("toBeGreaterThanOrEqual", () => {
    const num = 5;
    expect(num).toBeGreaterThanOrEqual(4);
    expect(num).not.toBeGreaterThanOrEqual(5.1);
    expect(num).toBeGreaterThanOrEqual(5);
  });

  it("toBeLessThan", () => {
    const num = 5;
    expect(num).toBeLessThan(5.1);
    expect(num).not.toBeLessThan(4.9);
    expect(num).not.toBeLessThan(5);
  });

  it("toBeLessThanOrEqual", () => {
    const num = 5;
    expect(num).toBeLessThanOrEqual(5.1);
    expect(num).not.toBeLessThanOrEqual(4.9);
    expect(num).toBeLessThanOrEqual(5);
  });

  it("toContain", () => {
    const str = "Hello World";
    expect(str).toContain("Hello");
  });

  it("toMatch", () => {
    const str = "Hello World";
    expect(str).toMatch("Hello");
    expect(str).not.toMatch(/hello/);
    expect(str).toMatch(/hello/i);
  });

  it("toHaveProperty", () => {
    const p = { name: "Elena" };
    expect(p).toHaveProperty("name");
    expect(p).not.toHaveProperty("account");
  });

  it("toBeDefined", () => {
    const p = { name: "Elena" };
    const getName = (p: { name: string }) => p.name;
    expect(p.name).toBeDefined();
    expect(getName(p)).toBeDefined();
  });
});
