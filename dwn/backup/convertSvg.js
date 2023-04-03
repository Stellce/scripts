const convert = require('./svgToPng');

const {argv} = process;
const [, , dir] = argv;

convert(dir);