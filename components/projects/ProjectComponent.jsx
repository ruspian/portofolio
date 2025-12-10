"use client";

import ProjectCardComponent from "@/components/card/ProjectCardComponent";
import SkeletonProjectComponent from "@/components/skeleton/SkeletonProjectComponent";
import { getProjects } from "@/utils/data";
import React, { useEffect, useState } from "react";

const ProjectComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        setData(projects.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <SkeletonProjectComponent />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto">
      {data?.length > 0 ? (
        data?.map((project) => (
          <div key={project.id}>
            <ProjectCardComponent
              title={project.title}
              content={project.content}
              image={project.image}
              githubUrl={project.githubUrl}
              webUrl={project.webUrl}
              id={project.id}
            />
          </div>
        ))
      ) : (
        <div className="grid col-span-3 items-center justify-center">
          <h2 className="font-semibold text-xl">Project Kosong!</h2>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
