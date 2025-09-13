import React from "react";
import { Card } from "antd";
import { EyeOutlined, GithubOutlined, LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProjectCardComponent = ({ title, content, image, githubUrl, webUrl }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={title} src={image} />}
      className="hover:scale-110 transition-all duration-300 ease-in-out"
      actions={[
        <Link href="#">
          <EyeOutlined key="see" />
        </Link>,
        <Link href={githubUrl}>
          <GithubOutlined key="github" />
        </Link>,
        <Link href={webUrl === null ? "#" : webUrl}>
          <LoginOutlined key="open" />
        </Link>,
      ]}
    >
      <h2 className="text-start font-bold text-md">{title}</h2>
      <p
        className="text-start line-clamp-1"
        dangerouslySetInnerHTML={{ __html: content.html }}
      ></p>
    </Card>
  );
};

export default ProjectCardComponent;
