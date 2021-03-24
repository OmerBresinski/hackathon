import React from "react";
import Card from "components/Card";

const Project = (props) => {
    const projectId = props.match?.params.projectId;
    const project = props.projects?.find((project) => project.id === projectId);

    return (
        <div style={{ paddingBlockStart: "80px" }}>
            <Card
                key={project?.id}
                id={project?.id}
                title={project?.title}
                userName={project?.userName}
                description={project?.description}
                image={project?.image}
                userProfileImage={project?.userProfileImage}
                role={project?.role}
                lookingFor={project?.lookingFor}
            />
        </div>
    );
};

export default Project;
