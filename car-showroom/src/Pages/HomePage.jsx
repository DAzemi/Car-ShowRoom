import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../img/Img1.avif";
import img2 from "../img/Img2.avif";
import img3 from "../img/Img3.avif";
import img4 from "../img/Img4.avif";
import img5 from "../img/Img5.avif";
import img6 from "../img/Img6.avif";
import img7 from "../img/Img7.avif";
import img8 from "../img/Img8.avif";
import img9 from "../img/Img9.avif";
import vid1 from "../videos/Video1.mp4";
import vid2 from "../videos/Video2.mp4";
import vid3 from "../videos/Video3.mp4";
import vid4 from "../videos/Video4.mp4";
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
  } from "react-icons/fi";

const HomePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVideo2Index, setCurrentVideo2Index] = useState(0);
  const videos = [vid1, vid2];
  const videos2 = [vid3, vid4];
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    video.addEventListener("ended", handleVideoEnded);

    return () => {
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [videos]);

  useEffect(() => {
    const video = videoRef.current;
    video.src = videos[currentVideoIndex];
    video.play().catch((error) => {
      console.log("Video playback error:", error);
    });

    return () => {
      video.pause();
    };
  }, [currentVideoIndex, videos]);

  useEffect(() => {
    const video2 = videoRef2.current;

    const handleVideo2Ended = () => {
      setCurrentVideo2Index((prevIndex) => (prevIndex + 1) % videos2.length);
    };

    video2.addEventListener("ended", handleVideo2Ended);

    return () => {
      video2.removeEventListener("ended", handleVideo2Ended);
    };
  }, [videos2]);

  useEffect(() => {
    const video2 = videoRef2.current;
    video2.src = videos2[currentVideo2Index];
    video2.play().catch((error) => {
      console.log("Video playback error:", error);
    });

    return () => {
      video2.pause();
    };
  }, [currentVideo2Index, videos2]);

  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "https://www.youtube.com/c/",
    },
  ];
  return (
    <div>
      <header className="bg-gray-800 text-white py-4 text-center">
        <nav className="flex">
        <p className="text-white ml-[6%]">Car-Showroom</p>
          <ul className="flex justify-center space-x-4 ml-[74%]">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/car" className="text-white hover:text-gray-400">
                Cars
              </a>
            </li>
            <li>
            </li>
            <li>
              <a href="/about-us" className="text-white hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <section className="featured mb-8">
          <Slide slidesToScroll={3} slidesToShow={3} autoplay={5000}>
            <div>
              <img src={img1} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA CX-80</p>
            </div>
            <div>
              <img src={img2} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA CX-60</p>
            </div>
            <div>
              <img src={img3} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA2 HYBRID</p>
            </div>
            <div>
              <img src={img4} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA3 SALOON</p>
            </div>
            <div>
              <img src={img5} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA MX-30</p>
            </div>
            <div>
              <img src={img6} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA CX-5</p>
            </div>
            <div>
              <img src={img7} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA MX-5 ROADSTER</p>
            </div>
            <div>
              <img src={img8} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA 2</p>
            </div>
            <div>
              <img src={img9} style={{ width: "100%", height: "100%" }} />
              <p className="font-anton">MAZDA3 HATCHBACK</p>
            </div>
          </Slide>
        </section>

        <section className="h-96 mb-8 flex font-oswald">
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="col-span-1 flex items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full max-w-full"
              >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 font-oswald">
              <h2 className="py-12 pl-12 mt-12">
                OUR ELECTRIC AND HYBRID RANGE
              </h2>
              <hr className="border-t-4 border-gray-800 ml-6 mb-12 w-[50%]"></hr>
              <h3 className="ml-12">
                Our Electric and Hybrid range represents everything that Mazda
                has built into its DNA over the past 100 years: beautiful
                design, Japanese craftmanship and innovative technologies,
                focused on creating great driving experiences. Mazda offers a
                perfectly sized model for every need, from all-electric, plug-in
                hybrids, self-charging hybrid to mild hybrid technology.
              </h3>{" "}
            </div>
          </div>
        </section>
        <section className="h-96 mb-16 flex font-oswald">
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="col-span-1 font-oswald">
              <h2 className="py-12 pl-[65%] mt-12">
                OUR ELECTRIC AND HYBRID RANGE
              </h2>
              <hr className="border-t-4 border-gray-800 ml-[46%] mb-12 w-[50%]"></hr>
              <h3 className="mr-8 pl-16">
                Our Electric and Hybrid range represents everything that Mazda
                has built into its DNA over the past 100 years: beautiful
                design, Japanese craftmanship and innovative technologies,
                focused on creating great driving experiences. Mazda offers a
                perfectly sized model for every need, from all-electric, plug-in
                hybrids, self-charging hybrid to mild hybrid technology.
              </h3>{" "}
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <video
                ref={videoRef2}
                autoPlay
                muted
                className="w-full max-w-full"
              >
                <source src={videos2[currentVideo2Index]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-[100%]">
      <div className="container w-full">
      <div className="pt-10 sm:pt-30 pb-1 mt-20 border-t-2 border-primary-light dark:border-secondary-dark w-full">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
      </footer>
    </div>
  );
};

export default HomePage;
