'use client'

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useContext } from "react";
import PfButton from "../PfButton";
import { UserContext } from "../../context/UserContext";

export default function ApplyButton({ creator }: { creator: string }) {
  const router = useRouter();
  const { id } = useParams();
  const { user, discordUser, loggedIn, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return <div>Log in to apply</div>;
  }

  if (user && creator === user._id) {
    return (
      <PfButton 
        text="Settings" 
        action={() => router.push(`/events/${id}/settings`)} 
      />
    );
  }

  return (
    <PfButton
      text="Apply"
      action={() => router.push(`/events/${id}/apply`)}
    />
  );
}
