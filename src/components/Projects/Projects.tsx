import Project from "./projects/project";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

type ProjectsTypes = {
    setCurrentId: (id: number) => void;
};

const Projects = (props: ProjectsTypes) => {
    const projects = useSelector((state) => (state as any).projects);
    console.log(projects);
    const classes = useStyles();
    return !projects.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={3}
        >
            {console.log("LENGTH", projects.length)}
            {projects.map((project: any) => (
                <Grid item key={project._id} xs={12} sm={6}>
                    {console.log(project)}
                    <Project
                        project={project}
                        setCurrentId={props.setCurrentId}
                    ></Project>
                </Grid>
            ))}
        </Grid>
    );
};
export default Projects;
