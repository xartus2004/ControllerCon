'use client'
import Applications from "../Applications";
import { useForm } from "@tanstack/react-form";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PfEvent } from "../../types/EventType";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { TextField,Checkbox, FormControlLabel } from "@mui/material";
import Participants from "../Participants";
import { Grid } from "@mui/material";
export default function SettingsForm() {
  const { id } = useParams();
  const [eventValues, setEventValues] = useState<PfEvent>({} as PfEvent);
  const [loading, setLoading] = useState(true);
  //Fetches the event settings
  useEffect(() => {
    if (id) {
      fetch("http://localhost:4000/api/v1/events/" + id, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setEventValues(data);
            setLoading(false);
          }
        });
    }
  }, [id]);

  //Initializes the form with the current event settings as the default values
  const form = useForm({
    defaultValues: eventValues,
    onSubmit: (values) => {
        console.log(values);
      fetch("http://localhost:4000/api/v1/events/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values.value),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log(data);
            alert("Changes saved!");
          }
        });
    },
  });
 

//Prevents the form from rendering before the event settings are loaded
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pf-form">
      <h1 className="text-color-1">Event Settings</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <Accordion>
          <AccordionSummary>Main Settings</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={2}>
            <form.Field
              name="name"
              // eslint-disable-next-line react/no-children-prop
              children={({state, handleChange,handleBlur}) => {
                return (<TextField
                id="standard-basic"
                name="name"
                label="Event Name"
                
                variant="outlined"
                value={state.value||""}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder= {eventValues.name}
                />)}}
            />
            </Grid>
            <Grid item xs={2}>
            <form.Field
              name="description"
              // eslint-disable-next-line react/no-children-prop
              children={({state, handleChange,handleBlur}) => {
                return (<TextField
                id="standard-basic"
                name="description"
                label="Description"
                variant="outlined"
                
                value={state.value||""}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder= {eventValues.description}
                />)}} 
            />
            </Grid>
            <Grid item xs={2}>
            <form.Field
              name="game"
              // eslint-disable-next-line react/no-children-prop
              children={({state, handleChange,handleBlur}) => {
                return (<TextField
                id="standard-basic"
                name="game"
                label="Game"
                variant="outlined"
                
                value={state.value||""}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder= {eventValues.game}
                />)}}
            /></Grid>
            <Grid item xs={2}>
            <form.Field
                name="loc"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (<TextField
                    id="standard-basic"
                    name="loc"
                    label="Location"
                    
                    variant="outlined"
                    value={state.value||""}
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={handleBlur}
                    placeholder= {eventValues.loc}
                    />)}}
            /></Grid>
            <Grid item xs={2}>
            <form.Field
                name="time"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                        <FormControlLabel control={<input
                        type="time"
                        id="time"
                        name="time"
                        
                        value={state.value||""}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={handleBlur}
                        placeholder= {eventValues.time}
                        />} label="Time"/>
                    )}}
            /></Grid>
            <Grid item xs={2}>
            <form.Field
                name="date"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                        <FormControlLabel label="Date" control={
                        <input
                        type="date"
                        id="date"
                        name="date"
                        value={state.value||""}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={handleBlur}
                        placeholder= {eventValues.date}
                        />
                    } />
                    )}}
            /></Grid>
            <Grid item xs={2}>
            <form.Field
            name="open"
            // eslint-disable-next-line react/no-children-prop
            children={({state, handleChange,handleBlur}) => {
                return (
                   <FormControlLabel control={<Checkbox
                    id="open"
                    name="open"
                    checked={state.value|| false}
                    onChange={(e) => handleChange(e.target.checked)}
                    onBlur={handleBlur}
                    />} label="Require an application?"/>
                )}}
                /></Grid>
                </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Application Settings</AccordionSummary>
          <AccordionDetails>
          <Grid container spacing={2}>
              <Grid item xs={2}>
            <form.Field
                name="applicationSettings.reqIGN"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqIGN"
                        name="reqIGN"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require In-Game Name?"/>
                    )}}
                />
            </Grid>
            <Grid item xs={2}>
            <form.Field
                name="applicationSettings.reqSer"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqSer"
                        name="reqSer"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require Server?"/>
                    )}}
                />
                </Grid>
            <Grid item xs={2}>
            <form.Field
                name="applicationSettings.reqTOS"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqTOS"
                        name="reqTOS"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require Terms of Service?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="applicationSettings.tos"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <TextField
                    id="standard-basic"
                    name="tos"
                    label="Terms of Service"
                    
                    variant="outlined"
                    value={state.value||""}
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={handleBlur}
                    placeholder= {eventValues.applicationSettings.tos}
                    />
                    )}}
                /></Grid>
                </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Participant Settings</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
            <Grid item xs={2}>
            <form.Field
                name="participantSettings.allowTitle"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="allowTitle"
                        name="allowTitle"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Allow Title?"/>
                    )}}
                />
                </Grid>
            <Grid item xs={2}>
            <form.Field
                name="participantSettings.reqTitle"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqTitle"
                        name="reqTitle"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require Title?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.titleLabel"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <TextField
                    id="standard-basic"
                    name="titleLabel"
                    label="Title Label"
                    
                    variant="outlined"
                    value={state.value||""}
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={handleBlur}
                    placeholder= {eventValues.participantSettings.titleLabel}
                    />
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.allowDesc"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="allowDesc"
                        name="allowDesc"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Allow Description?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.reqDesc"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqDesc"
                        name="reqDesc"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require Description?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
                {/* //add descLength */}
            <form.Field
                name="participantSettings.allowImage"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="allowImage"
                        name="allowImage"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Allow Image?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.reqImg"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="reqImg"
                        name="reqImg"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Require Image?"/>
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.imgLabel"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <TextField
                    id="standard-basic"
                    name="imgLabel"
                    label="Image Label"
                    
                    variant="outlined"
                    value={state.value||""}
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={handleBlur}
                    placeholder= {eventValues.participantSettings.imgLabel}
                    />
                    )}}
                /></Grid>
                <Grid item xs={2}>
            <form.Field
                name="participantSettings.allowAdminContact"
                // eslint-disable-next-line react/no-children-prop
                children={({state, handleChange,handleBlur}) => {
                    return (
                    <FormControlLabel control={<Checkbox
                        id="allowAdminContact"
                        name="allowAdminContact"
                        checked={state.value|| false}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                        />} label="Allow Admin Contact?"/>
                    )}}
                /></Grid>
                </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Display Settings</AccordionSummary>
          <AccordionDetails>
            Coming soon...
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Show Applications</AccordionSummary>
          <AccordionDetails>
            <Applications/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Show Participants</AccordionSummary>
          <AccordionDetails>
            <Participants/>
          </AccordionDetails>
        </Accordion>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
