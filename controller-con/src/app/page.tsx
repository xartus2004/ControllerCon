import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { Grid } from "@mui/material";
export default function Home() {
  return (
    <UserProvider>
  <Header/>
  <Grid container direction="row" spacing={2} display="flex" justifyContent="center" alignItems="center">
    <Grid item xs={2}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Image src="/assets/PFLogo2.png" alt="Party Finder Logo" width={400} height={400} />
      </div>
      </Grid>
  <Grid item xs={12}>
  <h1 className="text-color-1">Welcome to Party Finder</h1>
  </Grid>
  <Grid item xs={3}>
    <p className="text-color-2" style={{textAlign:"center"}}>Party Finder is an independent project designed to support community gaming and eSports events.</p>
    <p className="text-color-2" style={{textAlign:"center"}}>We are a community driven platform that allows users to create and join events for their favorite games.</p>
  </Grid>
  </Grid>
  </UserProvider>
  );
}
