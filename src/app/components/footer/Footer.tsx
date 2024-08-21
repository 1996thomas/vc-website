import { createClient } from "@/prismicio";
import "./footer.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";
import { useEffect } from "react";
import MarqueeLayout from "./MarqueeLayout";
// import '../../../slices/Marquee/marquee.scss'

export async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    footer && (
      <footer>
        <div className="footer__wrapper">
          <MarqueeLayout marquee={footer.data.slices[0]}/>
          <div className="contact__wrapper">
            <h3>CONTACT</h3>
            <ul>
              <li>
                {" "}
                <a href={`mailto:${footer.data.contactemail}`}>
                  {footer.data.contactemail}
                </a>
              </li>
              <li>
                {" "}
                <Button
                  text={"Contactez nous"}
                  destination="mailto: thomas.kanthack@gmail.com"
                />
              </li>
              <li>
                <ul className="socials">
                  <li>
                    <Link href={footer.data.instagramlink.link_type}>
                      <Image
                        width={27}
                        height={27}
                        src={"/icons/instagram-icon.png"}
                        alt={"official logo of Instagram"}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={footer.data.linkedinlink.link_type}>
                      <Image
                        width={27}
                        height={27}
                        src={"/icons/linkedin-icon.png"}
                        alt={"official logo of LinkedIn"}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={footer.data.gustlink.link_type}>
                      <Image
                        width={50}
                        height={50}
                        src={"/icons/gust-icon.png"}
                        alt={"official logo of gust"}
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="info__wrapper">
            <h3>INFO</h3>
            <ul className="adress">
              <li>
                {footer.data.adress}
                <br /> Paris, France
              </li>
              <li>
                visualcreators 2024 <br />
                www.visualcreators.com
              </li>
            </ul>
          </div>
          <div className="logo__wrapper">
            <Image
              src={"/logos/logo-vc.svg"}
              height={250}
              width={250}
              alt={"official logo of visual creators"}
            />
          </div>
        </div>
      </footer>
    )
  );
}
