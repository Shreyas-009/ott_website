import React from "react";
import { FaHeart, FaPlay, FaClock, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ animeInfo, moreInfo, isMainCard = false }) => {
  const { id, name, poster, description } = animeInfo;
  const stats = animeInfo.stats || animeInfo;
  const genres = moreInfo?.genres || [];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/${id}`);
  };

  return (
    <div
      className={`${
        isMainCard ? "w-full h-[60vh]" : "w-full h-96"
      } overflow-hidden bg-cover rounded-xl shadow-xl cursor-pointer group hover:shadow-2xl bg-gradient-to-b from-black/60 to-black/40`}
      style={{ backgroundImage: `url(${poster})` }}
      onClick={handleClick}
    >
      <main className="w-full h-full bg-gradient-to-t from-webBlue to-[#0007] rounded-xl relative opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* <div className="absolute top-4 right-4 p-2 cursor-pointer bg-white rounded-full">
          <FaHeart className="text-red-500" />
        </div> */}
        <div className="absolute bottom-0 left-0 pl-4 pb-4 pr-2 w-full flex flex-col gap-3 items-start">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex justify-between w-full">
            <div className="flex flex-wrap gap-1">
              {stats.type && (
                <span className="text-zinc-300 text-xs">{stats.type}</span>
              )}
              {stats.duration && (
                <span className="text-zinc-300 text-xs">
                  <FaClock className="inline mr-1" />
                  {stats.duration}
                </span>
              )}
            </div>
            {/* {stats.rating && (
              <span className="flex items-center gap-1 text-xs text-webGreen">
                <FaStar /> {stats.rating}
              </span>
            )} */}
          </div>
          {isMainCard && description && (
            <p className="font-thin text-sm">{description.slice(0, 150)}...</p>
          )}
          {!isMainCard && (
            <p className="font-thin text-xs">
              Episodes: {stats.episodes?.sub || "N/A"} (Sub) /{" "}
              {stats.episodes?.dub || "N/A"} (Dub)
            </p>
          )}
          <button className="bg-webGreen px-3 py-2 text-sm rounded-md flex items-center gap-2">
            <FaPlay /> Watch Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Card;
