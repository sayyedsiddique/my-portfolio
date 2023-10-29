import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import i18n from "./service/i18n.ts";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  {/* ThemeProvider used for dark mode */}
  <I18nextProvider i18n={i18n}>
  <ThemeProvider attribute="class"> 
      <App />
    </ThemeProvider>
  </I18nextProvider>

  </BrowserRouter>
);
