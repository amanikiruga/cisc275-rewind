import Project from "./projects/project";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Projects = () => {
    const projects = useSelector((state) => (state as any).projects);
    console.log(projects);
    const classes = useStyles();
    return (
        <>
            <h1>Projects</h1>
            <Project />
            <Project />
        </>
    );
};
export default Projects;
