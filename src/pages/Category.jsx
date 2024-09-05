import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/Category components/HeroSection";
import Footer from "../components/Footer";
import CardSection from "../components/Category components/CardSection";

const Category = () => {
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://anime-backend-lyart.vercel.app/anime/info?id=attack-on-titan-112"
        );
        setAnimeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(animeData);

  return (
    <div>
      {animeData ? (
        <>
          <CardSection
            mainAnime={animeData.anime}
            mostPopularAnimes={animeData.mostPopularAnimes}
            recommendedAnimes={animeData.recommendedAnimes}
            relatedAnimes={animeData.relatedAnimes}
          />
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-400"></div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Category;
