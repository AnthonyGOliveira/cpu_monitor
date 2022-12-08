export default function bytesToGigabytes(value) {
  let result = value / 1024 / 1024 / 1024;
  return parseFloat(result.toFixed(2));
}
