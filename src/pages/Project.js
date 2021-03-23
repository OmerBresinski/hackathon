import React from "react";

const Project = (props) => {
    const projectId = props.match.params.projectId;
    return <div>Project {projectId}</div>;
};

export default Project;
