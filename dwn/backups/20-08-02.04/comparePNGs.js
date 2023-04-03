const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const comparePNGs = (imgPath1, imgPath2) => {
    const img1 = PNG.sync.read(fs.readFileSync(imgPath1));
    const img2 = PNG.sync.read(fs.readFileSync(imgPath2));
    const {width, height} = img1;
    const diff = new PNG({width, height});

    const difference = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

    // fs.writeFileSync('diff.png', PNG.sync.write(diff));

    const compatibility = 100 - difference * 100 /( width * height);
    // console.log(`${difference} pixels difference`);
    // console.log(`Compatibility: ${compatibility}%`);
    console.log(`Compatibility: ${Math.round(compatibility*100) / 100}%`);

    if (compatibility > 95) {
        return true;
    }
    return false;
}

module.exports = comparePNGs;
