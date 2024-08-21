"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./marquee.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@uidotdev/usehooks";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Marquee`.
 */
export type MarqueeProps = SliceComponentProps<Content.MarqueeSlice>;

/**
 * Component for "Marquee" Slices.
 */
const Marquee = ({ slice }: MarqueeProps): JSX.Element => {
  const component = useRef(null);

  const { width } = useWindowSize();
  useEffect(() => {
    let ctx = gsap.context(() => {
      slice.primary.marquees.slice(0, 3).forEach((_, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        if (width) {
          gsap.fromTo(
            `#marquee--text-${index}`,
            {
              x: direction * gsap.utils.random(300, 150),
            },
            {
              x: direction * gsap.utils.random(-300, -150),
              scrollTrigger: {
                trigger: `#marquee-${index}`,
                start: "top bottom",
                end: "bottom top",
                scrub: 4,
              },
            }
          );
        }
      });
    }, component);
    return () => ctx.revert();
  }, [slice, width]);

  const formatText = (text: string): string => {
    const words = text.split("/");
    const wordCount = words.length;
    let repetition = 3;
    if (wordCount < 3) {
      repetition = 20;
    } else if (wordCount >= 3 && wordCount <= 6) {
      repetition = 6;
    }
    const joinedWords = words.map((word) => word.trim()).join(" - ") + " -";
    const repeatedGroup = Array(repetition).fill(joinedWords).join(" ");
    return repeatedGroup;
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.slice_type}
      ref={component}
    >
      <span
        style={
          slice.primary.inverse_background
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#000" }
        }
      ></span>
      <span
        style={
          slice.primary.inverse_background
            ? { backgroundColor: "#000" }
            : { backgroundColor: "#fff" }
        }
      ></span>
      {slice.primary.marquees.slice(0, 3).map((item, key) => {
        //@ts-ignore
        const formattedText = formatText(item.text[0].text);
        return (
          <div
            key={key}
            className={`marquee--item ${item.inverse_color ? "inverse-color" : ""}`}
            id={`marquee-` + key}
          >
            <div id={`marquee--text-` + key}>
              <span>{formattedText}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Marquee;
