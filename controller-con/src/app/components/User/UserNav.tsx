import Link from "next/link";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import useLogout from "../Logout";

// UserNav component for rendering user-specific navigation elements
export default function UserNav() {
  // Get user information and login status from UserContext
  const [user, discordUser, loggedIn] = useContext(UserContext);
  // Custom hook for handling logout functionality
  const logout = useLogout();

  // Conditional rendering based on login status
  if (loggedIn) {
    return (
      <div>
        {/* User profile link with default avatar */}
        <Link href={`/user/${user._id}`}>
          <Image 
            src="/assets/user-default.png" 
            alt="User Profile" 
            width={60} 
            height={60} 
          />
        </Link>
        {/* Logout button */}
        <Link href="/">
          <Button className="nav-button" onClick={logout}>Logout</Button>
        </Link>
      </div>
    );
  }

  // If not logged in, display login button
  return (
    <div>
      {/* Discord OAuth login link */}
      <Link 
        className="nav-button" 
        href="https://discord.com/oauth2/authorize?client_id=1212963361063436319&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fdiscord%2Fredirect&scope=identify"
      >
        Login
      </Link>
    </div>
  );
}
