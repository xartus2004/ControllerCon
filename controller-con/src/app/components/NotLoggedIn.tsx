import { useRouter } from "next/navigation";

export default function NotLoggedIn() {
const router = useRouter();
router.push("/")
}