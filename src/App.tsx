import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import { getProjects } from "./actions/projects";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                position="static"
                className={classes.appBar}
                color="inherit"
            >
                <Typography
                    variant="h2"
                    className={classes.heading}
                    align="center"
                >
                    CISC275 Rewind
                    {
                        //insert img className = {classes.image}
                    }
                </Typography>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Projects />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
