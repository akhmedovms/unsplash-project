import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import {
  AiFillInfoCircle,
  AiOutlineCalendar,
  AiOutlinePlus,
  AiOutlineCamera,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function InnerPage() {
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=e9CrxcxKcoAoK0qKDWkSVor9gpnKoe2F3MAcNwWL6Zs`;
  const { data: splash, isPending, error } = useFetch(url);

  return (
    <div className="mt-10 p-3 shadow-lg">
      {splash && (
        <div key={id}>
          <div className="flex gap-4 pb-5 items-center ">
            <img
              className="rounded-full object-cover w-[50px] h-[50px]"
              src={splash.user.profile_image.large}
              alt=""
            />
            <div className="mr-auto">
              <p>{splash.user.name}</p>
              <p>Avaiable for hire ✅</p>
            </div>
            <div className=" p-2 rounded-md border-[1px] ">
              <div className="con-like">
                <input className="like " type="checkbox" title="like" />
                <div className="checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="filled"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100"
                    width="100"
                    className="celebrate"
                  >
                    <polygon className="poly" points="10,10 20,20"></polygon>
                    <polygon className="poly" points="10,50 20,50"></polygon>
                    <polygon className="poly" points="20,80 30,70"></polygon>
                    <polygon className="poly" points="90,10 80,20"></polygon>
                    <polygon className="poly" points="90,50 80,50"></polygon>
                    <polygon className="poly" points="80,80 70,70"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <div className=" flex item-center p-2 rounded-md border-[1px">
              <button className="cursor-pointer outline-none duration-300 border-[1px] p-[0.6rem] rounded-md ">
                <AiOutlinePlus />
              </button>
            </div>
            <div className="dropdown dropdown-end dropdown-hover">
              <Link
                to={splash.links.download}
                className="m-1 p-2 border-[1px]  rounded-md"
              >
                Download
              </Link>
              <ul className="border-[1] p-1 mt-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <Link to={splash.urls.small}>
                    <span>Small</span> (640 x 960)
                  </Link>
                </li>
                <li>
                  <Link to={splash.urls.regular}>
                    <span>Medium</span> (1920 x 2880)
                  </Link>
                </li>
                <li>
                  <Link to={splash.urls.full}>
                    <span>Large</span> (2400 x 3600)
                  </Link>
                </li>
                <li>
                  <Link to={splash.urls.raw}>
                    <span>Original Size</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src={splash.urls.raw}
                alt=""
                className="w-[70%] h-[500px] object-contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex sm:flex-row gap-6 sm:gap-28 p-4 sm:p-6">
                <p>
                  Views: <br />
                  <span>{Number(splash.views).toLocaleString()}</span>
                </p>
                <p>
                  Liker: <br />
                  <span>{Number(splash.likes).toLocaleString()}</span>
                </p>
                <p>
                  Downloads: <br />
                  <span>{Number(splash.downloads).toLocaleString()}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="arrow-button gap-2 rounded-md px-3 py-1">
                  <FaShare />
                  Share
                </button>
                <button className="arrow-button gap-2 rounded-md px-3 py-1">
                  <AiFillInfoCircle />
                  Info
                </button>
                <button className="arrow-button gap-2 rounded-md px-3 py-1">
                  <BsThreeDots />
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-1 pb-10">
                <p className=" pt-10 pb-8">
                  instagram: {splash.user.social.instagram_username}
                </p>
                <p className="flex items-center gap-1 cursor-pointer">
                  <SlLocationPin /> instagram: {splash.location.name}
                </p>
                <p className="flex items-center gap-1">
                  <AiOutlineCalendar /> Published on:{" "}
                  {splash.created_at.substring(0, 10)}
                </p>
                <p className="flex items-center gap-1">
                  <AiOutlineCamera /> {splash.exif.name}
                </p>
                <p className="flex items-center gap-1">
                  <GoShieldCheck /> Free to use under the Unsplash License
                </p>
              </div>
            </div>
            <div className="gap-2 tags-wrapper">
              {splash.tags.map((tag) => {
                return (
                  <span
                    className=" cursor-pointer px-2 py-1 h-min w-max rounded-sm border-[1px] "
                    key={tag.title}
                  >
                    {tag.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnerPage;
