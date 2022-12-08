export default function secondsToHours(value) {
  let result = value / 60 / 60;
  return parseFloat(result.toFixed(2));
}
