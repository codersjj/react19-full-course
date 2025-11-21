import { useState } from "react";
import Button from "./components/Button";

// const items = [
//   { id: 1, label: "Say hello" },
//   { id: 2, label: "Hi" },
//   { id: 3, label: "Click me" },
// ];

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-5">
      <p>Value: {value}</p>
      <input
        type="text"
        className="mr-4 border"
        placeholder="Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => alert(`Input value is: ${value}`)}>
        Show input value
      </Button>

      <p>Count: {count}</p>
      <Button
        variant="outline"
        className="cursor-pointer"
        // onClick={() => setCount(count + 1)}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Increment
      </Button>
      {/* <button
        className="border rounded-md px-2 py-1.5 text-blue-800 bg-pink-400 cursor-pointer"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Styled btn
      </button> */}

      {/* <div className="flex flex-row justify-center gap-2 mt-4">
        {items.map((item) => {
          return (
            <Button
              key={item.id}
              title={item.label}
              variant="error"
              className="italic"
            >
              {item.label}
            </Button>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
