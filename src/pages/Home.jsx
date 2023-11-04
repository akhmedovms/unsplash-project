import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Home() {
  const [input, setInput] = useState(
    () => localStorage.getItem("input") || "features"
  );
  const [inpText, setInputText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const {
    data: splash,
    isPending,
    error,
  } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=e9CrxcxKcoAoK0qKDWkSVor9gpnKoe2F3MAcNwWL6Zs&page=${currentPage}&query=${input}`
  );

  useEffect(() => {
    if (splash) {
      setData(splash.results || []);
    }
  }, [splash]);

  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(inpText);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const totalPages = splash?.total_pages || 1;
    const maxVisibleButtons = 5;
    for (
      let page = 1;
      page <= Math.min(totalPages, maxVisibleButtons);
      page++
    ) {
      buttons.push(
        <button
          key={page}
          className={`join-item btn ${
            currentPage === page ? "btn-active" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    }

    if (totalPages > maxVisibleButtons) {
      buttons.push(
        <button key="ellipsis" className="join-item btn" disabled>
          ...
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <div className="form-control">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered input-info w-full max-w-lg custom-width"
            onChange={(e) => setInputText(e.target.value)}
            value={inpText}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      {data.length > 0 ? (
        <ul className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {data.map((spl) => {
            return (
              <li key={spl.id} className="grid-item">
                <Link to={`/innerpage/${spl.id}`}>
                  <div className="rounded-sm">
                    <img
                      className="w-full h-52 object-cover blurry-image"
                      src={spl.urls.regular}
                      alt=""
                      onLoad={(e) => {
                        e.target.classList.remove("blurry-image");
                        e.target.classList.add("loaded");
                      }}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Loading />
      )}
      <div className="join flex justify-center pt-10">
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          «
        </button>
        {renderPaginationButtons()}
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Home;
