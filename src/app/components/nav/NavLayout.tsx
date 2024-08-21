"use client";
import React, { useState, useEffect, useRef } from "react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Button from "../button/Button";
import { useWindowSize } from "@uidotdev/usehooks";
import { gsap } from "gsap";
import Image from "next/image";
import { Content } from "@prismicio/client";

interface NavLayoutProps {
  nav: Content.NavDocument;
}

export default function NavLayout({ nav }: NavLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power2.in" });
    }
  };

  return (
    <header>
      {width && width >= 950 ? (
        isScrolled ? (
          <nav className="nav nav--scrolled" ref={navRef}>
            <div className="nav__wrapper">
              <div className="image__wrapper">
                <Link href={"/"}>
                  <PrismicNextImage field={nav.data.logo_minify} alt="" />
                  {/* <Image src={'/assets/typo_logo_white.svg'} sizes="" /> */}
                </Link>
              </div>
              <ul>
                {nav.data.navigationlist.map((item) => (
                  <li key={item.link}>{item.link}</li>
                ))}
              </ul>
              <div className="button__wrapper">
                <Button
                  text={nav.data.button_content}
                  destination={`mailto: ${nav.data.button_link}`}
                />
              </div>
            </div>
          </nav>
        ) : (
          <nav className="nav nav--default">
            <div className="nav__wrapper">
              <div className="image__wrapper">
                <Link href={"/"}>
                  <PrismicNextImage field={nav.data.logo} alt="" />
                </Link>
              </div>
              <ul>
                {nav.data.navigationlist.map((item) => (
                  <li key={item.link}>{item.link}</li>
                ))}
              </ul>
              <div className="button__wrapper">
                <Button
                  text={nav.data.button_content}
                  destination={`mailto: ${nav.data.button_link}`}
                />
              </div>
            </div>
          </nav>
        )
      ) : (
        <nav className="nav nav--default">
          <div className="nav__wrapper">
            <div className="menu">
              <Link href={"/"}>
                <PrismicNextImage field={nav.data.logo} alt="" />
              </Link>
              <button className="menu--btn" onClick={toggleMenu} />
            </div>
            <div ref={menuRef} className="slide">
              <ul>
                {nav.data.navigationlist.map((item) => (
                  <li key={item.link}>{item.link}</li>
                ))}
              </ul>
              <Button
                text={nav.data.button_content}
                destination={`mailto: ${nav.data.button_link}`}
              />
              <div className="logo">
                <Image
                  src={"/logos/logoblack.svg"}
                  width={270}
                  height={160}
                  alt="Logo Visual Creators"
                />
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
