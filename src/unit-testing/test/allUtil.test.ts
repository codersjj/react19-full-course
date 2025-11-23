import { describe, it, expect } from "vitest";
import {
  fetchUser,
  mergeObjs,
  removeDuplicates,
  reverse,
  toUpperCase,
} from "../allUtil";

describe("All Utilities", () => {
  describe("String", () => {
    it("should return uppercase string", () => {
      expect(toUpperCase("react")).toBe("REACT");
    });

    it("should return reversed string", () => {
      expect(reverse("react")).toBe("tcaer");
    });
  });

  describe("Array", () => {
    it("should remove duplicate items from array", () => {
      const nums = [1, 3, 3, 5, 8, 5, 10];
      const result = removeDuplicates(nums);
      expect(result).toEqual([1, 3, 5, 8, 10]);
      expect(result.length).toBe(5);
    });
  });

  describe("Object", () => {
    it("should merge two objects into one", () => {
      const obj1 = { name: "Alan", age: 18 };
      const obj2 = { age: 24, sex: "male" };
      const result = mergeObjs(obj1, obj2);
      expect(result).toEqual({ name: "Alan", age: 24, sex: "male" });
    });
  });

  describe("Promise", () => {
    it("should reject when no id is provided", async () => {
      await expect(() => fetchUser()).rejects.toThrowError("id not passed");
      // await expect(fetchUser()).rejects.toBe("id not passed");
    });

    it("should resolve with user data", async () => {
      const id = 25;
      const data = await fetchUser(id);
      expect(data).toEqual({ id, name: "John" });
    });
  });
});
