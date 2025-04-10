import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./views/NotFound";

import DefaultPage from "./views/DefaultPage";
import Oo from "./views/Oo";
import Hvt from "./views/Hvt";
import Svd from "./views/Svd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "/Hvt",
        element: <Hvt/>
      },
      {
        path: "/Svd",
        element: <Svd />,
      },
      {
        path: "/Oo",
        element: <Oo />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
