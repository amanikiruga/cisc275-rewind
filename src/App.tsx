import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import { getProjects } from "./actions/projects";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState<number | null>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [currentId, dispatch]);

    //Testing purposes
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">View Projects</Link>
                        </li>
                        <li>
                            <Link to="/add-project">Add Project</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/projects">
                        <Projects setCurrentId={setCurrentId} />
                    </Route>
                    <Route path="/add-project">
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    /*
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
                            <Projects setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
    */
};

export default App;
