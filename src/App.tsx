interface ButtonProps {
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button>{children}</button>;
};

const Input = () => {
  return <input placeholder="enter" />;
};

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button>
        <Input />
      </Button>
    </div>
  );
}

export default App;
