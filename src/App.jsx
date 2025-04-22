import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, path: ":category", element: <Main /> }],
    // children: [{ index: true, element: <Main /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
