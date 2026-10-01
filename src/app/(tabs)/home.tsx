import { Placeholder } from "@/components/Placeholder";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <Placeholder
      title="Home"
      actionLabel="Open Form"
      onAction={() => router.push("/form")}
    />
  );
}
