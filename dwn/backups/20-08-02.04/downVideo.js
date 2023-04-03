const https = require('https');
const fs = require('fs');

const {argv} = process;
const [, , url, subject, date] = argv;

let path = subject + "/" + date + ".webm";

if(!fs.existsSync(subject)) fs.mkdirSync(subject);
// if(!fs.existsFolder(dateDir)) fs.mkdirSync(dateDir);

https.get(url, res => {
	const writeStream = fs.createWriteStream(path);
	res.pipe(writeStream);

	writeStream.on("finish", () => {
		writeStream.close();
		console.log(`Download completed\n\tPath: ${path}`)
	})
});