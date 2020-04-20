import React from "react";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Board from "./components/Board/";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
};

export default App;
