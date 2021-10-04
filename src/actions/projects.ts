import * as api from "../api";
//Action Creators - functions that return actions
export const getProjects =
    () => async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.fetchProjects();
            // console.log("Here" + JSON.stringify(data));
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
export const editProject =
    (id: number, project: any) =>
    async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.editProject(id, project);
            dispatch({ type: "UPDATE", payload: data });
        } catch (error) {
            console.log(error);
        }
    };

export const deleteProject =
    (id: number) =>
    async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            await api.deleteProject(id);
            dispatch({ type: "DELETE", payload: id });
        } catch (error) {
            console.log(error);
        }
    };
export const likeProject =
    (id: number) =>
    async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.likeProject(id);
            dispatch({ type: "LIKE", payload: data });
        } catch (error) {
            console.log(error);
        }
    };
