import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/pizzas/all" /> },
      { path: "/pizzas/:category", element: <Main /> },
      { path: "/cart", element: <Cart /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate to="/not-found" /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
