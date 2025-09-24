import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"; // Optional: if you use global styles

function App() {
  return (
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}

export default App;
