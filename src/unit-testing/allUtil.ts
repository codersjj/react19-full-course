// String
export const toUpperCase = (s: string): string => s.toUpperCase();
export const reverse = (s: string) => s.split("").reverse().join("");

// Array
export const removeDuplicates = <T>(arr: readonly T[]): T[] => [
  ...new Set(arr),
];

// Object
export const mergeObjs = <T, U>(o1: T, o2: U): T & U => ({ ...o1, ...o2 });

// async function
export const fetchUser = (
  id: number
): Promise<{ id: number; name: string }> => {
  if (!id) return Promise.reject("id not passed");
  return Promise.resolve({ id, name: "John" });
};
