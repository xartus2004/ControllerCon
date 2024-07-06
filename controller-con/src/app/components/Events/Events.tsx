'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ApplyButton from "./ApplyButton";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Box from "@mui/material/Box";
//declares types for event. This now needs to be imported from the types file.
interface ApplicationSettings {
    reqIGN: boolean;
    reqSer: boolean;
    reqTOS: boolean;
    tos?: string;
  }
  
  interface ParticipantSettings {
    allowTitle: boolean;
    reqTitle: boolean;
    titleLabel?: string;
    allowDesc: boolean;
    reqDesc: boolean;
    descLength?: [number, number];
    allowImage: boolean;
    reqImg: boolean;
    imgLabel?: string;
    allowAdminContact: boolean;
  }
  
  interface DisplaySettings {
    backgroundColor?: string;
    textColor: string;
    textColor2?: string;
    pic: string;
  }
  
     interface Event {
    _id: string;
    name: string;
    creator: string;
    creatorName: string;
    description: string;
    open: boolean;
    game?: string;
    loc?: string;
    time?: string;
    date?: string;
    applicationSettings: ApplicationSettings;
    participantSettings: ParticipantSettings;
    displaySettings: DisplaySettings;
    timestamps: boolean;
  }
  //displays all events
export function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    //fetches all events
    useEffect(() => {
        fetch("http://localhost:4000/api/v1/events").then((res) => res.json()).then((data) => {
            setEvents(data);
        });
    }, []);
    return (
        //maps through events and displays them
        <Grid marginTop={5} display="flex" justifyContent="center" alignItems="center" container spacing={2}>
               <Grid item xs={12}>
    <Box mb={2}>
    <h1 className="text-color-1">Event Listings</h1>
    </Box>
    </Grid>
            {events.map((event) => (
                <Grid item key={event._id} display="flex" justifyContent="center" alignItems="center" xs={5} >
                <Card variant="outlined" sx={{maxWidth: 700, width:500, height:175, maxHeight:300}}className="event-container">
                    <CardHeader title={
                    <Link href={
                        {
                            pathname: `/events/${event._id}`,
                        }
                    
                    }><h2 className="text-color-1">{event.name}</h2></Link>}/>
                    <CardContent>
                    <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
                    <Grid xs={8}><p className="text-color-2">{event.description}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.game}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.loc}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.time}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.date}</p></Grid>
                    </Grid>
                    </CardContent>
                    
                </Card>
                </Grid>
            ))}
            </Grid>
    );
  
}

export function Event() {
    const [event, setEvent] = useState<Event>();
    const { id } = useParams();
    //fetches a single event
    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/events/${id}`).then((res) => res.json()).then((data) => {
            setEvent(data);
        });
    }, []);
    //Prevents the page from rendering before the event is loaded
    if (!event) {
        return <div>Loading...</div>;
    }else{
        return (
            //maps the event to a card
            <div>
                <Grid  margin={20}container display="flex" justifyContent="center" alignItems="center" spacing={2}>
                   <Grid xs={5} >
                <Card variant="outlined" sx={{maxWidth: 500}}className="event-container">
                    <CardHeader title={
                    <Link href={
                        {
                            pathname: `/events/${event._id}`,
                        }
                    
                    }><h2 className="text-color-1">{event.name}</h2></Link>}/>
                    <CardContent>
                    <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
                    <Grid xs={8}><p className="text-color-2">{event.description}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.game}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.loc}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.time}</p></Grid>
                    <Grid xs={5}><p className="text-color-2">{event.date}</p></Grid> 
                    <Grid marginTop={5} xs={5}><ApplyButton creator={event.creator}/></Grid> 
                    </Grid>
                    </CardContent>
                    
                </Card>
                </Grid>
                </Grid>
                
            </div>
        );
    }
}