"use client";

import React, { useEffect, useState } from "react";
import ProjectCardComponent from "@/components/card/ProjectCardComponent";
import Link from "next/link";
import { getProjects } from "@/utils/data";

const ProjectSectionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setData(projects);
      } catch (error) {
        alert(error);
      }
    };

    fetchProjects();
  }, []);

  console.log("data", data);

  return (
    <div className="mx-auto px-10 py-10 ">
      <h1 className="text-4xl font-bold text-amber-500 text-center">
        Beberapa Hal Yang Saya Bangun
      </h1>
      <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

      <div className="flex flex-col gap-4 text-center justify-center mt-8">
        <h3 className="px-4">
          Inilah beberapa proyek yang telah saya bangun. Silakan jelajahi untuk
          melihat bagaimana saya mengubah ide menjadi kenyataan melalui
          perpaduan antara desain dan teknologi.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mx-auto">
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
            <div className="item-center justify-center flex">
              <h2 className="font-semibold text-xl">Belum ada project</h2>
            </div>
          )}
        </div>

        <h3 className="px-4 mt-4">
          Jelajahi semua proyek menarik saya lainnya di
          <Link href="/projects" className="text-amber-500">
            {" "}
            halaman ini
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default ProjectSectionComponent;
