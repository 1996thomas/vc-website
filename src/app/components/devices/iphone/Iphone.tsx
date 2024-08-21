import React from "react";
import styles from "./Iphone.module.scss";
import { KeyTextField } from "@prismicio/client";
import Image from "next/image";

interface DeviceProps {
  tagline: KeyTextField;
  description: KeyTextField;
  screenWidth: number;
}

const Iphone: React.FC<DeviceProps> = ({
  tagline,
  description,
  screenWidth,
}) => {
  return screenWidth && screenWidth >= 850 ? (
    <div className={styles.container}>
      <div className={styles.outerFrame}>
        <div className={styles.volumeButtons}>
          <div className={styles.volumeUp}></div>
          <div className={styles.volumeDown}></div>
        </div>

        <div className={styles.holdButton}></div>

        <div className={styles.innerFrame}>
          <div className={styles.notch}></div>

          <div className={styles.content}>
            <h3>{tagline}</h3>
            <p>{description}</p>
          </div>
          <Image
            src={"/assets/vc-planet.svg"}
            className={styles.svg}
            width={30}
            height={30}
            alt="Logo of Visual Creators planet"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.iphone__responsive}>
        <div className={styles.content}>
        <h3>{tagline}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.outerFrame}>
          <div className={styles.volumeButtons}>
            <div className={styles.volumeUp}></div>
            <div className={styles.volumeDown}></div>
          </div>

          <div className={styles.holdButton}></div>

          <div className={styles.innerFrame}>
            <div className={styles.notch}></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Iphone;
