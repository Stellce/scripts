const https = require("https");
const fs = require("fs");

const { argv } = process;
const [, , url, from, to, subject, date] = argv;

if (url === undefined) {
    console.log(`The first argument ('url') is missing`);
    return;
}

if (date === undefined) {
    console.log(`The third argument ('date') is missing`);
    return;
}

// if (path === undefined) {
//     console.log(`The second argument ('path') is missing`);
// }

for (let i = from; i <= to; i++) {

    let subjDir = subject;
    if(!fs.existsSync(subjDir)) fs.mkdirSync(subjDir);

    let dateDir = subjDir + "/" + date;
    if(!fs.existsSync(dateDir)) fs.mkdirSync(dateDir);

    let path =  dateDir + "/img-" + i + ".png";

    urlNorm = url + "/slide-" + i + ".png";
    try{
        console.log(`Url: ${urlNorm}`);
        https.get(urlNorm, (res) => {
            const writeStream = fs.createWriteStream(path);
            res.pipe(writeStream);

            writeStream.on("finish", () => {
                writeStream.close();
                console.log(`Download slide-${i} completed`);
            })
        });
    } catch (e) {
        console.log(`File num: ${i} error`);
    }
}


