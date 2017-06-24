const fs = require('fs');
const sass = require('node-sass');

const files = {
    'template/browser.scss': 'src/browser.css'
};

for (const file in files) {
    const targetFile = files[file];

    fs.watchFile(file, { interval: 1000 }, (curr, prev) => {
        sass.render({
            file: file,
        }, (err, result) => {
            if (err) {
                console.error('Unable to compile source file', file);
                return;
            }

            fs.writeFile(targetFile, result.css, err => {
                if (err) {
                    console.error('Unable to write compiled CSS to %s file', targetFile);
                } else {
                    console.log('File %s saved', targetFile);
                }
            });
        });
    });
}


