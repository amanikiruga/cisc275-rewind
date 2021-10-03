import * as api from "../api";
//Action Creators - functions that return actions
export const getProjects =
    () => async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.fetchProjects();
            console.log("Here" + data);
            const action = { type: "FETCH_ALL", payload: data };
            dispatch(action);
        } catch (error) {
            console.log((error as any).message);
        }
    };

export const createProject =
    (project: any) =>
    async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.createProject(project);
            console.log(data);
            dispatch({ type: "CREATE", payload: data });
        } catch (error) {
            console.log(error);
        }
    };
