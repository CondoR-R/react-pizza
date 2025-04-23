import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/all" /> },
      { path: ":category", element: <Main /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
