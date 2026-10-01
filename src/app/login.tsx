import { Placeholder } from "@/components/Placeholder";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  // replace() drops Login from the back stack, so Home has no way back to it
  return (
    <Placeholder
      title="Login"
      actionLabel="Log in (mock)"
      onAction={() => router.replace("/home")}
    />
  );
}
