"use client";

import { getProjectById } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "next/navigation";
import SkeletonProjectByIdComponent from "@/components/skeleton/SkeletonProjectByIdComponent";
import "dayjs/locale/id";

// Konfigurasi dayjs di luar komponen agar tidak berulang
dayjs.locale("id");
dayjs.extend(relativeTime);

const ProjectByIdPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    // Pastikan params.id ada sebelum fetching
    if (!params.id) return;

    const fetchProjectById = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error setiap kali fetch baru
        const projectById = await getProjectById(params.id);
        setData(projectById);
      } catch (err) {
        console.error("Error ambil data project:", err);
        setError("Gagal memuat data proyek. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectById();
  }, [params]); // muat ulang setiap kali params.id berubah

  // error
  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto px-6 md:px-20 py-10">
      {loading ? (
        <SkeletonProjectByIdComponent />
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {dayjs(data.createdAt).fromNow()}
          </p>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {data.title}
              </h1>
            </div>

            <div className="w-full md:w-1/2 shadow-lg">
              {data.image && (
                <Image
                  src={data.image}
                  width={500}
                  height={300}
                  alt={`Foto proyek ${data.title}`}
                  className="w-full h-auto object-cover"
                  priority
                />
              )}
            </div>
          </div>

          <div className="border-[1px] border-slate-300 w-full mx-auto my-8"></div>

          {data.content?.html && (
            <div
              className="prose dark:prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: data.content.html,
              }}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectByIdPage;
