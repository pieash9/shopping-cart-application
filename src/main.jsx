import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductProvider from "./providers/ProductProvider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <RouterProvider router={router}>
        <App />
        <Toaster />
      </RouterProvider>
    </ProductProvider>
  </QueryClientProvider>
);
