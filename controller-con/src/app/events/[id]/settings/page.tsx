import SettingsForm from "@/app/components/Events/settings/SettingsForm";
import PfHeader from "@/app/components/Header";
import { UserProvider } from "@/app/context/UserContext";
import {ThemeProvider} from "@mui/material";
import GlobalTheme from "@/app/components/Themes/GlobalTheme";
export default function SettingsPage() {
  
  return (
    <ThemeProvider theme={GlobalTheme}>
    <UserProvider>
    <PfHeader/>
    <SettingsForm/>
    </UserProvider>
    </ThemeProvider>
  );
}