import view from "../view/view.js";

export default {
  line: function (cpu, percentOfUsage, informations) {
    view(
        "",
        "\n\n\n\n     ======================================================================================================================"
      );
    view("blueLight", `     =\n     =  MODEL OF CPU:  ${cpu[0].model} \n     =  ARCH: ${informations.arch}\n     =`);
    view("", `     =  PLATFORM: ${informations.platform} \n     =  VERSION: ${informations.version} \n     =  RELEASE: ${informations.release}\n     =  UPTIME: ${informations.uptime} h\n     =`)
    view("pink", `     =  TOTAL MEMORY: ${informations.totalmem} Gb \n     =  FREE MEMORY: ${informations.freemem} Gb \n     =  HOST NAME: ${informations.hostname}\n     =`)
    cpu.forEach((core, index) => {
      let resultGeneratePercent = this.generatePercent(percentOfUsage[index]);
      view(
        "",
        "     ----------------------------------------------------------------------------------------------------------------------"
      );
      console.log("     =\n     =  SPEED: ", core.speed);
        view(
          resultGeneratePercent[0],
          `     =  CORE ${index + 1}: ${resultGeneratePercent[1]}\n     =`
        );
    });
    view(
        "",
        "     ======================================================================================================================"
      );
      view("", "     PRESS (CTRL + C) TO EXIT")
  },
  generatePercent: function (quantity) {
    let color = "";
    let lineString = this.quantityToLineGraph(quantity);
    if (quantity <= 30) {
      color = "green";
    } else if (quantity > 30 && quantity <= 70) {
      color = "yellow";
    } else {
      color = "red";
    }
    return [color, lineString];
  },
  quantityToLineGraph(quantity) {
    let lineString = "";
    while (lineString.length < 100) {
      lineString += lineString.length < quantity ? '|' : ' ';
    }
    lineString += quantity + ' %';
    return lineString;
  },
};
