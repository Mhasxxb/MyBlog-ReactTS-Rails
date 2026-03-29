export function timeAgo(dateString: string): string {
  const now: Date = new Date();
  const past: Date = new Date(dateString);

  const seconds: number = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: { label: string; seconds: number }[] = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 }
  ];

  for (const interval of intervals) {
    const count: number = Math.floor(seconds / interval.seconds);

    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""}`;
    }
  }

  return "just now";
}
