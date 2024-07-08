import PfHeader from "@/app/components/Header"
import { UserProvider } from "@/app/context/UserContext";
import ApplicationForm from "@/app/components/Events/ApplicationForm";

export default function ApplicationPage(){
    return (
        <div>
            <UserProvider>
            <PfHeader/>
            <ApplicationForm/>
            </UserProvider>
        </div>
    );
}