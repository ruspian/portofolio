import ProjectCardComponent from "@/components/card/ProjectCardComponent";
import React from "react";

const ProjectsPage = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mx-auto">
          <ProjectCardComponent />
          <ProjectCardComponent />
          <ProjectCardComponent />
          <ProjectCardComponent />
          <ProjectCardComponent />
          <ProjectCardComponent />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
