function createFormat(options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("hu-HU", {
    timeZone: "Europe/Budapest",
    ...options,
  });
}

export const dateFormat = createFormat({
  month: "long",
  day: "numeric",
});

export const timeFormat = createFormat({
  hour: "2-digit",
  minute: "numeric",
});

export const monthFormat = createFormat({
  month: "short",
});

export const dayDigitsFormat = createFormat({
  day: "2-digit",
});

export const weekdayFormat = createFormat({
  weekday: "long",
});

export const minuteFormat = createFormat({
  hour: "2-digit",
  minute: "numeric",
});
