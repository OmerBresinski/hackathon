import React from "react";
import List from "components/List";
import * as S from "./style";

const Projects = (props) => {
    return (
        <S.Projects>
            <List items={props.projects} columns={3} />
        </S.Projects>
    );
};

export default Projects;
