'use client'

import { UserContext } from "@/app/context/UserContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { EventUser } from "../types/EventUserType";
import UserEvents from "./UserEvents";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

// TODO: Import User interface from types file
interface User {
    id: string;
    discordId: string;
    username: string;
    bio: string;
    pic?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default function Profile() {
    const [user, discordUser] = useContext(UserContext);
    const { id } = useParams();
    const [profile, setProfile] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:4000/eventusers/discord/user/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                // TODO: Handle error state
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <h1 className="text-color-1">{profile.username}</h1>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image src="/assets/user-default.png" alt="User Profile Image" width={200} height={200} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <p className="text-color-2">{profile.bio}</p>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <UserEvents />
                </Box>
            </Grid>
        </Grid>
    );
}
