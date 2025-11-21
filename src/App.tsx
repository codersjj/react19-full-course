import Button from "./components/Button";
import useDisclosure from "./hooks/use-disclosure";

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="p-5">
      {isOpen && <div className="w-8 h-6 bg-amber-300"></div>}
      <Button variant="outline" onClick={onToggle}>
        {isOpen ? "Hide" : "Show"} box
      </Button>
    </div>
  );
}

export default App;
