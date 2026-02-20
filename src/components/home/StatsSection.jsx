"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { StatsVideo } from "@/remotion/StatsVideo";
import SectionHeader from "@/components/shared/SectionHeader";

const Player = dynamic(() => import("@remotion/player").then(m => m.Player), { ssr: false });

const DESKTOP_WIDTH = 1000;
const DESKTOP_HEIGHT = 340;
const MOBILE_WIDTH = 400;
const MOBILE_HEIGHT = 450;
const DURATION_IN_FRAMES = 120;
const LAST_FRAME = DURATION_IN_FRAMES - 1;
const MOBILE_BREAKPOINT = 640;

export default function StatsSection() {
  const playerRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playerHeight, setPlayerHeight] = useState(DESKTOP_HEIGHT);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const mobile = width < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      const ratio = mobile
        ? MOBILE_HEIGHT / MOBILE_WIDTH
        : DESKTOP_HEIGHT / DESKTOP_WIDTH;
      setPlayerHeight(Math.round(width * ratio));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    playerRef.current?.play();
  }, [started]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    const handleFrameUpdate = ({ detail }) => {
      if (detail.frame >= LAST_FRAME) {
        player.pause();
        player.seekTo(LAST_FRAME);
      }
    };
    player.addEventListener("frameupdate", handleFrameUpdate);
    return () => player.removeEventListener("frameupdate", handleFrameUpdate);
  }, []);

  const compWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
  const compHeight = isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT;

  return (
    <section className="py-16 bg-gray-50" id="stats" ref={sectionRef}>
      <Fade triggerOnce duration={800}>
        <div className="">
          <SectionHeader title="A Crisis Hidden in Plain Sight" />
        </div>
      </Fade>
      <div className="container mx-auto px-6 max-w-5xl" ref={containerRef}>
        <Player
          ref={playerRef}
          component={StatsVideo}
          inputProps={{ column: isMobile }}
          durationInFrames={DURATION_IN_FRAMES}
          compositionWidth={compWidth}
          compositionHeight={compHeight}
          fps={30}
          autoPlay={false}
          loop={false}
          initialFrame={0}
          clickToPlay={false}
          doubleClickToFullscreen={false}
          showVolumeControls={false}
          controls={false}
          style={{
            width: "100%",
            height: playerHeight,
          }}
        />
      </div>
    </section>
  );
}