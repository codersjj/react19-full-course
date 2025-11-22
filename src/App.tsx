import Button from "./components/Button";
import { ThemeProvider, useTheme } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="p-5">
        <Text />
      </div>
    </ThemeProvider>
  );
}

function Text() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <p>{theme}</p>
      <Button onClick={toggleTheme}>Switch theme</Button>
    </>
  );
}

export default App;
