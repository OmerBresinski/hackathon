import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Feed, Project, CreateProject } from "pages";
import NavBar from "components/NavBar";
import { URL } from "./constant";
import { getUsers } from './service'



const App = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        fetchFakeData()
    }, [])

    const fetchFakeData = async () => {
        const users = await getUsers()
        console.log(users)
        const usersProjects = users.map((user, index) => {
            return {
                ...users,
                description: projects[index]?.description,
                title: projects[index]?.title,
                userName: `${user.firstName}${user.lastName}`,
                image: user.picture,
                id: user.id
            }
        })
        setProjectsData(usersProjects)
    }

    return (
        <>
            <NavBar />
            <Router>
                <Route path={URL.feed} render={
                    (props) => <Feed {...props} items={projectsData} exact />}></Route>
                <Route path={`${URL.project}/:projectId`} component={Project} />
                <Route
                    path={URL.createProject}
                    component={CreateProject}
                    exact
                />
                <Route path={URL.home} component={Home} />
            </Router>
        </>
    );
};

const projects = [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'Project 1'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'ggrgr'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'fhefeuf'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'fhefeuf'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'fhefeuf'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'fhefeuf'
},
{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm',
    title: 'fhefeuf'
}]

export default App;
