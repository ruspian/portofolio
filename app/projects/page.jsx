"use client";

import ProjectCardComponent from "@/components/card/ProjectCardComponent";
import SkeletonProjectComponent from "@/components/skeleton/SkeletonProjectComponent";
import { getProjects } from "@/utils/data";
import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        setData(projects);
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
    <div className="mx-auto px-10 py-10 ">
      <h1 className="text-4xl font-bold text-amber-500 text-center">
        Project Saya
      </h1>
      <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

      <div className="flex flex-col gap-4 text-center justify-center mt-8">
        <h3 className="px-4">
          Inilah beberapa proyek yang telah saya bangun. Silakan jelajahi untuk
          melihat bagaimana saya mengubah ide menjadi kenyataan melalui
          perpaduan antara desain dan teknologi.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto">
          {data.length > 0 ? (
            data.map((project) => (
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
      </div>
    </div>
  );
};

export default ProjectsPage;
