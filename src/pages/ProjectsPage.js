import React from "react";
import {
  ProjectComponent,
  HeaderComponent,
} from "../components/ProjectSection";
import { ProjectsContent } from "../constants/display";

function ProjectsPage() {
  return (
    <>
      <HeaderComponent />
      {ProjectsContent.map((project) => (
        <ProjectComponent
          lightBg={false}
          lightDesc={true}
          headline={project.name}
          description={project.desc}
          imgStart={project.videoLeft}
          videoUrl={project.videoUrl}
        />
      ))}
    </>
  );
}

export default ProjectsPage;
