import Post from "./projects/project";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Projects = () => {
    const posts = useSelector((state) => state.projects);
    const classes = useStyles();
    return (
        <>
            <h1>Projects</h1>
            <Post />
            <Post />
        </>
    );
};
export default Projects;
