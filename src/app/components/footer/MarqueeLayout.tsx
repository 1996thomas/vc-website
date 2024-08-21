"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

//@ts-ignore
export default function MarqueeLayout({ marquee }) {
  const marqueeRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (!marqueeRef.current) return;

    const text = marquee.primary.marquees[0].text[0].text;
    const repeatedText = `${text} - `.repeat(10);
    const textElements = marqueeRef.current.querySelectorAll(
      ".footer-marquee--text span"
    );

    // Mise à jour du texte dans chaque span
    textElements.forEach((span) => {
      span.textContent = repeatedText;
    });

    gsap.to(".footer-marquee--text", {
      x: `-100vw`,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, [marquee.primary.marquees[0].text[0].text]);

  return (
    <div
      className="footer--marquee__wrapper"
      style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex" }}
    >
      <div
        className="footer-marquee--item"
        ref={marqueeRef}
        style={{ display: "flex" }}
      >
        <div className="footer-marquee--text" style={{ flexShrink: 0 }}>
          <span></span>
        </div>
        <div className="footer-marquee--text" style={{ flexShrink: 0 }}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
