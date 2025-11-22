export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const divide = (a: number, b: number) => {
  if (b === 0) throw new Error("Division by zero is not allowed");

  return a / b;
};
export const factorial = (n: number): number => {
  if (n < 0) throw new Error("Number must be non-negative");
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
