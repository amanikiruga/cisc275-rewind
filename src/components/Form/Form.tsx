import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../actions/projects";

const Form = () => {
    const classes = useStyles();
    const [base64, setBase64] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<any>("");
    const dispatch = useDispatch();
    const [projectData, setProjectData] = useState({
        creator: "",
        title: "",
        content: "",
        tags: "",
        featuredImage: "",
    });

    const onChange = (e: any) => {
        if (e.target.files) {
            let file = e.target.files[0];
            if (file) {
                console.log("file", e.target.files[0]);
                const reader = new FileReader();
                reader.onload = _handleReaderLoaded;
                reader.readAsBinaryString(file);
            }
        }
    };

    const _handleReaderLoaded = (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        setBase64(btoa(binaryString));
        console.log("bine", base64);
    };

    const onFileSubmit = (e: any) => {
        e.preventDefault();
        console.log("bine", base64);
        let payload = { image: base64 };
        setProjectData({ ...projectData, featuredImage: base64 });
        console.log("payload", payload);
        dispatch(createProject(projectData));
    };
    //https://github.com/GuScarpim/upload-image-react-base64/blob/main/front/src/pages/Upload.tsx
    const photoUpload = (e: any) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        console.log("reader", reader);
        console.log("file", file);
        if (reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                // setFile(file);
                // setSize(file.size);
                // setName(file.name);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const clear = () => {};

    return (
        <div className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={onFileSubmit}
                onChange={(e) => onChange(e)}
            >
                <Typography variant="h6">Create a Project</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={projectData.creator}
                    onChange={(e) => {
                        setProjectData({
                            ...projectData,
                            creator: e.target.value,
                        });
                    }}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={projectData.title}
                    onChange={(e) => {
                        setProjectData({
                            ...projectData,
                            title: e.target.value,
                        });
                    }}
                />
                <TextField
                    name="content"
                    variant="outlined"
                    label="Content"
                    fullWidth
                    value={projectData.content}
                    onChange={(e) => {
                        setProjectData({
                            ...projectData,
                            content: e.target.value,
                        });
                    }}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={projectData.tags}
                    onChange={(e) => {
                        setProjectData({
                            ...projectData,
                            tags: e.target.value,
                        });
                    }}
                />
                <div className={classes.fileInput}>
                    <input
                        type="file"
                        name="featuredImage"
                        id="featuredImage"
                        accept=".jpeg, .png, .jpg"
                        onChange={photoUpload}
                        src={imagePreview}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default Form;
