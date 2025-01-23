import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "./components/navigation-bar";

import Home from "./pages/index";

import "./index.css";

const LazyOmOs = lazy(() => import("./pages/om-os"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="farveskema">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-os" element={<LazyOmOs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
