import { forwardRef, useEffect, useRef, type InputHTMLAttributes } from "react";

// old approach, In React 19, forwardRef is no longer necessary. Pass ref as a prop instead.
const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input ref={ref} type="text" placeholder="type something..." {...props} />
  );
});

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

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
