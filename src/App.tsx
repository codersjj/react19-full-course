import { useEffect, useRef, type RefObject } from "react";

interface InputProps {
  ref: RefObject<HTMLInputElement | null>;
}

// Starting in React 19, you can now access ref as a prop for function components:
// see: https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop
const Input = ({ ref, ...props }: InputProps) => {
  return (
    <input ref={ref} type="text" placeholder="type something..." {...props} />
  );
};

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "hello";
      inputRef.current.style.background = "pink";
    }
  }, []);

  return (
    <div className="p-5">
      <h1>Auto Focus</h1>
      <Input ref={inputRef} />
    </div>
  );
}

export default App;
