import Button from "./components/Button";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  decrement,
  increment,
  persistor,
  store,
  type RootState,
} from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="p-5">
          <Counter />
        </div>
      </PersistGate>
    </Provider>
  );
}

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
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
