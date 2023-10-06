const dayjs = require("dayjs");

const getTimeZone = () => {
  const date = new Date().getTimezoneOffset();
  const timezoneOffset = -date;
  const timezone = timezoneOffset / 60;
  // console.log(timezoneOffset); // 480
  // console.log(timezone); // 8
  return timezone;
};

const getLocationTime = (cutoff_time, targetTimezone) => {
  const timezone = getTimeZone();
  const timeZoneDistance = timezone - targetTimezone; // 16
  const displayTimespan = cutoff_time - timeZoneDistance * 60 * 60 * 1000;
  const displayDate = new Date(displayTimespan);
  // console.log(targetTimeSpan);
  return displayDate;
};

function formatTime(cutoffTime, timeZone) {
  // const { background, timeZone, title, cutoffTime } = packageData;
  const time_zone = Number(timeZone);
  const cutoff_time = Number(cutoffTime);
  // const locationTime = getLocationTime(cutoff_time, time_zone);
  const locationTime = cutoff_time;
  console.log("cutoff_time, time_zone", cutoff_time, time_zone);
  console.log("这里这里这里这里", locationTime);
  const cutoff_timeStr = dayjs(locationTime).format("YYYY-MM-DD HH:mm:ss");

  console.log(cutoff_timeStr);

  console.log("代码提示");

  // const { background: bg, opacity } = backgroundGetOpacity(background);
  // const formData: Record<string, any> = {
  //   background: bg,
  //   opacity,

  //   time_zone,
  //   title,
  //   thumbnailUri: packageData.thumbnailUri || "",
  // };
}

console.log(formatTime(1681851600000, 0));
