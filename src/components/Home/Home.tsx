import {
    TextField,
    Button,
    Typography,
    Paper,
    Box,
    AppBar,
    Toolbar,
    IconButton,
} from "@material-ui/core";
import Nav from "../Nav/Nav";

const Home = () => {
    return (
        <div>
            <Nav />
            <h1>CISC275: Rewind</h1>
            This is a simple website{" "}
            <span>
                <a href="/">Github Link</a>
            </span>{" "}
            that showcases projects of students in Dr. Bart's CISC275 class on
            web development!
            <h2> Current Students</h2>
            <button>Add your projects</button>
        </div>
    );
};

export default Home;
