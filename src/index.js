import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FontSizeProvider } from "./contexts/FontSizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools /> {/* 선택 사항 이거 안넣으면 밑에 그림 안뜸 */}
    <React.StrictMode>
      <FontSizeProvider>
        <App />
      </FontSizeProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
