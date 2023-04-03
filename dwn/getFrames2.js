const extractFrames = require('ffmpeg-extract-frames');
const {argv} = process;
let [, , input, outputFolder] = argv;

let offsets = [];

if(offsets.length > 0) {
	offsets = offsets.split(",").map(value => value * 1000);
	offsets.forEach(val => console.log(val));
} else {
	for(let i = 600_000; i < 10_800_000; i+=60_000) {
		if (i < 0) continue;
		offsets.push(i);
	}
	console.log(`Offsets: ${offsets}\n`);
}

const extractFrms = async function() {

	await extractFrames({
		input: input,
		output: outputFolder + '\\%i.png',
		offsets: offsets
	}).then((res) => {
		console.log("got");
		console.log(res);
	}).catch(e => {
		console.log(e);
		return 1;
	});

	// if (offset) {
	// 	await extractFrames({
	// 		input: 'InzOprog\\21.03-inzOprog.webm',
	// 		output: 'InzOprog\\21.03',
	// 		offset: offset
	// 	}).then((res, err) => {
	// 		console.log("got");
	// 		console.log(res);
	// 		console.log("done");
	// 	}).catch(e => {
	// 		console.log(e);
	// 	});
	// }
	console.log("Doing...");
	return 0;
}
extractFrms().then(r => console.log(r));

module.exports = { extractFrms };
