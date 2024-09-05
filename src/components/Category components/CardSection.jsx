import React, { useState } from "react";
import Card from "./Card";
import AnimeDetails from "../AnimeDetails";

const ScrollableRow = ({ title, animeList, onCardClick }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="relative">
      <div className="flex overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-4">
          {animeList.map((anime) => (
            <div key={anime.id} className="flex-none w-64">
              <Card
                animeInfo={anime}
                isMainCard={false}
                onCardClick={onCardClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CardSection = ({
  mainAnime,
  mostPopularAnimes,
  recommendedAnimes,
  relatedAnimes,
  isLoading,
}) => {
  const [selectedAnimeId, setSelectedAnimeId] = useState(null);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  const handleCardClick = (animeId) => {
    setSelectedAnimeId(animeId);
  };

  const handleCloseDetails = () => {
    setSelectedAnimeId(null);
  };

  return (
    <div className="flex flex-col p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Main Anime</h2>
        <Card
          animeInfo={mainAnime.info}
          moreInfo={mainAnime.moreInfo}
          isMainCard={true}
          onCardClick={handleCardClick}
        />
      </section>

      <ScrollableRow
        title="Most Popular Animes"
        animeList={mostPopularAnimes}
        onCardClick={handleCardClick}
      />
      <ScrollableRow
        title="Recommended Animes"
        animeList={recommendedAnimes}
        onCardClick={handleCardClick}
      />
      <ScrollableRow
        title="Related Animes"
        animeList={relatedAnimes}
        onCardClick={handleCardClick}
      />

      {selectedAnimeId && (
        <AnimeDetails animeId={selectedAnimeId} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default CardSection;
