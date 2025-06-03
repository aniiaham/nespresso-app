"use client";

import Image from "next/image";
import Link from "next/link";
import VertuoImg from "./images/vertuo-pod.png";
import OriginalImg from "./images/original-pod.png";

export default function Home() {
  return (
    <section className="h-full bg-background w-full flex flex-col justify-center items-center">
      <div className="relative min-h-screen my-28 p-4 text-center font-sans overflow-hidden">
        <header className="py-5 relative z-10">
          <h1 className="text-4xl font-bold tracking-wide">
            Nespresso Caffeine Chart
          </h1>
        </header>
        <div className="flex justify-center gap-8 my-10 relative z-10">
          <Link
            href={{
              pathname: "/vertuo-line",
            }}
            className="md:p-4 hover:scale-105 transition cursor-pointer"
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
            className="md:p-4 hover:scale-105 transition cursor-pointer"
          >
            <Image
              src={OriginalImg}
              alt="Original Pods"
              className="w-60 h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-medium mb-2">Original Line</h2>
          </Link>
        </div>
        <section className="md:p-8 max-w-2xl mx-auto text-left relative z-10">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-coffee-brown mb-4 text-lg leading-relaxed">
            Nespresso caffeine chart helps you explore the wide variety of
            Nespresso coffee pods, comparing caffeine content, flavor profiles,
            and roast intensities.
          </p>
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
