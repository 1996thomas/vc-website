import React from "react";
import styles from "./Laptop.module.scss";
import { KeyTextField } from "@prismicio/client";
import Image from "next/image";

interface DeviceProps {
  tagline: KeyTextField;
  description: KeyTextField;
  screenWidth: number;
}

const Laptop: React.FC<DeviceProps> = ({
  tagline,
  description,
  screenWidth,
}) => {
  return screenWidth && screenWidth >= 850 ? (
    <div className={styles.container}>
      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
          <div className={styles.innerNotch} />
          <div className={styles.content}>
            <h3>{tagline}</h3>
            <p>{description}</p>
          </div>
          <Image src={'/assets/vc-planet.svg'} className={styles.svg1} width={30} height={30} alt='Logo of Visual Creators planet'/>
          <Image src={'/assets/vc-planet.svg'} className={styles.svg2} width={30} height={30} alt='Logo of Visual Creators planet'/>

        </div>
      </div>

      <div className={styles.base}>
        <div className={styles.baseNotch}></div>
      </div>
    </div>
  ) : (
    <div className={styles.laptop__responsive}>
      <div className={styles.container}>
        <div className={styles.outerFrame}>
          <div className={styles.innerFrame}>
            <div className={styles.innerNotch} />

            <Image
              src={"/assets/vc-planet.svg"}
              className={styles.svg1}
              width={30}
              height={30}
              alt="Logo of Visual Creators planet"
            />
            <Image
              src={"/assets/vc-planet.svg"}
              className={styles.svg2}
              width={30}
              height={30}
              alt="Logo of Visual Creators planet"
            />
          </div>
        </div>

        <div className={styles.base}>
          <div className={styles.baseNotch}></div>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{tagline}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Laptop;
