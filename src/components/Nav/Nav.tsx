import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, withRouter } from "react-router-dom";
const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to="/">CISC275: Rewind</Link>
                    </Typography>

                    <Link to="/projects">View Projects</Link>
                    <Link to="/add-project">Add Project</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default withRouter(Nav);
