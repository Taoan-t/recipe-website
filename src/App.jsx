import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import RecipeDetail from "./ui/RecipeDetail";
import { loader } from "./ui/RecipeDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe/:recipeId", element: <RecipeDetail />, loader: loader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
