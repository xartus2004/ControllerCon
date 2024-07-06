import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, Grid } from "@mui/material"
import Link from "next/link"
import { EventUser } from "../types/EventUserType"

export default function UserEvents() {
    const { id } = useParams()
    const [events, setEvents] = useState<EventUser[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            // Fetch events for the user
            fetch(`http://localhost:4000/eventusers/discord/user/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setEvents(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("Error fetching events:", error)
                    setLoading(false)
                })
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Grid 
            container 
            spacing={2} 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            sx={{ width: '60%' }}
        >
            <Grid item xs={12}>
                <h3 className="text-color-1" style={{ textAlign: "left" }}>User&apos;s events: </h3>
            </Grid>

            {/* Display message if no events are found */}
            {(events.length === 0 || events === null || events === undefined) && (
                <div>No events yet</div>
            )}

            {/* Map through events and display them */}
            {events.length > 0 && events.map((event) => (
                <Grid key={event._id} item xs={4}>
                    <Card>
                        <CardContent>
                            <h4>
                                <Link href={`/events/${event.event}`}>{event.eventName}</Link>
                            </h4>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
