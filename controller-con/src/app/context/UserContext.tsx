'use client'

import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext([{ DiscordUser: null }, { User: null }] as any);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState(null);
  const [discordUser, setDiscordUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data if token is present
    if (cookies.token) {
      fetchDiscordUser();
    } else {
      setLoading(false);
    }
  }, [loggedIn, cookies.token]);

  // Fetch Discord user information
  const fetchDiscordUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/discord/user", { credentials: "include" });
      const data = await response.json();
      
      if (data.error) {
        console.log(data.error);
      } else {
        setDiscordUser(data);
        if (data.id) {
          await createOrFetchUser(data.id, data.username);
        } else {
          setLoading(false);
          setLoggedIn(false);
        }
      }
    } catch (error) {
      console.error("Error fetching Discord user:", error);
      setLoading(false);
    }
  };

  // Create or fetch user based on Discord ID
  const createOrFetchUser = async (id: string, username: string) => {
    try {
      const createResponse = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, username }),
      });
      const createData = await createResponse.json();

      if (createData.error) {
        console.log(createData.error);
      } else {
        await fetchUserData(createData._id);
      }
    } catch (error) {
      console.error("Error creating/fetching user:", error);
      setLoading(false);
    }
  };

  // Fetch user data by ID
  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, { credentials: "include" });
      const data = await response.json();

      if (data.error) {
        console.log(data.error);
      } else {
        setUser(data);
        setLoggedIn(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  // Return null while loading
  if (loading) {
    return null;
  }

  // Provide user context to children components
  return <UserContext.Provider value={[user, discordUser, loggedIn, loading]}>{children}</UserContext.Provider>;
}
