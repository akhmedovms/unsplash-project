import React from "react";
import { Link, Navigate } from "react-router-dom";
import Darklight from "./DarkLight";
import { useSelector } from "react-redux";
import { logout } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/features/unsplashSlice";

function Navbar() {
  const { likedPhotos, user } = useSelector((store) => store.unsplash);
  const dispatch = useDispatch();
  const logoutUser = () => {
    logout();
    dispatch(removeUser());
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Unsplash
          </Link>
        </div>
        <div className="flex-none items-center gap-10 ">
          <ul className="menu menu-horizontal flex items-center px-1 gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <div>
                <Link to="/likedphotos">Liked Photos</Link>
                <span className="badge badge-accent text-white">
                  {likedPhotos.length}
                </span>
              </div>
            </li>
            <li>
              <Link
                className="border-[1px] border-white btn-sm flex items-center hover:border-black"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              {user && (
                <button
                  onClick={logoutUser}
                  className="btn btn-sm btn-neutral "
                >
                  Log out
                </button>
              )}

              {!user && <Navigate to="/login" />}
            </li>
          </ul>
          <div>
            <Darklight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
