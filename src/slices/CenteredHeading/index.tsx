import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./centered-heading.scss";
/**
 * Props for `CenteredHeading`.
 */
export type CenteredHeadingProps =
  SliceComponentProps<Content.CenteredHeadingSlice>;

/**
 * Component for "CenteredHeading" Slices.
 */
const CenteredHeading = ({ slice }: CenteredHeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.slice_type}
    >
      <div>
        {slice.primary.content.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </div>
    </section>
  );
};

export default CenteredHeading;
