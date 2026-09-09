"use client";

import Link from "next/link";
import { ChevronDown, Pause, Play, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const videos = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4"];

/* ── Cycling word animation ─────────────────────────────────────────── */
function CyclingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showDuration = 2000;  // how long each word stays
    const fadeDuration = 400;   // matches the CSS transition

    const timer = setTimeout(() => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        // swap word then fade in
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, fadeDuration);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [index, words]);

  return (
    <span
      className="inline-block transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {words[index]}
    </span>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function handleEnded() {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }

  function togglePause() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    if (!isPaused) video.play().catch(() => {});
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="w-full min-h-[80vh] flex rounded-b-[7rem] overflow-hidden">

      {/* ── LEFT PANEL ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-between bg-[#070C10] text-white w-full lg:w-[28%] shrink-0 px-8 md:px-18 pt-[calc(68px+3.5rem)] pb-14">

        {/* Tag */}
        <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-8">
        Software & Digital Studio
        </p>

        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Your business has the vision. We build the technology that brings it to life.
          </h1>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm">
            We design and build high-performance digital products — websites, platforms, and campaigns that drive real growth for ambitious brands.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
          >
            Let&apos;s Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
          >
            See Our Work
          </Link>
        </div>
      </div>

      {/* ── RIGHT PANEL — video + overlay text ─────────────────────── */}
      <div className="relative hidden lg:flex flex-1 overflow-hidden">

        {/* Video */}
        <video
          ref={videoRef}
          key={videos[currentIndex]}
          src={videos[currentIndex]}
          onEnded={handleEnded}
          muted
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Centered overlay text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-8">
          <h2 className="font-bold tracking-tight drop-shadow-lg" style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}>
            <CyclingWord words={["Solutions.", "Systems.", "Scale."]} />
          </h2>
        </div>

        {/* Play / Pause */}
        <button
          onClick={togglePause}
          aria-label={isPaused ? "Play video" : "Pause video"}
          className="absolute bottom-10 right-6 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-colors duration-200"
        >
          {isPaused ? (
            <Play className="w-4 h-4 fill-white" />
          ) : (
            <Pause className="w-4 h-4 fill-white" />
          )}
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-[3.25rem] right-20 z-10 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Play video ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
