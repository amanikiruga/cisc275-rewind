const Projects = (projects = ["default"], action: any) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...projects, action.payload];

        default:
            return projects;
    }
};
export default Projects;
