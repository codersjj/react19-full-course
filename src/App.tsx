const items = [
  { id: 1, label: "Say hello" },
  { id: 2, label: "Hi" },
  { id: 3, label: "Click me" },
];

interface ButtonProps {
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button>{children}</button>;
};

function App() {
  return (
    <div>
      {items.map((item) => {
        return <Button key={item.id}>{item.label}</Button>;
      })}
    </div>
  );
}

export default App;
