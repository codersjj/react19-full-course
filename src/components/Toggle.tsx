import { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {isVisible && <p>Hi, there!</p>}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default Toggle;
