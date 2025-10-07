import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./src/layouts/DefaultLayout";
import GlobalFeed from "./src/views/GlobalFeed";
import UserPosts from "./src/views/UserPosts";
import NotFound from "./src/views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/posts",
        element: <GlobalFeed />,
      },
      {
        path: "posts/:id",
        element: <UserPosts />,
      },
    ],
  },
  {
    path: "*",
    element:<NotFound />
  },
]);

export default router;
