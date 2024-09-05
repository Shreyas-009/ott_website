import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchSearchResults();
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://anime-backend-lyart.vercel.app/anime/search?q=${searchQuery}&page=1`
      );
      const data = await response.json();
      setSearchResults(data.animes);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
  };

  const handleAnimeClick = (animeId) => {
    navigate(`/anime/${animeId}`);
    setIsSearching(false);
    setSearchQuery("");
  };

  return (
    <nav className="bg-zinc-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-9 w-full md:w-auto">
          <Link to="/" className="text-3xl font-bold">
            OTT
          </Link>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-orange-500 text-xl font-semibold">
              Home
            </Link>
            <Link to="/category" className="hover:text-orange-500 text-xl font-semibold">
              Category
            </Link>
          </div>
          <button className="hover:text-orange-500 md:hidden">Log Out</button>
        </div>
        <div className="flex-grow w-full md:w-auto max-w-2xl">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-zinc-800 w-full text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {isSearching && searchResults.length > 0 && (
              <div className="absolute z-50 top-full left-0 w-full mt-2 bg-zinc-800 rounded-md shadow-lg max-h-96 overflow-y-auto">
                {searchResults.map((anime) => (
                  <div
                    key={anime.id}
                    className="p-2 hover:bg-zinc-700 cursor-pointer flex items-center"
                    onClick={() => handleAnimeClick(anime.id)}
                  >
                    <img
                      src={anime.poster}
                      alt={anime.name}
                      className="w-20 object-cover mr-2 rounded"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold truncate">{anime.name}</p>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{anime.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="hover:text-orange-500 hidden md:block">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
