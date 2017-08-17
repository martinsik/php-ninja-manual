const fs = require('fs');
const sass = require('node-sass');

const files = {
    'template/browser.scss': ['template/browser.css', 'src/styles/browser.css', 'public/browser.css'],
    'template/index.scss': ['template/index.css', 'src/styles/index.css'],
    'template/search.scss': ['template/search.css', 'src/styles/search.css'],
    'template/content.scss': ['template/content.css', 'src/styles/content.css'],
    'template/font.scss': ['template/font.css', 'src/styles/font.css'],
    'template/autocomplete.scss': ['template/autocomplete.css', 'src/styles/autocomplete.css'],
    'template/examples.scss': ['template/examples.css', 'src/styles/examples.css'],
    'template/app.scss': ['template/app.css', 'src/styles/app.css'],
    'template/_global.scss': ['template/_global.css', 'src/styles/_global.css'],
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


