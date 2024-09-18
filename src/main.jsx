import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback="...loading">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
