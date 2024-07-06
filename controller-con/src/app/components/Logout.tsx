import { useCookies } from "react-cookie";
//A function to remove the authentication token cookie
export default function useLogout() {
  const [cookies, removeCookie] = useCookies(["token"]);

  return () => {
    removeCookie("token", { path: "/" });
  };
}