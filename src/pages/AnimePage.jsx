import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../components/Footer";

const AnimePage = () => {
  const { animeId } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [videoSrc, setVideoSrc] = useState(
    "blob:http://localhost:5173/fe42c65d-d9a0-4fc5-88d1-779707c55abb"
  );
  const [server, setServer] = useState("hd-1");

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(
          `https://anime-backend-lyart.vercel.app/anime/info?id=${animeId}`
        );
        setAnimeDetails(response.data.anime);
        console.log(response.data.anime);
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
        console.log(response.data.episodes);
      } catch (error) {
        console.error("Error fetching anime episodes:", error);
      }
    };

    fetchAnimeDetails();
    fetchAnimeEpisodes();
  }, [animeId]);

  const fetchEpisodeSrc = async (episodeId) => {
    try {
      const response = await fetch(
        `https://anime-backend-lyart.vercel.app/anime/episode-srcs?id=${episodeId}&server=${server}&category=dub`
      );
      const data = await response.json();
      console.log("Episode sources:", data);
      return data.sources[0]?.url;
    } catch (error) {
      console.error("Error fetching episode sources:", error);
      return null;
    }
  };

  const handleEpisodeSelect = async (episodeId) => {
    setSelectedEpisode(episodeId);
    console.log(episodeId);

    const url = await fetchEpisodeSrc(episodeId);
    if (url) {
      setVideoSrc(url);
    } else {
      console.error("Failed to load video stream");
    }
  };

  if (!animeDetails) {
    return (
      <div className="w-full h-screen fixed flex justify-center items-center bg-zinc-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  const { info, moreInfo, promotionalVideos, characterVoiceActor } =
    animeDetails;

  return (
    <>
      <div className="container mx-auto p-8 font-montserrat pt-5">
        {/* Hero Section */}
        <div
          className="relative w-full h-[60vh] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0, 0.6), rgba(0,0,0, 0.4)), url(${info.poster})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 "></div>
          <div className="absolute min-w-72  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-5xl font-bold mb-4">{info.name}</h1>
            <p className="text-lg mb-4">
              {info.stats.rating} | {moreInfo.aired}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col mt-8 ">
          <div className="flex-1 mb-8 lg:mb-0 rounded-xl p-2 my-3 bg-zinc-800">
            {!videoSrc ? (
              <img
                src={info.poster}
                alt={info.name}
                className="w-full h-[72vh] rounded-md object-contain"
              />
            ) : (
              <ReactPlayer
                url={videoSrc}
                controls
                width="100%"
                height="auto"
                className="border-none rounded-xl"
              />
            )}
          </div>

          <div className="flex-1 lg:ml-8">
            <div className="w-full py-[5vh] bg-webBlue text-white flex flex-col gap-5">
              <h1 className="text-5xl ">{info.name}</h1>
              <div className="flex flex-wrap gap-3 w-full">
                {moreInfo.genres.map((genre, index) => (
                  <button
                    key={index}
                    className="bg-zinc-700 text-white font-medium flex items-center gap-1 text-md px-6 py-1 rounded-md"
                  >
                    {genre}
                  </button>
                ))}
                <div className="flex items-center">
                  <div
                    className={`bg-webGreen w-3 h-3 rounded-full ${
                      info.stats.rating === "R" && "bg-red-600"
                    }`}
                  ></div>
                </div>
                <p className="text-xl">{info.stats.duration.split("-")[0]}</p>
                <div className="flex items-center">
                  <div
                    className={`bg-webGreen w-3 h-3 rounded-full ${
                      info.stats.rating === "R" && "bg-red-600"
                    }`}
                  ></div>
                </div>
                <p className="text-xl">
                  {info.stats.rating} {info.stats.rating === "R" && "17+"}
                </p>
              </div>
              <p className="text-xl font-thin line-clamp-3">{info.description}</p>
            </div>

            <div className="mb-4">
              <h2 className=" text-2xl font-bold">Character Voice Actors</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
                {" "}
                {info.charactersVoiceActors.map((item, index) => (
                  <div key={index} className="flex  items-center mb-4">
                    <img
                      src={item.character.poster}
                      alt={item.character.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">
                        {item.character.name} as {item.character.cast}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.voiceActor.name} as {item.voiceActor.cast}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <select
            className="w-1/5 min-w-52 p-2 bg-gray-800 text-white rounded"
            onChange={(e) => handleEpisodeSelect(e.target.value)}
          >
            <option value="">Select an episode</option>
            {episodes.map((episode) => (
              <option key={episode.id} value={episode.episodeId}>
                Episode {episode.number}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnimePage;
