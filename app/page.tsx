"use client";

import Image from "next/image";
import Link from "next/link";
import VertuoImg from "./images/vertuo.jpg";
import OriginalImg from "./images/original.jpg";

export default function Home() {
  return (
    <section className="h-full w-full my-48 flex flex-col justify-center items-center">
      <div className="relative min-h-screen bg-gradient-to-b from-coffee-cream to-coffee-light p-4 text-center font-sans overflow-hidden">
        {/* Background Details */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-coffee-brown opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-coffee-dark opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('/coffee-beans.png')] bg-no-repeat bg-center bg-contain opacity-5 pointer-events-none"></div>

        {/* Hero Section */}
        <header className="py-10 relative z-10">
          <h1 className="text-6xl font-extrabold text-coffee-dark tracking-wide">
            Nespresso Caffeine Chart
          </h1>
          <p className="mt-4 text-2xl text-coffee-brown italic">
            Discover the Perfect Balance of Flavor & Energy
          </p>
        </header>

        {/* Browse Section */}
        <div className="flex justify-center gap-8 my-10 relative z-10">
          <Link
            href={{
              pathname: "/vertuo-line",
            }}
            className="border-2 border-coffee-dark rounded-2xl shadow-xl p-4 hover:scale-105 transition cursor-pointer bg-white"
          >
            <h2 className="text-xl font-bold mb-2 text-coffee-dark">
              Browse Vertuo Line
            </h2>
            <Image
              src={VertuoImg}
              alt="Vertuo Pods"
              className="w-52 h-36 object-contain mx-auto rounded-md"
            />
          </Link>

          <Link
            href={{
              pathname: "/original-line",
            }}
            className="border-2 border-coffee-dark rounded-2xl shadow-xl p-4 hover:scale-105 transition cursor-pointer bg-white"
          >
            <h2 className="text-xl font-bold mb-2 text-coffee-dark">
              Browse Original Line
            </h2>
            <Image
              src={OriginalImg}
              alt="Original Pods"
              className="w-52 h-36 object-contain mx-auto rounded-md"
            />
          </Link>
        </div>

        {/* About Section */}
        <section className="bg-coffee-cream p-8 rounded-3xl shadow-lg max-w-4xl mx-auto text-left relative z-10">
          <h2 className="text-3xl font-extrabold text-coffee-dark mb-4">
            About Nespresso Caffeine Chart
          </h2>
          <p className="text-coffee-brown mb-4 text-lg leading-relaxed">
            Our Nespresso Caffeine Chart helps you explore the wide variety of
            Nespresso coffee pods, comparing caffeine content, flavor profiles,
            and roast intensities. Whether you prefer a bold dark roast or a
            light, fruity blend, we&apos;ve got all the details you need to
            choose the perfect pod.
          </p>
          <p className="text-coffee-brown text-lg leading-relaxed">
            Discover your next favorite coffee, learn about the different
            blends, and make informed decisions based on your taste preferences
            and caffeine needs.
          </p>
        </section>

        {/* Footer Section */}
        <footer className="bg-coffee-dark text-black py-4 mt-8 relative z-10">
          <p className="text-center">
            Developed by Aniia -{" "}
            <a
              href="https://github.com/aniiaham"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-coffee-cream"
            >
              GitHub Profile
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
