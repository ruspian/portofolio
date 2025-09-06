import React from "react";
import { Card } from "antd";
import { EyeOutlined, GithubOutlined, LoginOutlined } from "@ant-design/icons";

const ProjectCardComponent = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <EyeOutlined key="see" />,
        <GithubOutlined key="github" />,
        <LoginOutlined key="open" />,
      ]}
    >
      <h2 className="text-start font-bold">Project Name</h2>
      <p className="text-start">Description</p>
    </Card>
  );
};

export default ProjectCardComponent;
