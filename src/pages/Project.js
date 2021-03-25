import React from "react";
import * as S from './style'
import ProjectCard from "components/ProjectCard";

const Project = (props) => {
    const projectId = props.match?.params.projectId;
    const project = props.projects?.find((project) => project.id === projectId);

    return (
        <div style={{ paddingBlockStart: "80px" }}>
            <S.ProjectCardWrapper>
                <ProjectCard
                    key={project?.id}
                    id={project?.id}
                    title={project?.title}
                    userName={project?.userName}
                    description={project?.description}
                    image={project?.image}
                    userProfileImage={project?.userProfileImage}
                    role={project?.role}
                    lookingFor={project?.lookingFor}
                    width={props.width}
                />
            </S.ProjectCardWrapper>
        </div>
    );
};

export default Project;
