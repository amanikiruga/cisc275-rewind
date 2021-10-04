import useStyles from "./styles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { deleteProject, likeProject } from "../../../actions/projects";
type ProjectProps = {
    project: any;
    setCurrentId: (id: number) => void;
};
const Project = (props: ProjectProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    props.project.featuredImage
                        ? `data:image/png;base64, ${props.project.featuredImage}`
                        : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={props.project.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{props.project.creator}</Typography>
                <Typography variant="body2">
                    {new Date(props.project.createdAt).toLocaleDateString()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: "white" }}
                    size="small"
                    onClick={() => {
                        props.setCurrentId(props.project._id);
                    }}
                >
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                >
                    {props.project.tags.map((tag: string) => `#${tag} `)}
                </Typography>
            </div>
            <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
            >
                {props.project.title}
            </Typography>
            <Typography
                className={classes.details}
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
            >
                {props.project.content}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                        dispatch(likeProject(props.project._id));
                    }}
                >
                    <ThumbUpAltIcon fontSize="small" /> Like{" "}
                    {props.project.likeCount}{" "}
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                        dispatch(deleteProject(props.project._id));
                    }}
                >
                    <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    );
};
export default Project;
