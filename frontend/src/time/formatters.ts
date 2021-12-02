function createFormat(options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("hu-HU", {
    timeZone: "Europe/Budapest",
    ...options,
  });
}

function createFormatters(
  options: Intl.DateTimeFormatOptions,
  postProcessor: (result: string) => string = (result) => result
) {
  const format = createFormat(options);

  return (timestampSeconds: number) =>
    postProcessor(format.format(timestampSeconds * 1000));
}

export const getDate = createFormatters({
  month: "long",
  day: "numeric",
});

export const getTime = createFormatters({
  hour: "2-digit",
  minute: "numeric",
});

export const getMonth = createFormatters(
  {
    month: "short",
  },
  (month) => month.substring(0, 3)
);

export const getDayDigits = createFormatters({
  day: "2-digit",
});

export const getWeekday = createFormatters({
  weekday: "long",
});

export const getTimeRange = (opening: number, closing: number) =>
  `${getTime(opening)} - ${getTime(closing)}`;
