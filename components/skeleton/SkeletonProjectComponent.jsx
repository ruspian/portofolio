import { Skeleton } from "antd";
import React from "react";

const SkeletonProjectComponent = () => {
  return (
    <div className="mx-auto px-10 py-10 ">
      <div className="flex flex-col gap-4 text-center justify-center mt-8">
        <Skeleton active />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto">
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
          <Skeleton.Image active style={{ width: "300px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProjectComponent;
