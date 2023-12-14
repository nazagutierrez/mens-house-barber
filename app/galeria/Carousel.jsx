"use client";

import React, { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  cliente1,
  cliente3,
  cliente4,
  cliente5,
  cliente6,
  cliente7,
} from "../../components/clients";
import Image from "next/image";

const Carousel = () => {
  const images = [cliente6, cliente1, cliente4, cliente5, cliente3, cliente7];
  // Target image and index
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Autoplay timer
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3700);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      // Logic for first / last image and transition time
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className="bg-neutral-900/60">
      <div className="flex flex-col items-center justify-center relative">
        <div className="h-auto w-full">
          <Image
            unoptimized
            priority
            src={images[selectedIndex]}
            // xl:h-[700px]
            className={`w-[300px] xl:w-[400px] h-[650px] object-cover opacity-0 transition-all duration-1000 ${
              loaded ? "opacity-100" : ""}`}
            alt="img"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <button
          className="absolute text-black left-3 p-3 text-3xl text-effect bg-white rounded-full"
          onClick={previous}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="absolute text-black right-3 p-3 text-3xl text-effect bg-white rounded-full"
          onClick={next}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
