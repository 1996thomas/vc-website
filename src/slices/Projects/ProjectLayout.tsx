"use client";
import React, { useState, useEffect } from "react";
import Button from "@/app/components/button/Button";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useParams } from "next/navigation";
import "./projects.scss";
import { Content } from "@prismicio/client";

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

interface ProjectsPropsArr {
  status: string;
  value: string;
  reason: any | null;
  _response: any;
  _debugInfo: any | null;
}

export default function ProjectLayout({
  project,
  projects,
}: {
  project: any;
  projects: ProjectsPropsArr;
}) {
  const splitWords = project.primary.skills[0]?.text.split("-");
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();
  const actualPage = useParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  let allProjectsArr;
  try {
    allProjectsArr = JSON.parse(projects.value);
  } catch (error) {
    console.error("Failed to parse projects value:", error);
  }

  const currentProjectIndex = allProjectsArr.findIndex(
    (proj: { uid: string | string[] }) => proj.uid === actualPage.uid
  );

  if (currentProjectIndex === -1) {
    console.error("Current project not found in allProjectsArr");
  }

  const nextProjectIndex = (currentProjectIndex + 1) % allProjectsArr.length;
  const nextProjectUid = allProjectsArr[nextProjectIndex].uid;

  return width && width > 950 ? (
    <section
      className={project.slice_type}
      data-project-type={project.slice_type}
      data-project-variation={project.variation}
    >
      <div className="projects__wrapper">
        <div className="content">
          <a href="/" className="back_to_projects">
            RETOUR AU PROJETS
          </a>
          <h2>{project.primary.name}</h2>
          <h1>{project.primary.tagline}</h1>
          <ul>
            {splitWords.map((word: string, key: number) => (
              <li key={key}>{word}</li>
            ))}
          </ul>
          <PrismicRichText field={project.primary.description} />
          <Button
            text="Projet suivant"
            destination={`/projects/${nextProjectUid}`}
          />
        </div>
        <div className="image__wrapper">
          <PrismicNextImage field={project.primary.image} alt="" />
        </div>
        <div className="info">
          <ul>
            {project.primary.info.map((item: { value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, key: number) => (
              <li key={key}>
                <p>{item.value}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={project.slice_type}
      data-project-type={project.slice_type}
      data-project-variation={project.variation}
    >
      <div className="projects__wrapper--responsive">
        <div className="content">
          <h2>{project.primary.name}</h2>
          <h1>{project.primary.tagline}</h1>
          <ul>
            {splitWords.map((word: string, key: number) => (
              <li key={key}>{word}</li>
            ))}
          </ul>
          <PrismicRichText field={project.primary.description} />
          <div className="image__wrapper">
            <PrismicNextImage field={project.primary.image} alt="" />
          </div>
        </div>
        <div className="info">
          <ul>
            {project.primary.info.map((item: { value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, key: number) => (
              <li key={key}>
                <p>{item.value}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Button
          text="Projet suivant"
          destination={`/projects/${nextProjectUid}`} // Utilisation de l'UID calculé
        />
        <a className="back_to_projects">RETOUR AU PROJETS</a>
      </div>
    </section>
  );
}
