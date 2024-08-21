import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./projects.scss";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/button/Button";
import { createClient } from "@/prismicio";
import ProjectLayout from "./ProjectLayout";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = client.getAllByType("projects");
  return (
    <>
      {/*@ts-ignore */}
      <ProjectLayout project={slice} projects={projects} />
    </>
  );
};

export default Projects;
