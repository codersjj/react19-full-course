const Button = () => {
  return <button>Click me</button>;
};

const Input = () => {
  return <input placeholder="enter" />;
};

function App() {
  return (
    <div>
      {/* <button>Click me</button> */}
      <Button />
      <Button />
      <Button />
      <Input />
    </div>
  );
}

export default App;
