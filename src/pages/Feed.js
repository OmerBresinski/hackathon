import List from "components/List/List";
import React from "react";

const Feed = () => {
    return <List items={projects} />
};

const projects = [{ title: 'a', description: 'sadaas', id: 123 }, { title: 'fdsdwe', description: 'sadfnejfeufheuaas', id: 123 }]


export default Feed;
