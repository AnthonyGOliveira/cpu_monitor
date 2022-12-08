import os from "node:os"
import returnTotalUsage from "./utils/returnTotalUsage.js"
import returnTotalIdle from "./utils/returnTotalIdle.js"
import returnPercentOfUsage from "./utils/returnPercentOfUsage.js"
import showTemplate from "./template/showTemplate.js"
import getCpuInformations from "./utils/getCpuInformations.js"

let cpuCoresInitial,
  cpuCoresPostSecond,
  cpuCoresInitialTotal,
  cpuCoresPostSecondTotal,
  idleTotal,
  totalPercentOfUsage,
  informations;


setInterval(() => {
  setTimeout(() => {
    cpuCoresPostSecond = os.cpus();
    cpuCoresPostSecondTotal = returnTotalUsage(cpuCoresPostSecond);
    idleTotal = returnTotalIdle(cpuCoresInitial, cpuCoresPostSecond);
    totalPercentOfUsage = returnPercentOfUsage(
      cpuCoresInitialTotal,
      cpuCoresPostSecondTotal,
      idleTotal
    );
    console.clear();
    informations = getCpuInformations(os);
    showTemplate.line(cpuCoresPostSecond, totalPercentOfUsage, informations);
  }, 1000);
  cpuCoresInitial = os.cpus();
  cpuCoresInitialTotal = returnTotalUsage(cpuCoresInitial);
}, 2000);