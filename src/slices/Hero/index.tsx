import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import "./hero.scss";
import Image from "next/image";
import styles from "../../app/components/devices/iphone/Iphone.module.scss";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.slice_type}
    >
      <div className="heading-container">
        <h2>{slice.primary.title}</h2>
        <h3>{slice.primary.subtitle}</h3>
      </div>
      <div className="media__wrapper">
        <div className={`${styles.container} landing-iphone`}>
          <div className={styles.outerFrame}>
            <div className={styles.volumeButtons}>
              <div className={styles.volumeUp}></div>
              <div className={styles.volumeDown}></div>
            </div>
            <div className={styles.holdButton}></div>
            <div className={styles.innerFrame}>
              <div className='video__wrapper'>
                <video autoPlay muted loop src="/video-1.mp4"></video>
              </div>
              <div className={styles.notch}></div>
            </div>
            <span className="vc-ui" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
