import React from "react";
import { Card } from "antd";
import { EyeOutlined, GithubOutlined, LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProjectCardComponent = ({ title, content, image, githubUrl, webUrl }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={title} src={image} />}
      actions={[
        <Link href="#">
          <EyeOutlined key="see" />
        </Link>,
        <Link href={githubUrl}>
          <GithubOutlined key="github" />
        </Link>,
        <Link href={webUrl}>
          <LoginOutlined key="open" />
        </Link>,
      ]}
    >
      <h2 className="text-start font-bold">{title}</h2>
      <p
        className="text-start"
        dangerouslySetInnerHTML={{ __html: content.html }}
      ></p>
    </Card>
  );
};

export default ProjectCardComponent;
