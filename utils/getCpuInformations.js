import bytesToGigabytes from "../converter/bytesToGigabytes.js"
import secondsToHours from "../converter/secondsToHours.js"

export default function (os) {
  return {
    platform: os.platform(),
    version: os.version(),
    arch: os.arch(),
    userInfo: os.userInfo(),
    homedir: os.homedir(),
    release: os.release(),
    type: os.type(),
    totalmem: bytesToGigabytes(os.totalmem()),
    freemem: bytesToGigabytes(os.freemem()),
    uptime: secondsToHours(os.uptime()),
    loadavg: os.loadavg(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
  };
}
