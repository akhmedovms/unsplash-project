import React from "react";
import { Link, Navigate } from "react-router-dom";
import { RiHome3Line, RiInformationLine, RiContactsLine } from "react-icons/ri";
import { FaHeart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
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
        <div className="flex-none items-center gap-10">
          <ul className="menu menu-horizontal flex items-center px-1 gap-2">
            <li>
              <Link to="/">
                <RiHome3Line /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <RiInformationLine /> About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <RiContactsLine /> Contact
              </Link>
            </li>
            <li>
              <div>
                <Link to="/likedphotos" className="flex gap-2 items-center">
                  <FaHeart /> Liked Photos
                </Link>
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
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              {user && (
                <button onClick={logoutUser} className="btn btn-sm btn-neutral">
                  <FaSignOutAlt /> Log out
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
