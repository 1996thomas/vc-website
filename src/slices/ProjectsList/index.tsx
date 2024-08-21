"use client";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./project-list.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { createClient } from "@/prismicio";

/**
 * Props for `ProjectsList`.
 */
export type ProjectsListProps = SliceComponentProps<Content.ProjectsListSlice>;

/**
 * Component for "ProjectsList" Slices.
 */
const ProjectsList = ({ slice }: ProjectsListProps): JSX.Element => {
  const component = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const revealRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const size = useWindowSize();
  const [hovering, setHovering] = useState(false);
  const [projects, setProjects] = useState([]);

  const contentVideo = slice.primary.projectslist.map((item) => {
    const video = item.video;
    return video;
  });

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setCurrentItem(null);
    setHovering(false);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const client = createClient();
        const projectsData = await client.getAllByType("projects");
        //@ts-ignore
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 161),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 372),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);
  //@ts-ignore
  return size.width >= 850 ? (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.slice_type}
      ref={component}
    >
      <ul onMouseLeave={onMouseLeave}>
        {slice.primary.projectslist.map((item, index) =>
          item.client ? (
            <Link
              href={`/projects/${item.client.toLowerCase().split(" ").join("-")}`}
              key={item.client}
              onMouseEnter={() => onMouseEnter(index)}
            >
              <div className="spec">
                <p className="client">{item.client}</p>
                <PrismicRichText field={item.technics} />
              </div>
              <p>see more</p>
            </Link>
          ) : null
        )}
      </ul>
      <div className="hovered--img" ref={revealRef}>
        {currentItem !== null && currentItem < contentVideo.length && (
          <>
            <video
              //@ts-ignore
              src={contentVideo[currentItem].url}
              autoPlay
              muted
              loop
            />
            <span className="dynamic-island" />
          </>
        )}
      </div>
    </section>
  ) : (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.slice_type} responsive`}
    >
      <ul>
        {slice.primary.projectslist.map((item, index) =>
          item.client ? (
            <Link
              key={item.client}
              href={`/projects/${item.client.toLowerCase().split(" ").join("-")}`}
            >
              <div className="video__wrapper">
                <video
                  className="responsive--video"
                  //@ts-ignore
                  src={item.video.url}
                  autoPlay
                  muted
                ></video>
              </div>
              <div className="spec">
                <p className="client">{item.client}</p>
                <PrismicRichText field={item.technics} />
              </div>
              <p>see more</p>
            </Link>
          ) : null
        )}
      </ul>
    </section>
  );
};

export default ProjectsList;
