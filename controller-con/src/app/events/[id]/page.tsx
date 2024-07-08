import Header from "../../components/Header";
import { Event } from "@/app/components/Events/Events";
import { UserProvider } from "@/app/context/UserContext";
export default function EventPage() {
  return (
    <UserProvider>
      <Header />
      <Event/>
    </UserProvider>
  );
}
