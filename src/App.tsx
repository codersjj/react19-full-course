import Button from "./components/Button";

const items = [
  { id: 1, label: "Say hello" },
  { id: 2, label: "Hi" },
  { id: 3, label: "Click me" },
];

function App() {
  return (
    <div>
      <button
        className="border rounded-md px-2 py-1.5 text-blue-800 bg-pink-400 cursor-pointer"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Styled btn
      </button>

      <div className="flex flex-row justify-center gap-2 mt-4">
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
      </div>
    </div>
  );
}

export default App;
