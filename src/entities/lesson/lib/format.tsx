export function formatTimeRange(start: Date, end: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const startStr = start.toLocaleTimeString("ru-RU", options);
    const endStr = end.toLocaleTimeString("ru-RU", options);

    return `${startStr} – ${endStr}`;
  }
