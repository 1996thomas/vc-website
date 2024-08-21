import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import './section-list.scss';

/**
 * Props for `SectionList`.
 */
export type SectionListProps = SliceComponentProps<Content.SectionListSlice>;

/**
 * Component for "SectionList" Slices.
 */
const SectionList = ({ slice }: SectionListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.slice_type}
    >
      <ul>
        <>
          {slice.primary.list.map((item) => (
            <li key={item.text}>
              <p className="value">{item.value}</p>
              <p className="text">{item.text}</p>
            </li>
          ))}
        </>
      </ul>
    </section>
  );
};

export default SectionList;
