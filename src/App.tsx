import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Button, Container, FormControlLabel, Switch, TextField, Typography,} from "@material-ui/core";
//import Logo from "./assets/Logo.png";
import Signature from "./Signature";
import {CheckOutlined, FileCopyOutlined} from "@material-ui/icons";
import "./App.css";

let Logo = 'https://twosmallmen.com/wp-content/uploads/2022/10/Logo.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
            },
            "& .label-root": {
                margin: theme.spacing(1),
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "left",
            color: theme.palette.text.secondary,
        },
        centeredImage: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "150px",
            height: "150px",
        },
        centeredText: {
            textAlign: "center",
        },
        warningIconStyle: {
            textAlign: "center",
            color: "#FFDC00",
            verticalAlign: "middle",
        },
    })
);

export interface PhotoSignatureProps {
    fullName: string;
    position: string;
    phone: string;
    email: string;
    photo: string;
}

interface State extends PhotoSignatureProps {
    withPhoto: boolean;
    copied: boolean;
    htmlcopied: boolean;
}

const initialState: State = {
    fullName: "",
    position: "",
    phone: "",
    email: "",
    photo: "",
    withPhoto: false,
    copied: false,
    htmlcopied: false,
};

function App() {
    const classes = useStyles();
    const [state, setState] = React.useState<State>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "withPhoto") {
            setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.checked,
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }));
        }
    };

    const enoughData = () => {
        let progress = 100;
        if (state.withPhoto) {
            if (
                state.fullName &&
                state.phone &&
                state.email &&
                state.position &&
                state.photo
            ) {
                return (
                    <React.Fragment>
                        <Signature
                            fullName={state.fullName}
                            position={state.position}
                            phone={state.phone}
                            email={state.email}
                            photo={state.photo}
                        />
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Button
                            disabled={state.photo.length > photoUrlMaxLength}
                            onClick={copyToClipboard}
                            endIcon={state.copied ? <CheckOutlined/> : <FileCopyOutlined/>}
                        >
                            {state.copied ? "Copied" : "Copy For Outlook"}
                        </Button>

                        <Button
                            disabled={state.photo.length > photoUrlMaxLength}
                            onClick={copyToClipboardHubspot}
                            endIcon={state.htmlcopied ? <CheckOutlined/> : <FileCopyOutlined/>}
                        >
                            {state.htmlcopied ? "Copied" : "Copy For Hubspot"}
                        </Button>
        
                    </React.Fragment>
                );
            } else {
                Object.entries(state).forEach(([key, value]) => {
                    if (
                        ["fullName", "phone", "email", "position", "photo"].includes(key)
                    ) {
                        if (value.length === 0) {
                            progress = progress - 20;
                        }
                    }
                });
            }
        } else {
            if (state.fullName && state.phone && state.email && state.position) {
                return (
                    <React.Fragment>
                        <Signature
                            fullName={state.fullName}
                            position={state.position}
                            phone={state.phone}
                            email={state.email}
                            photo={"https://twosmallmen.com/wp-content/uploads/2022/10/Logo.png"}
                        />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Button
                            onClick={copyToClipboard}
                            endIcon={state.copied ? <CheckOutlined/> : <FileCopyOutlined/>}
                        >
                            {state.copied ? "Copied" : "Copy For Outlook"}
                        </Button>
                        <Button
                            onClick={copyToClipboardHubspot}
                            endIcon={state.htmlcopied ? <CheckOutlined/> : <FileCopyOutlined/>}
                        >
                            {state.htmlcopied ? "Copied" : "Copy For Hubspot"}
                        </Button>
                        <div></div>

                    </React.Fragment>
                );
            } else {
                Object.entries(state).forEach(([key, value]) => {
                    if (["fullName", "phone", "email", "position"].includes(key)) {
                        if (value.length === 0) {
                            progress = progress - 25;
                        }
                    }
                });
            }
        }
        if (progress > 0) {
            return (
                <div className={classes.centeredText}>
                </div>
            );
        } else {
            return <div>Please, input your data</div>;
        }
    };
  


    const copyToClipboard = () => {
        let copyText = document.querySelector(".signature");
        const range = document.createRange();
        if (copyText) {
            range.selectNode(copyText);
        }
        const windowSelection = window.getSelection();
        if (windowSelection) {
            windowSelection.removeAllRanges();
            windowSelection.addRange(range);
        }
        try {
            let successful = document.execCommand("copy");
            console.log(successful ? "Success" : "Fail");
            setState((prevState) => ({
                ...prevState,
                copied: true,
            }));
        } catch (err) {
            console.log("Fail");
        }
    };

    const copyToClipboardHubspot = () => {
        let copyText = document.querySelector(".hubspot");
        const range = document.createRange();
        if (copyText) {
            range.selectNode(copyText);
        }
        const windowSelection = window.getSelection();
        if (windowSelection) {
            windowSelection.removeAllRanges();
            windowSelection.addRange(range);
        }
        try {
            let successful = document.execCommand("copy");
            console.log(successful ? "Success" : "Fail");
            setState((prevState) => ({
                ...prevState,
                htmlcopied: true,
            }));
        } catch (err) {
            console.log("Fail");
        }
    };
    
    const isStateChanged = () => {
        return JSON.stringify(state) === JSON.stringify(initialState);
    };

    const clearState = () => {
        setState(initialState);
    };

    const photoUrlMaxLength = 1000;

    return (
        <Container>
            <img className={classes.centeredImage} src={Logo} alt={"logo"}/>
            <Typography variant="h2" gutterBottom className={classes.centeredText}>
                Email Signature generator
            </Typography>
            <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.centeredText}
            >
                Generate Your Two Small Men Email Signature Today
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                fullWidth={true}
                                required
                                label="Full Name"
                                value={state.fullName}
                                name={"fullName"}
                                onChange={handleChange}
                                autoFocus={true}
                            />
                            <TextField
                                fullWidth={true}
                                required
                                label="Position"
                                value={state.position}
                                name={"position"}
                                onChange={handleChange}
                            />
                           
                            <TextField
                                fullWidth={true}
                                required
                                label="Telephone"
                                value={state.phone}
                                name={"phone"}
                                onChange={handleChange}
                            />
                             <TextField
                                fullWidth={true}
                                required
                                label="Email"
                                value={state.email}
                                name={"email"}
                                onChange={handleChange}
                            />
                         
                            {state.withPhoto && (
                                <TextField
                                    error={state.photo.length > photoUrlMaxLength}
                                    fullWidth={true}
                                    required
                                    label="Link to image"
                                    value={state.photo}
                                    name={"photo"}
                                    onChange={handleChange}
                                    helperText={
                                        state.photo.length > photoUrlMaxLength &&
                                        "It's not an image url, but, probably, image in base64 form. Please, choose appropriate data."
                                    }
                                />
                            )}
                            <br/>
                            <Button
                                disabled={isStateChanged()}
                                onClick={clearState}
                                color={"secondary"}
                            >
                                Clear
                            </Button>
                            <div></div>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>{enoughData()}</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
