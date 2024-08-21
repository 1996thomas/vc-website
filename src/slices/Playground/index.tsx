"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./playground.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Iphone from "@/app/components/devices/iphone/Iphone";
import Dooh from "@/app/components/devices/dooh/Dooh";
import Laptop from "@/app/components/devices/laptop/Laptop";
import { useWindowSize } from "@uidotdev/usehooks";
import Button from "@/app/components/button/Button";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Playground`.
 */
export type PlaygroundProps = SliceComponentProps<Content.PlaygroundSlice>;

/**
 * Component for "Playground" Slices.
 */
const Playground = ({ slice }: PlaygroundProps): JSX.Element => {
  const platformsWrapperRef = useRef<HTMLDivElement>(null);
  const playgroundWrapperRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (platformsWrapperRef && platformsWrapperRef.current) {
      const platformsWidth = platformsWrapperRef.current?.scrollWidth;
      const amountToScroll = platformsWidth - window.innerWidth;

      const tween = gsap.to(platformsWrapperRef.current, {
        x: -amountToScroll,
      });
      ScrollTrigger.create({
        trigger: platformsWrapperRef.current,
        start: "top 25%",
        end: "+=" + amountToScroll,
        pin: true,
        scrub: true,
        animation: tween,
      });
    }
  }, [platformsWrapperRef.current]);

  return (
    <>
      {width && width > 850 && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={slice.slice_type}
          ref={playgroundWrapperRef}
        >
          <div className="playground--header">
            <div className="title">
              {<PrismicRichText field={slice.primary.title} />}
              <Image
                src={"/assets/planet.png"}
                width={250}
                height={250}
                alt={"Representation of a planet in wireframe"}
              />
            </div>
            <Button text={"découvrez l'agence"} destination={"/"}></Button>
          </div>
          <div className="platforms__wrapper" ref={platformsWrapperRef}>
            {slice.primary.devices.map((device, index) => (
              <div
                className="platform"
                id={`${device.device_type}`}
                key={index}
              >
                {device.device_type === "smartphone" && (
                  <Iphone
                    tagline={device.tagline}
                    description={device.description}
                    screenWidth={width}
                  />
                )}
                {device.device_type === "dooh" && (
                  <Dooh
                    tagline={device.tagline}
                    description={device.description}
                    screenWidth={width}
                  />
                )}
                {device.device_type === "laptop" && (
                  <Laptop
                    tagline={device.tagline}
                    description={device.description}
                    screenWidth={width}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      {width && width < 850 && (
        <div className="platforms__wrapper--responsive">
          <div className="playground--header">
            <div className="title">
              {<PrismicRichText field={slice.primary.title} />}
              <Image
                src={"/assets/planet.png"}
                width={250}
                height={250}
                alt={"Representation of a planet in wireframe"}
              />
            </div>
            <Button text={"découvrez l'agence"} destination={"/"}></Button>
          </div>
          {slice.primary.devices.map((device, index) => (
            <div className="platform" id={`${device.device_type}`} key={index}>
              {device.device_type === "smartphone" && (
                <Iphone
                  tagline={device.tagline}
                  description={device.description}
                  screenWidth={width}
                />
              )}
              {device.device_type === "dooh" && (
                <Dooh
                  tagline={device.tagline}
                  description={device.description}
                  screenWidth={width}
                />
              )}
              {device.device_type === "laptop" && (
                <Laptop
                  tagline={device.tagline}
                  description={device.description}
                  screenWidth={width}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Playground;
