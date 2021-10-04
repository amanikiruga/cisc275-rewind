const Projects = (projects = [], action: any) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "LIKE":
        case "UPDATE":
            return projects.map((project) =>
                (project as any)._id === action.payload._id
                    ? action.payload
                    : project
            );
        case "DELETE":
            return projects.filter(
                (project) => (project as any)._id !== action.payload
            );
        case "CREATE":
            return [...projects, action.payload];

        default:
            return projects;
    }
};
export default Projects;
