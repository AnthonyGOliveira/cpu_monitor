import colors from './colors.js'

export default function (color, value) {
    let result = color.length > 1 ? colors[color](value) : value;
    console.log(result);
}