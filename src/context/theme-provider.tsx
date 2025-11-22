import { useState } from "react";
import { ThemeContext } from "./theme-context";
import type { ThemeType } from "./types";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    // Starting in React 19, you can render <SomeContext> as a provider. In older versions of React, use <SomeContext.Provider>.
    // see: https://react.dev/reference/react/createContext#provider
    <ThemeContext
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
};
