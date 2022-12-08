import totalUsageCore from "./totalUsageCore.js"
function returnTotalUsage(cpu) {
  let totalUsage = [];
  cpu.forEach((core) => {
    let total = totalUsageCore(core.times);
    totalUsage.push(total);
  });

  return totalUsage;
};

export default returnTotalUsage