const ffmpeg = require('ffmpeg');

(function getFrames(file = "D:\\dwn\\test\\30sec.mp4", dir = "D:\\dwn\\test") {
    try {
        let process = ffmpeg(file);
        process.then(video => {
            video.fnExtractFrameToJPG(dir, {
                every_n_frames: 1000
            }, () => {
                console.log("Finished");
            }, err => {
                console.log(err);
            });
        })
    } catch (e) {
        console.log(e);
    }
})()
module.exports = {}
