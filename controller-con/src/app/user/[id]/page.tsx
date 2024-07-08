import Profile from "@/app/components/User/Users";
import PfHeader from "@/app/components/PfButton";
import { UserProvider } from "@/app/context/UserContext";

export default function UserPage() {
  return (
    <UserProvider>
      <PfHeader />
      <Profile />
    </UserProvider>
  );
}