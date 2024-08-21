import { KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";
import "./button.scss";
import Image from "next/image";

interface ButtonProps {
  text: KeyTextField | string; // Utiliser un type union
  action?: () => void;
  destination: string;
}

export default function Button({ text, action, destination }: ButtonProps) {
  return (
    <div className="button">
      <Link href={destination}>
        <>{text}</>
      </Link>
      <div className="arrow--icon">
        <Image
          src={"/icons/arrow.svg"}
          width={12}
          height={12}
          alt="Arrow icon"
        />
      </div>
    </div>
  );
}
