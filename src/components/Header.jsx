import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { gsap } from "gsap";

const Header = () => {
  const [poster, setPoster] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const bottomTextRef = useRef(null);
  const playButtonRef = useRef(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://anime-backend-lyart.vercel.app/anime/home"
      );
      const num = Math.floor(Math.random() * 10);
      setPoster(res.data.spotlightAnimes[num].poster);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.to(headerRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        [
          subtitleRef.current,
          titleRef.current,
          buttonRef.current,
          bottomTextRef.current,
        ],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(
        playButtonRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div
      ref={headerRef}
      className="w-full h-screen flex flex-col justify-center items-start px-10 bg-no-repeat bg-cover bg-center relative overflow-hidden opacity-0"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0, 0.6), rgba(0,0,0, 0.4)),linear-gradient(to right, rgba(0,0,0), rgba(0,0,0, 0.1), rgba(0,0,0, 0.1)), url(${poster})`,
      }}
    >
      <h6 ref={subtitleRef} className="text-3xl text-orange-200 mb-4">
        Streaming now.......
      </h6>
      <h1 ref={titleRef} className="text-5xl font-bold text-sand-100 mb-6">
        Discover Endless <br /> Entertainment
      </h1>
      <button
        ref={buttonRef}
        className="bg-orange-500 text-sand-100 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out"
      >
        View Plans
      </button>

      <h2
        ref={bottomTextRef}
        className="font-medium flex flex-col sm:flex-row gap-3 text-4xl sm:text-5xl absolute bottom-10 left-10"
      >
        <span className="text-sand-100">all in one</span>
        <span className="italic text-orange-300">OTT platform</span>
      </h2>
    </div>
  );
};

export default Header;
