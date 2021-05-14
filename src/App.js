import React from "react"
import { Provider } from 'react-redux';

import Layout from "./components/layout/Layout";
import { store } from "./Store/Store";

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
