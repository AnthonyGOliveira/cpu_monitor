export default function returnPercentOfUsage(
  cpuInitialTotal,
  cpuPostSecondTotal,
  totalIdle
) {
  let percentOfUsage = [];
  cpuPostSecondTotal.forEach((totalCore, index) => {
    let percent = Math.round(
      ((totalCore - cpuInitialTotal[index]) * 100) / totalIdle[index]
    );
    percentOfUsage.push(percent);
  });
  return percentOfUsage;
};
