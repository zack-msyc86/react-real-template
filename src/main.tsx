import ReactDOM from "react-dom/client";
import App from "@/App"
import { RecoilRoot } from "recoil";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
)