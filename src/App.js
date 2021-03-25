import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Feed, Project, CreateProject } from "pages";
import project1 from "assets/project1.jpg";
import project2 from "assets/project2.jpg";
import project3 from "assets/project3.jpg";
import project4 from "assets/project4.jpg";
import project5 from "assets/project5.jpg";
import project6 from "assets/project6.jpg";
import project7 from "assets/project7.jpg";
import footer from "assets/footer.png";
import NavBar from "components/NavBar";
import { URL } from "./constant";
import { getUsers } from "./service";

const App = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [activeUser, setActiveUser] = useState({})

    useEffect(() => {
        fetchFakeData();
        fetchActiveUser()
    }, []);

    const handleProjectSubmit = (projectInfo) => {
        const projects = [...projectsData]
        projects.push(projectInfo)
        setProjectsData(projects)
    }

    const fetchFakeData = async () => {
        const users = await getUsers();
        const usersProjects = users.map((user, index) => {
            return {
                ...user,
                description: projects[index]?.description,
                title: projects[index]?.title,
                userName: `${user.firstName} ${user.lastName}`,
                userProfileImage: user.picture,
                image: projects[index % 7]?.image,
                id: user.id,
                role: projects[index]?.role,
                lookingFor: projects[index]?.lookingFor,
            };
        });
        setProjectsData(usersProjects);
    };


    const fetchActiveUser = async () => {
        const users= await getUsers();
        const user = users[0]
        setActiveUser({
            ...user,
            userName: `${user.firstName} ${user.lastName}`,
            userProfileImage: user.picture,
            role: projects[7]?.role
        });
    };

    return (
        <>
            <NavBar />
            <Router>
                <Route
                    path={URL.home}
                    component={() => <Home projects={projectsData} />}
                />
                <Route
                    path={URL.feed}
                    component={() => <Feed items={projectsData}></Feed>}
                ></Route>
                <Route
                    path={`${URL.project}/:projectId`}
                    component={(props) => (
                        <Project {...props} projects={projectsData} />
                    )}
                />
                <Route
                    path={URL.createProject}
                    component={() => <CreateProject onSubmitProject={handleProjectSubmit} activeUser={activeUser} />}
                    exact
                />
            </Router>
            <div style={{ display: "flex", marginTop: "50px" }}>
                <img
                    src={footer}
                    alt=''
                    style={{ maxWidth: "100vw", height: "auto" }}
                />
            </div>
        </>
    );
};

const projects = [
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "Project 1",
        role: "Software Developer",
        lookingFor: ["UX/UI Designers", "Marketing Majors"],
        image: project1,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "ggrgr",
        role: "UX/UI Designer",
        lookingFor: ["Web Developers", "Project Managers"],
        image: project2,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "fhefeuf",
        role: "Marketing",
        lookingFor: ["Film Makers", "Web Developers"],
        image: project3,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "fhefeuf",
        role: "AI Researcher",
        lookingFor: ["Web Developers", "Project Managers"],
        image: project4,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "fhefeuf",
        role: "Web Developer",
        lookingFor: ["Chemical Engineers", "Software Developers"],
        image: project5,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "fhefeuf",
        role: "Film Maker",
        lookingFor: ["UX/UI Designers", "Marketing Majors"],
        image: project6,
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        title: "fhefeuf",
        role: "Environmental Researcher",
        lookingFor: ["Film Makers, Environmental Researchers"],
        image: project7,
    },
];

export default App;
