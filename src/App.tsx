import { createContext, useContext, useState } from "react";
import Button from "./components/Button";

type ThemeType = "light" | "dark";

type ContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const Context = createContext<ContextType | null>(null);

function App() {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className="p-5">
        <Text />
      </div>
    </Context.Provider>
  );
}

function Text() {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error(
      "Theme context is undefined. Please ensure your component is wrapped with ThemeProvider"
    );
  const { theme, setTheme } = ctx;

  return (
    <>
      <p>{theme}</p>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch theme
      </Button>
    </>
  );
}

export default App;
