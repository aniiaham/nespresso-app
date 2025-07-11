"use client";

import Image from "next/image";
import Link from "next/link";
import VertuoImg from "./images/vertuo-pod.png";
import OriginalImg from "./images/original-pod.png";

export default function Home() {
  return (
    <section className="h-full bg-background w-full flex flex-col justify-center items-center">
      <div className="relative min-h-screen my-28 p-4 text-center font-sans overflow-hidden">
        <header className="py-5 relative z-10 max-w-xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-wide">
            Nespresso Caffeine Chart
          </h1>
          <h2>
            Find detailed information for every Nespresso coffee pod and choose
            your preferred line below:
          </h2>
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
            <h3 className="text-xl font-medium mb-2 text-black">
              Browse Vertuo Pods
            </h3>
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
            <h3 className="text-xl font-medium mb-2">Browse Original Pods</h3>
          </Link>
        </div>
        <section className="max-w-2xl mx-auto px-4 py-10 text-center border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">About This Chart</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            This Nespresso caffeine chart makes it easy to find and compare pods
            by caffeine level, roast intensity, and flavor profile. Use it to
            explore different Nespresso coffee lines and pick the perfect pod
            for your taste and energy needs.
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
