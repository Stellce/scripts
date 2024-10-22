const extractFrames = require('ffmpeg-extract-frames');
let [, , input, output] = process.argv;

validateArgs();

const offsets = createOffsets();
const extractOptions = {
	input,
	output,
	offsets
}

console.log("Retrieving images...");

extractFrames(extractOptions)
	.then((res) => {
		console.log("Images have been successfully retrieved", res);
	}).catch(e => {
		console.error(e);
	});

function validateArgs() {
	if (!input) return console.log('Please, specify the folder of the video (first parameter)');
	output = output || input + '_offsets_1';
}

function createOffsets() {
	let offsets = [];
	const min = 60_000;
	const hour = 60*min;
	const videoLength = 2*hour

	for(let i = 5*min; i < videoLength; i+=min) offsets.push(i);
	console.log(`Offsets: ${offsets}\n`);
}