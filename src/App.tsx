import { useEffect, useRef } from "react";

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
      <input ref={inputRef} type="text" placeholder="type something..." />
    </div>
  );
}

export default App;
