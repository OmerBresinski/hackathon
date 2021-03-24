import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Feed, Project, CreateProject } from "pages";
import NavBar from "components/NavBar";
import { URL } from "./constant";

const App = () => {
    return (
        <>
            <NavBar>
                <Router>
                    <Route path={URL.feed} component={Feed} exact />
                    <Route
                        path={`${URL.project}/:projectId`}
                        component={Project}
                    />
                    <Route
                        path={URL.createProject}
                        component={CreateProject}
                        exact
                    />
                </Router>
            </NavBar>
        </>
    );
};

export default App;
