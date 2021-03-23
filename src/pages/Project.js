import React from "react";
import Card from 'components/Card'

const Project = (props) => {
    const projectId = props.match.params.projectId;
    return <div><Card title={'My CV project'} description={'aaaaaa'}></Card>
        Project {projectId}
    </div>;
};

export default Project;
