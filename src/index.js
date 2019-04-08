import React from 'react';
import ReactDOM from 'react-dom';
import { store} from './reducers';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./components/App.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
