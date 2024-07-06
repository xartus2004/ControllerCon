"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, Grid } from "@mui/material";
import { UserContext } from "../context/UserContext";
import UserNav from "./User/UserNav";

/**
 * PfHeader component
 * Renders the header for the website, including logo and navigation links
 */
export default function PfHeader() {
  // Extract user and discordUser from UserContext
  const [user, discordUser] = useContext(UserContext);

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#00000019", height: "150px" }}
    >
      <Grid
        container
        spacing={2}
        height="150px"
        marginTop={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Logo Section */}
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="/">
            <Image
              src="/assets/PFLogo2.png"
              alt="Party Finder Logo"
              width={100}
              height={100}
              className="auto-margins"
            />
          </Link>
        </Grid>

        {/* Navigation Section */}
        <Grid item xs={4}>
          <Grid 
            container 
            spacing={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Event Creation Link */}
            <Grid item xs={4}>
              <Box>
                <Link className="nav-button" href="/event-creation">
                  Event Creation
                </Link>
              </Box>
            </Grid>

            {/* Event List Link */}
            <Grid item xs={4}>
              <Box>
                <Link className="nav-button" href="/events">
                  Event List
                </Link>
              </Box>
            </Grid>

            {/* User Navigation Component */}
            <Grid item xs={4}>
              <UserNav />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
