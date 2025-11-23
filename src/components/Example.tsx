const Example = () => {
  return (
    <div>
      <h1>React Testing</h1>

      <input type="text" placeholder="Enter text" data-testid="custom-input" />
      <a href="https://google.com" target="_blank">
        Visit Google
      </a>

      <input type="text" placeholder="Enter something" disabled />
      <input type="text" placeholder="Enter something else" disabled />

      <img src="image1.png" alt="Sample Image one" />
      <img src="image2.png" alt="Sample Image two" />
    </div>
  );
};

export default Example;
