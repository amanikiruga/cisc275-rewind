import * as api from "../api";
//Action Creators - functions that return actions
export const getProjects =
    () => async (dispatch: (action: { type: any; payload: any }) => any) => {
        try {
            const { data } = await api.fetchProjects();
            const action = { type: "FETCH_ALL", payload: data };
            dispatch(action);
        } catch (error) {
            console.log((error as any).message);
        }
    };
