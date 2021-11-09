import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux";
import RepositoriesList from "./Components/RepositoriesList/RepositoriesList";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
