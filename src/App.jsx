import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe/:recipeId", element: <Recipe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
