"use client";

import React from "react";
import { Card, Carousel } from "./ui/cards-carousel";
import Image from "next/image";

export function OurProductCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Products.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
    {
    category: "",
    title: "",
    src: "/images/new-arrival.png",
    content: <DummyContent />,
  },
  {
    category: "Disponsals Zone",
    title: "You can do more with AI.",
    src: "/images/disposals.png",
    content: <DummyContent />,
  },
  {
    category: "E-Juice Zone",
    title: "Enhance your productivity.",
    src: "/images/e-juice.png",
    content: <DummyContent />,
  },
  {
    category: "Devices Zone",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/devices.png",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "",
    src: "/images/accessories.png",
    content: <DummyContent />,
  },
 
];
