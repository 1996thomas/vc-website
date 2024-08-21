import React from "react";
import styles from "./Dooh.module.scss";
// import vcPlanet from "../vc-planet.svg";
import { KeyTextField } from "@prismicio/client";
import Image from "next/image";

interface DeviceProps {
  tagline: KeyTextField;
  description: KeyTextField;
  screenWidth: number | null;
}

const Dooh: React.FC<DeviceProps> = ({ tagline, description, screenWidth }) => {
  return screenWidth && screenWidth >= 850 ? (
    <div className={styles.container}>
      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
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
      <div className={styles.baseTop}></div>
      <div className={styles.baseBottom}></div>
    </div>
  ) : (
    <div className={styles.dooh__responsive}>
      <div className={styles.container}>
        <div className={styles.outerFrame}>
          <div className={styles.innerFrame}>
            <div className={styles.content}></div>
            <Image
              src={"/assets/vc-planet.svg"}
              className={styles.svg}
              width={30}
              height={30}
              alt="Logo of Visual Creators planet"
            />
            {/* <img className={styles.svg} src={vcPlanet} alt="Vc planet" /> */}
          </div>
        </div>
        <div className={styles.baseTop}></div>
        <div className={styles.baseBottom}></div>
      </div>
      <div className={styles.content}>
        <h3>{tagline}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Dooh;
