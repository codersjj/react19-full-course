import Button from "./components/Button";
import { combineReducers } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// // Action
// const increment = () => ({
//   type: "INCREMENT",
// });

// const decrement = () => ({
//   type: "DECREMENT",
// });

// type CounterAction = {
//   type: string;
// };

// type CounterState = {
//   count: number;
// };

// // Reducer
// const initialState: CounterState = 0;
// const countReducer = (state = initialState, action: CounterAction) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = createStore(countReducer);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

// persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: [counterSlice.reducerPath],
  // blacklist: [counterSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // see: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

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
