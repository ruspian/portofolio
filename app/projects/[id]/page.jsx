import { getProjectById } from "@/utils/data";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("id");
dayjs.extend(relativeTime);

const ProjectByIdPage = async ({ params }) => {
  // ambil id dari param
  const { id: projectId } = await params;
  const id = projectId;

  //   cari project berdasarkan id
  const data = await getProjectById(id);

  return (
    <div className="mx-auto px-6 md:px-20 py-10">
      <p className="text-sm text-gray-500">{dayjs(data.createdAt).fromNow()}</p>

      <div className="flex items-start justify-between gap-6">
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-bold mt-6">{data.title}</h1>
        </div>

        <div className="hidden md:block shadow-lg">
          <Image
            src={data.image}
            width={500}
            height={300}
            alt="foto project by id"
          />
        </div>
      </div>

      <div className="border-[1px] border-slate-300 w-full mx-auto my-4"></div>

      <div
        className="prose dark:prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: data.content.html,
        }}
      ></div>
    </div>
  );
};

export default ProjectByIdPage;
