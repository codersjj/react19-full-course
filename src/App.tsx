import Button from "./components/Button";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Action
const increment = () => ({
  type: "INCREMENT",
});

const decrement = () => ({
  type: "DECREMENT",
});

type CounterAction = {
  type: string;
};

type CounterState = number;

// Reducer
const initialState: CounterState = 0;
const countReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="p-5">
        <Counter />
      </div>
    </Provider>
  );
}

const Counter = () => {
  const count = useSelector((state: CounterState) => state);
  const dispatch = useDispatch();

  return (
    <>
      <p>Count: {count}</p>
      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </>
  );
};

export default App;
