import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { initialState, AppContextProvider } from "./context/GlobalContext";
import { reducer } from "./context/reducer";

const root = createRoot(document.getElementById("root"));

root.render(
  <AppContextProvider reducer={reducer} initialState={initialState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
