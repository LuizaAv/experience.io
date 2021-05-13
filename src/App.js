import React from "react"
import './App.css';
import { Provider } from 'react-redux';

import Layout from "./components/layout/Layout";
import { store } from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
