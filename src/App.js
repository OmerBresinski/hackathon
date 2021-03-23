import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Route path={URL.feed} component={Feed} exact />
                <Route path={URL.project} component={Project} exact />
                <Route
                    path={URL.createProject}
                    component={CreateProject}
                    exact
                />
            </Router>
        </>
    );
};

export default App;
