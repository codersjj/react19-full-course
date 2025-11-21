import { useState } from "react";
import Button from "./components/Button";

const useDisclosure = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

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
