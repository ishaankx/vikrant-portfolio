"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DataTicker from "@/components/DataTicker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Results from "@/components/Results";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main>
            <Hero />
            <DataTicker />
            <About />
            <Skills />
            <Experience />
            <Results />
            <Education />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
