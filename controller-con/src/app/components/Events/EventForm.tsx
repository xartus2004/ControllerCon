'use client'

import { useForm } from "@tanstack/react-form";
import { TextField, Checkbox, FormControlLabel, Grid, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function EventForm() {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            game: "",
            loc: "",
            time: "",
            date: "",
            open: true,
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                const response = await fetch("http://localhost:4000/api/v1/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values.value)
                });
                const data = await response.json();
                if (data.error) {
                    console.log(data.error);
                } else {
                    router.push("/events/" + data._id);
                }
            } catch (error) {
                console.error("Error creating event:", error);
            }
        }
    });

    return (
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <form.Field name="name">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Event Name"
                          variant="outlined"
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={12}>
              <form.Field name="description">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Description"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={12}>
              <form.Field name="game">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Game"
                          variant="outlined"
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={12}>
              <form.Field name="loc">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Location"
                          variant="outlined"
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={6}>
              <form.Field name="time">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Time"
                          type="time"
                          InputLabelProps={{ shrink: true }}
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={6}>
              <form.Field name="date">
                  {({ state, handleChange, handleBlur }) => (
                      <TextField
                          fullWidth
                          label="Date"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          value={state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          onBlur={handleBlur}
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={12}>
              <form.Field name="open">
                  {({ state, handleChange }) => (
                      <FormControlLabel
                          control={
                              <Checkbox
                                  checked={state.value}
                                  onChange={(e) => handleChange(e.target.checked)}
                              />
                          }
                          label="Open Event"
                      />
                  )}
              </form.Field>
          </Grid>
          <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                  Create Event
              </Button>
          </Grid>
      </Grid>
    );
}
