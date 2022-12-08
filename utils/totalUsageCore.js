export default function totalUsageCore(times) {
  let totalUsage = 0;
  for (let type in times) {
    if (type != "idle") {
      totalUsage += times[type];
    }
  }
  return totalUsage;
}