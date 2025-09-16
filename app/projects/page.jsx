import ProjectComponent from "@/components/projects/ProjectComponent";

export const metadata = {
  title: "Projects",
  description:
    "Inilah beberapa proyek yang telah saya bangun. Silakan jelajahi untuk melihat bagaimana saya mengubah ide menjadi kenyataan melalui perpaduan antara desain dan teknologi.",
};

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

        {/* komponen project */}
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ProjectsPage;
