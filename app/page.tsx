"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import VertuoImg from "./images/vertuo.jpg";
import OriginalImg from "./images/original.jpg";

export default function Home() {
  return (
    <section className="h-full w-full my-48">
      <div className="flex flex-row gap-6 items-center justify-center">
        <Link
          href={{
            pathname: "/vertuo-line",
          }}
        >
          <Button className="h-full flex flex-col">
            <span>Browse Vertuo Line</span>
            <Image src={VertuoImg} alt="vertuo pods image" height={250} />
          </Button>
        </Link>
        <Link
          href={{
            pathname: "/original-line",
          }}
        >
          <Button className="h-full flex flex-col">
            <span>Browse Original Line</span>
            <Image src={OriginalImg} alt="original pods image" height={250} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
