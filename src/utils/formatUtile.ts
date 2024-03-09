export function formatTime(milliseconds: number): string {
  const totalSeconds: number = Math.floor(milliseconds / 1000);
  const hours: number = Math.floor(totalSeconds / 3600);
  const minutes: number = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds: number = totalSeconds % 60;

  const formattedHours: string = hours.toString().padStart(2, "0");
  const formattedMinutes: string = minutes.toString().padStart(2, "0");
  const formattedSeconds: string = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
