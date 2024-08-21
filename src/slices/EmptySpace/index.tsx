import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./empty-space.scss";
import '../../app/sass/index.scss'

/**
 * Props for `EmptySpace`.
 */
export type EmptySpaceProps = SliceComponentProps<Content.EmptySpaceSlice>;

/**
 * Component for "EmptySpace" Slices.
 */
const EmptySpace = ({ slice }: EmptySpaceProps): JSX.Element => {
  return slice.primary.visible ? (
    <section
      className={`${slice.slice_type} ${slice.primary.color}-bg ${slice.primary.size}`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    />
  ) : (
    <></>
  );
};

export default EmptySpace;
