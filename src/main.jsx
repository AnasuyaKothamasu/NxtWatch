import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SavedVideosProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SavedVideosProvider>
      <App />
    </SavedVideosProvider>
  </StrictMode>
);
