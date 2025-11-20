const items = [
  { id: 1, label: "Say hello" },
  { id: 2, label: "Hi" },
  { id: 3, label: "Click me" },
];

interface ButtonProps {
  children?: React.ReactNode;
  className: string;
}

const Button = (props: ButtonProps) => {
  const { children, className } = props;
  return <button className={className}>{children}</button>;
};

function App() {
  return (
    <div>
      <button
        className="border rounded-md px-2 py-1.5 text-blue-800 bg-pink-400 cursor-pointer"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Styled btn
      </button>

      {items.map((item) => {
        return (
          <Button
            key={item.id}
            className={`
              border rounded-md
              px-2 py-1.5
              text-blue-800
              bg-pink-400
              cursor-pointer
            `}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}

export default App;
