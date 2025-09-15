import { Skeleton, Space } from "antd";
import React from "react";

const SkeletonProjectByIdComponent = () => {
  return (
    <div className="mx-auto px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="md:w-1/2">
          <Skeleton active />
        </div>

        <div className="w-full md:w-1/2 shadow-lg">
          <Skeleton.Image active style={{ width: "480px", height: "200px" }} />
        </div>
      </div>

      <div className="border-[1px] border-slate-300 w-full mx-auto my-8"></div>

      <Skeleton active />
    </div>
  );
};

export default SkeletonProjectByIdComponent;
