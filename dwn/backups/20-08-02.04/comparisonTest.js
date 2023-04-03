const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const compare = () => {
    const img1 = PNG.sync.read(fs.readFileSync('.\\InzOprog\\21.03\\Untitledpng.png'));
    const img2 = PNG.sync.read(fs.readFileSync('.\\InzOprog\\21.03\\Untitled-dsd.png'));
    const {width, height} = img1;
    const diff = new PNG({width, height});

    const difference = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

    // fs.writeFileSync('diff.png', PNG.sync.write(diff));

    const compatibility = 100 - difference * 100 /( width * height);
    console.log(`${difference} pixels difference`);
    console.log(`Compatibility: ${compatibility}%`);

}

compare();

module.exports = compare;
