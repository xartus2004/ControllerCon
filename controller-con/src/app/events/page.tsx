import { Events } from "../components/Events/Events";
import { UserProvider } from "../context/UserContext";
import Header from "../components/Header";
export default function EventsPage() {
    return (
       <div>
            <UserProvider>
                <Header/>
                <Events/>
            </UserProvider>
        </div>
    );
  
}