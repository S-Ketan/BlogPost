import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./src/layouts/DefaultLayout";
import GuestLayout from "./src/layouts/GuestLayout";
import GlobalFeed from "./src/views/GlobalFeed";
import UserPosts from "./src/views/UserPosts";
import Login from "./src/views/Login";
import Signup from "./src/views/Signup";
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
  },{
    path:"/",
    element:<GuestLayout />,
    children:[
      {path:"/login",
      element:<Login />
      },{
        path:"/signup",
        element:<Signup />
      }
    ]
  },
  {
    path: "*",
    element:<NotFound />
  },
]);

export default router;
