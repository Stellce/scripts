//this app should sort sentences of the text by their lengths

console.log('starting...');

let text = ``;
function sortSentences(text: string) {
    return text.split('. ').sort((a, b) => {
        return a.length - b.length;
    });
}

console.log(
    sortSentences(text)
);