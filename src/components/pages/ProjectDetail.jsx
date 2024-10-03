import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>프로젝트 상세 페이지</h1>
      <p>프로젝트 ID: {id}</p>
    </div>
  );
};

export default ProjectDetail;
