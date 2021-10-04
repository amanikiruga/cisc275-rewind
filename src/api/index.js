import axios from "axios";

const url = "http://localhost:5000/projects";

export const fetchProjects = () => axios.get(url);
export const createProject = (newProject) => axios.post(url, newProject);
export const editProject = (id, editedProject) =>
    axios.patch(`${url}/${id}`, editedProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
export const likeProject = (id) => axios.patch(`${url}/${id}/likeproject`);
