import {
  getDate,
  getDayDigits,
  getMonth,
  getTime,
  getTimeRange,
  getWeekday,
} from "./formatters";

test("getDate should return like november 28.", () => {
  expect(getDate(1638086400)).toBe("november 28.");
});

test("getTime should return like 09:00", () => {
  expect(getTime(1638086400)).toBe("09:00");
});

test("getMonth should return like nov", () => {
  expect(getMonth(1638086400)).toBe("nov");
});

test("getDayDigits should return like 28", () => {
  expect(getDayDigits(1638086400)).toBe("28");
});

test("getWeekday should return like vasárnap", () => {
  expect(getWeekday(1638086400)).toBe("vasárnap");
});

test("getTimeRange should return like 09:00 - 14:00", () => {
  expect(getTimeRange(1638086400, 1638104400)).toBe("09:00 - 14:00");
});
