import { Container, Typography, Button } from "@mui/material";
import Nav from "../Nav/Nav";

const Home = () => {
    return (
        <div>
            <Container>
                <Typography sx={{ mb: 2, mt: 2 }} variant="h2" component="h1">
                    CISC275: Rewind
                </Typography>

                <Typography sx={{ mb: 3 }}>
                    This is a simple website{" "}
                    <span>
                        <a href="/">Github Link</a>
                    </span>{" "}
                    that showcases projects of students in Dr. Bart's CISC275
                    class on web development!
                </Typography>
                <Typography sx={{ mb: 1 }} variant="h4">
                    Current Students
                </Typography>
                <Button> Add Your Project</Button>
            </Container>
        </div>
    );
};

export default Home;
