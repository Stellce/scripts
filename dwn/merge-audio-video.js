const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const {argv} = process;
const [, , video, audio, dest] = argv;

ffmpeg()
	.input(audio)
	.input(video)
	.saveToFile(dest, "./temp");