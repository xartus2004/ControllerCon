'use client'

//Deprecated code
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import EventForm from "./EventForm";

export default function EventCheck() {
  const [user, discordUser, loggedIn] = useContext(UserContext);
  if (loggedIn === true) {
    return <EventForm />;
  } else {
    return <div>Log in to create an event</div>;
  }
}