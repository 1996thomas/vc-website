import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./large-heading.scss";

/**
 * Props for `LargeHeading`.
 */
export type LargeHeadingProps = SliceComponentProps<Content.LargeHeadingSlice>;

/**
 * Component for "LargeHeading" Slices.
 */
const LargeHeading = ({ slice }: LargeHeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.slice_type}
        ${slice.primary.align_center ? "center" : ""} 
        ${slice.primary.font_size === "large" ? "fs-large" : ""} 
        ${slice.primary.inverse_color ? "inverse-color" : ""}`}
    >
      <PrismicRichText field={slice.primary.content} />
      <>{slice.primary.align_center}</>
      <>{slice.primary.inverse_color}</>
      {/* <>{slice.primary.font_size}</> */}
    </section>
  );
};

export default LargeHeading;
