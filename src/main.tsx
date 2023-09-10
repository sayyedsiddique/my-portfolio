import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  {/* ThemeProvider used for dark mode */}
    <ThemeProvider attribute="class"> 
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
