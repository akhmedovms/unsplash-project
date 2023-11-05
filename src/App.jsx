import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import InnerPage from "./pages/InnerPage";
import LikedPhotos from "./pages/LikedPhotos";
import Login from "./pages/Login";

// user settings
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { addUser } from "./redux/features/unsplashSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.unsplash);
  const [aUser, setAUser] = useState(null);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "innerpage/:id",
          element: <InnerPage />,
        },
        {
          path: "likedphotos",
          element: <LikedPhotos />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are already logged in");
        dispatch(addUser(user));
      } else {
        console.log("Please login or sign up before using this website");
      }
    });
  }, []);

  useEffect(() => {
    setAUser(true);
    console.log(user);
  }, [user]);

  return <RouterProvider router={routes} />;
}

export default App;
