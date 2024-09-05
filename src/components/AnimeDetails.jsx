import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeDetails = ({ animeId, onClose }) => {
  const [animeDetails, setAnimeDetails] = useState(null);
  const [animeDetailsMore, setAnimeDetailsMore] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(
          `https://anime-backend-lyart.vercel.app/anime/info?id=${animeId}`
        );
        setAnimeDetails(response.data.anime.info);
        setAnimeDetailsMore(response.data.anime.moreInfo);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };

    const fetchAnimeEpisodes = async () => {
      try {
        const response = await axios.get(
          `https://anime-backend-lyart.vercel.app/anime/episodes/${animeId}`
        );
        setEpisodes(response.data.episodes);
      } catch (error) {
        console.error("Error fetching anime episodes:", error);
      }
    };

    fetchAnimeDetails();
    fetchAnimeEpisodes();
  }, [animeId]);

  const handleEpisodeSelect = async (episodeId) => {
    setSelectedEpisode(episodeId);
    try {
      const response = await axios.get(
        `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${episodeId}&server=vidstreaming&category=sub`
      );
      setVideoSrc(response.data.sources[0].url);
    } catch (error) {
      console.error("Error fetching episode sources:", error);
    }
  };

  if (!animeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-webBlue text-white p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="float-right text-2xl">
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{animeDetails.title}</h2>
        <div className="flex mb-4">
          <img
            src={animeDetails.poster}
            alt={animeDetails.title}
            className="w-1/3 rounded-xl mr-4"
          />
          <div>
            <p className="mb-2">{animeDetails.description}</p>
            <div className="flex gap-2 mb-2">
              {animeDetailsMore.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-webGreen text-white px-2 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
            <p>Rating: {animeDetails.rating}</p>
            <p>Year: {animeDetails.releaseDate}</p>
            <p>Status: {animeDetails.status}</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Episodes</h3>
          <div className="grid grid-cols-5 gap-2">
            {episodes.map((episode) => (
              <button
                key={episode.id}
                onClick={() => handleEpisodeSelect(episode.id)}
                className="bg-webGreen hover:bg-webGreen-dark text-white py-1 px-2 rounded"
              >
                {episode.number}
              </button>
            ))}
          </div>
        </div>
        {videoSrc && (
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Watch Episode</h3>
            <video controls className="w-full" src={videoSrc}>
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetails;
