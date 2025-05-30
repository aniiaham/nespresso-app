"use client";

import Image from "next/image";
import Link from "next/link";
import VertuoImg from "./images/vertuo-pod.png";
import OriginalImg from "./images/original-pod.png";

export default function Home() {
  return (
    <section className="h-full bg-background w-full flex flex-col justify-center items-center">
      <div className="relative min-h-screen my-28 p-4 text-center font-sans overflow-hidden">
        {/* Hero Section */}
        <header className="py-5 relative z-10">
          <h1 className="text-4xl font-bold  tracking-wide">
            Nespresso Caffeine Chart
          </h1>
        </header>

        {/* Browse Section */}
        <div className="flex justify-center gap-8 my-10 relative z-10">
          <Link
            href={{
              pathname: "/vertuo-line",
            }}
            className="p-4 hover:scale-105 transition cursor-pointer"
          >
            <Image
              src={VertuoImg}
              alt="Vertuo Pod"
              className="w-60 h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-medium mb-2 text-black">Vertuo Line</h2>
          </Link>

          <Link
            href={{
              pathname: "/original-line",
            }}
            className="p-4 hover:scale-105 transition cursor-pointer"
          >
            <Image
              src={OriginalImg}
              alt="Original Pods"
              className="w-60 h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-medium mb-2 text-coffee-dark">
              Original Line
            </h2>
          </Link>
        </div>

        {/* About Section */}
        <section className="p-8 max-w-2xl mx-auto text-left relative z-10">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">About</h2>
          <p className="text-coffee-brown mb-4 text-lg leading-relaxed">
            Nespresso caffeine chart helps you explore the wide variety of
            Nespresso coffee pods, comparing caffeine content, flavor profiles,
            and roast intensities.
          </p>
          {/* <p className="text-coffee-brown text-lg leading-relaxed">
            Discover your next favorite coffee, learn about the different
            blends, and make informed decisions based on your taste preferences
            and caffeine needs.
          </p> */}
        </section>
        <footer className="text-black py-4 mt-8 relative z-10">
          <p className="text-center">
            Created by Aniia -{" "}
            <a
              href="https://github.com/aniiaham"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:cursor-pointer"
            >
              GitHub Profile
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
