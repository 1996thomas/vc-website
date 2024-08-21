import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "../../app/sass/index.scss";
import "./sided-heading.scss";

/**
 * Props for `SidedHeading`.
 */
export type SidedHeadingProps = SliceComponentProps<Content.SidedHeadingSlice>;

/**
 * Component for "SidedHeading" Slices.
 */
const SidedHeading = ({ slice }: SidedHeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.background}-bg ${slice.slice_type}`}
    >
      {slice.primary.rows.map((item, key) => (
        <p key={key} className={`${slice.primary.textcolor}-text`}>
          {item.text}
        </p>
      ))}
    </section>
  );
};

export default SidedHeading;
