import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import theme from "./utils/chakra.theme";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DLinks from "./views/DLinks";
import ProfileProvider from "./context/ProfileContext";

const rootElement = document.getElementById("root") as Element;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DLinks />} />
            <Route path="/dLinks" element={<DLinks />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </ChakraProvider>
  </React.StrictMode>
);
