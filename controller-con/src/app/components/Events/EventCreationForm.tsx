/* eslint-disable react/no-children-prop */
'use client'

import { useForm } from "@tanstack/react-form";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { TextField, Checkbox, FormControlLabel, Grid, Box } from "@mui/material";
import NotLoggedIn from "../NotLoggedIn";
import { useRouter } from "next/navigation";

export default function EventCreationForm() {
    const [user, discordUser, loggedIn, loading] = useContext(UserContext);
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            name: "",
            creator: "",
            creatorName: "",
            description: "",
            open: true,
            game: "",
            loc: "",
            time: "",
            date: "",
            applicationSettings: {
                reqIGN: false,
                reqSer: false,
                reqTOS: false
            },
            participantSettings: {
                allowTitle: true,
                reqTitle: false,
                allowDesc: true,
                reqDesc: false,
                allowImage: true,
                reqImg: false,
                allowAdminContact: true
            },
            displaySettings: {
                textColor: "#000000",
                pic: "/assets/PFLogo2.png"
            },
        },
        onSubmit: async (values) => {
            console.log(values);
            fetch("http://localhost:4000/api/v1/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values.value)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.error){
                    console.log(data.error);
                } else {
                    router.push("/events/" + data._id)
                }
            })
        }
    });

    useEffect(() => {
        if(loading === false){
            if(loggedIn === false){
                {router.push("/")}  
            }
        }
        if(!loading && loggedIn){
            form.setFieldValue("creator", user._id)
            form.setFieldValue("creatorName", user.username)
        }
    }, [loading, loggedIn, discordUser, user])

    return (
        <Grid className="pf-form" marginTop={2} container direction="column" spacing={2} display="flex" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Box mb={2}>
                    <h1 className="text-color-1">Create an Event</h1>
                </Box>
            </Grid>   
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void form.handleSubmit();
                }}
            >
                <Grid item xs={12}>
                    <Box mb={2}>
                        <form.Field
                            name="name"
                            children={({state, handleChange, handleBlur}) => (
                                <TextField
                                    id='standard-basic'
                                    name="name"
                                    label="Event Name"
                                    variant="outlined"
                                    value={state.value || ""}
                                    onChange={(e) => handleChange(e.target.value)}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <form.Field
                            name="description"
                            children={({state, handleChange, handleBlur}) => (
                                <TextField
                                    id='standard-basic'
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    value={state.value || ""}
                                    onChange={(e) => handleChange(e.target.value)}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <form.Field
                            name="game"
                            children={({state, handleChange, handleBlur}) => (
                                <TextField
                                    id='standard-basic'
                                    name="game"
                                    label="Game"
                                    variant="outlined"
                                    value={state.value || ""}
                                    onChange={(e) => handleChange(e.target.value)}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <form.Field
                            name="loc"
                            children={({state, handleChange, handleBlur}) => (
                                <TextField
                                    id='standard-basic'
                                    variant="outlined"
                                    name="loc"
                                    label="Location"
                                    value={state.value || ""}
                                    onChange={(e) => handleChange(e.target.value)}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2} marginLeft={1}>
                        <form.Field
                            name="time"
                            children={({state, handleChange, handleBlur}) => (
                                <FormControlLabel
                                    label="Time"
                                    control={
                                        <input 
                                            type="time" 
                                            name="time" 
                                            value={state.value || ""} 
                                            onChange={(e) => handleChange(e.target.value)} 
                                            onBlur={handleBlur}
                                        />
                                    }
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2} marginLeft={1}>
                        <form.Field
                            name="date"
                            children={({state, handleChange, handleBlur}) => (
                                <FormControlLabel
                                    label="Date"
                                    control={
                                        <input 
                                            type="date" 
                                            name="date" 
                                            value={state.value || ""} 
                                            onChange={(e) => handleChange(e.target.value)} 
                                            onBlur={handleBlur}
                                        />
                                    }
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <form.Field
                            name="open"
                            children={({state, handleChange, handleBlur}) => (
                                <FormControlLabel
                                    label="Open"
                                    control={
                                        <Checkbox 
                                            checked={state.value || false} 
                                            onChange={(e) => handleChange(e.target.checked)} 
                                            onBlur={handleBlur}
                                        />
                                    }
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <button type="submit">Submit</button>
                </Grid>
            </form>
        </Grid>
    )
}
