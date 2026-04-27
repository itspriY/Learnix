import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App.jsx';
import {Provider} from "react-redux";
import {appStore} from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { useLoadUserQuery } from "@/features/api/authApi";
import Loadingspinner from "./components/ui/Loadingspinner";


const Custom = ({children}) => {
  const {isLoading} = useLoadUserQuery();
  return <> {isLoading? <Loadingspinner/> : <>{children}</> }</>;
  
};



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {appStore}>
      <Custom>
       <App />
       <Toaster />
      </Custom>
    </Provider>
  </StrictMode>
);
