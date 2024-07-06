/* eslint-disable react/no-children-prop */
'use client'
import {useForm} from '@tanstack/react-form'
import {useContext, useState, useEffect, use} from 'react'
import { UserContext } from '../../context/UserContext'
import { useParams } from 'next/navigation'
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { ApplicationSettings } from '../types/EventType';
export default function ApplicationForm() {
    const {id} = useParams()
    const [user, discordUser, loggedIn, loading] = useContext(UserContext)
    const [loading2, setLoading2] = useState(false)
    const [application, setApplication] = useState<ApplicationSettings>({} as ApplicationSettings)
    const [eventName, setEventName] = useState("")

    //Fetches the event and application settings
    useEffect(() => {
        if (id){
            fetch("http://localhost:4000/api/v1/events/" + id, {credentials: "include"})
            .then((res) => res.json())
            .then((data) => {
                setApplication(data.applicationSettings)
                setEventName(data.name)
                setLoading2(false)
            })
        }
},[id])

//Initializes the form
const form = useForm({
    defaultValues: {
        user: "",
        username: "",
        event: id,
        ign: "",
        ser: "",
        tos: false,
        eventName: ""
    },
    //Submits the form to the database
    onSubmit: async (values) => {
        console.log(values)
        fetch("http://localhost:4000/api/v1/applications/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values.value)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }
})
//Sets the user and discordUser values in the form once they are loaded
useEffect(() => {
 if (user && discordUser && eventName){
        form.setFieldValue("user", user._id)
        form.setFieldValue("username", discordUser.username)
        form.setFieldValue("eventName", eventName)
 }})
 //Prevents to from rendering before the event and application settings are loaded.
if (loading || loading2){
    return <div>Loading...</div>
}
return(
    //Renders the form based on the application settings
    <Grid className="pf-form" container spacing={2} display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <h1 className='text-color-1'>Application for {eventName}</h1>
        </Grid>
        <form
        onSubmit={(e) =>{
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
        }}>

        <Grid item xs={12}>
        {application.reqIGN === true && (
            <form.Field
            name="ign"
            children={({state, handleChange, handleBlur}) => {
                return(
                    <TextField
                    id='standard-basic'
                    name='ign'
                    label='In-Game Name: '
                    value={state.value}
                    onChange={(e)=> handleChange(e.target.value)}
                    onBlur={handleBlur}
                    />
                )
            }}
            />
       )}
        </Grid>
        <Grid item xs={12}>
        {application.reqSer === true && (
            <form.Field
            name="ser"
            children={({state, handleChange, handleBlur}) => {
                return(
                    <TextField
                    id='standard-basic'
                    name='server'
                    label='Server: '
                    value={state.value}
                    onChange={(e)=> handleChange(e.target.value)}
                    onBlur={handleBlur}
                    />
                )
            }}
            />)}
        </Grid>
        <Grid item xs={12}>
        {application.reqTOS === true && (
            <form.Field
            name="tos"
            children={({state, handleChange, handleBlur}) => {
                return(
                    <FormControlLabel label={application.tos} control={<Checkbox checked={state.value} onChange={(e) => handleChange(e.target.checked)} onBlur={handleBlur} />}/>
                )
            }}
            />
        )}
        </Grid>
        <Grid item xs={12}>
            {application.reqTOS === false && application.reqIGN===false && application.reqSer === false &&(
                <p>Looks like we don&apos;t need any additional information from you!</p>
            )}
        </Grid>
        <Grid item xs={12}>
            <button type="submit">Submit</button>
        </Grid>
        </form>
    </Grid>

)
}