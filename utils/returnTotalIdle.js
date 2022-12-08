export default function returnTotalIdle(cpuInitial, cpuPostSecond) {
    let totalIdle = [];
    cpuPostSecond.forEach((core, index) => {
      let total = core.times.idle - cpuInitial[index].times.idle;
      totalIdle.push(total);
    });
  
    return totalIdle;
  }