const fs = require('fs');
const sass = require('node-sass');

const files = {
    'template/browser.scss': ['template/browser.css', 'src/browser.css'],
    'template/index.scss': ['template/index.css', 'src/index.css'],
    'template/search.scss': ['template/search.css', 'src/search.css'],
    'template/content.scss': ['template/content.css', 'src/content.css'],
    'template/font.scss': ['template/font.css', 'src/font.css'],
    'template/autocomplete.scss': ['template/autocomplete.css', 'src/autocomplete.css'],
};

function writeCSS(targetFile, data) {
    fs.writeFile(targetFile, data, err => {
        if (err) {
            console.error('Unable to write compiled CSS to %s file', targetFile);
        } else {
            console.log('File %s saved', targetFile);
        }
    });
}

function renderCSS(file, targetFiles) {
    sass.render({
        'file': file,
    }, (err, result) => {
        if (err) {
            console.error('Unable to compile source file', file);
            return;
        }

        if (Array.isArray(targetFiles)) {
            targetFiles.forEach(f => writeCSS(f, result.css));
        } else {
            writeCSS(targetFiles, result.css);
        }
    });
}

for (const file in files) {
    const targetFiles = files[file];

    renderCSS(file, targetFiles);

    fs.watchFile(file, { interval: 500 }, (curr, prev) => {
        renderCSS(file, targetFiles);
    });
}


