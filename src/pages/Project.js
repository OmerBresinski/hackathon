import React from "react";

const Project = (props) => {
    return <div>Project {props.match.params.projectId}</div>;
};

export default Project;
