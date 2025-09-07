import React from "react";
import ProjectCardComponent from "@/components/card/ProjectCardComponent";
import { Button } from "antd";
import Link from "next/link";

const ProjectSectionComponent = () => {
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
          <ProjectCardComponent />
          <ProjectCardComponent />
          <ProjectCardComponent />
        </div>

        <h3 className="px-4 mt-4">
          Jelajahi semua proyek saya lainnya di
          <Link href="/projects" className="text-amber-500">
            {" "}
            halaman ini
          </Link>
        </h3>

        {/* <Button
          color="gold"
          variant="outlined"
          className="mt-4 flex items-center justify-center mx-auto"
          size="large"
        >
          <Link href="/projects">Lihat Semua</Link>
        </Button> */}
      </div>
    </div>
  );
};

export default ProjectSectionComponent;
