interface ButtonProps {
  title: string;
  text?: string;
}

const Button = (props: ButtonProps) => {
  const { text = "button" } = props;
  return <button>{text}</button>;
};

const Input = () => {
  return <input placeholder="enter" />;
};

function App() {
  return (
    <div>
      {/* HTML button with a built-in attribute */}
      <button title="Click me">Click me</button>
      {/* React component with a custom attribute (prop) */}
      <Button title="Click me" />
      <Button title="Hi" text="Hi" />
      <Button title="Hello" text="Say hello" />
      <Input />
    </div>
  );
}

export default App;
