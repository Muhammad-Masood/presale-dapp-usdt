"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const Hero1 = dynamic(() => import("../components/landing-page/hero-1"));
const Hero2 = dynamic(() => import("../components/landing-page/hero-2"));
const Hero3 = dynamic(() => import("../components/landing-page/hero-3"));
const Hero4 = dynamic(() => import("../components/landing-page/hero-4"));
const Hero5 = dynamic(() => import("../components/landing-page/hero-5"));
const Hero6 = dynamic(() => import("../components/landing-page/hero-6"));
const Hero7 = dynamic(() => import("../components/landing-page/hero-7"));
const Hero8 = dynamic(() => import("../components/landing-page/hero-8"));
const Hero9 = dynamic(() => import("../components/landing-page/hero-9"));
const Hero10 = dynamic(() => import("../components/landing-page/hero-10"));
const Hero11 = dynamic(() => import("../components/landing-page/hero-11"));
const Features1 = dynamic(
  () => import("../components/landing-page/features-1")
);
const RoadMap = dynamic(() => import("../components/landing-page/roadmap"));
const TokenGraph = dynamic(
  () => import("../components/landing-page/token-graph")
);
const FaqSection = dynamic(() => import("../components/landing-page/faq"));

export default function Page() {
  return (
    <div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
      <Hero10 />
      <Features1 />
      <Hero11 />
      <RoadMap />
      <TokenGraph />
      <FaqSection />
    </div>
  );
}
