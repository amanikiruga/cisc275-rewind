export default (projects = [], action: any) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return projects;

        default:
            return;
    }
};
