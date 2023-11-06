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
            <div>
              <Darklight />
            </div>

            {user ? (
              <div className="dropdown dropdown-end cursor-pointer pl-3">
                <div tabIndex={0} className="avatar">
                  <div className="w-10 rounded-full ring ring-[#357EC6] ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content text-center w-64 mt-2 z-[1] card card-compact bg-gray-800 p-2 shadow"
                >
                  <div className="card-body">
                    <h3 className="text-[12px] text-white pb-2">
                      {user.email}
                    </h3>
                    <div className="flex justify-center">
                      <img className="rounded-full w-20" src={user.photoURL} />
                    </div>
                    <h3 className="text-white py-2">
                      HI!{" "}
                      {user.providerData.map((data) => {
                        return <span>{data.displayName}</span>;
                      })}
                    </h3>
                    <div className="flex justify-center gap-1">
                      <div>
                        <Link
                          className="border-[1px] border-gray-800 gap-1 text-white hover:border-white transition btn-sm flex items-center rounded-l-full"
                          to="/login"
                        >
                          <FaSignInAlt /> Login
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={logoutUser}
                          className="border-[1px] btn gap-1 hover:text-white hover:bg-gray-800 btn-sm flex items-center rounded-r-full"
                        >
                          <FaSignOutAlt /> Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Navigate to="/login" />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
