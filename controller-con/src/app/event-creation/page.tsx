import EventCheck from "../components/Events/EventCheck";
import PfHeader from "../components/Header";
import { UserProvider } from "../context/UserContext";
import EventCreationForm from "../components/Events/EventCreationForm";
import {ThemeProvider} from "@mui/material";
import GlobalTheme from "@/app/components/Themes/GlobalTheme";
export default function EventCreation() {
  return (
    <ThemeProvider theme={GlobalTheme}>
    <UserProvider>
      <PfHeader />
      <EventCreationForm/>
    </UserProvider>
    </ThemeProvider>
  );
}