// Defaults to the current hour; passing one in makes it easy to test
export function getGreeting(hour: number = new Date().getHours()): string {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}
