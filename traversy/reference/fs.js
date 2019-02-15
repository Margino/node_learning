const fs   = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, '/test/'), { recursive: true }, err => {
    if (err) throw err;
    console.log('[App:] Folder created');
});


// write and appedt file
fs.writeFile(
    path.join(__dirname, '/test/', 'hello.txt'),
    'Hello World!',
    err => {
        if (err) throw err;
        console.log('[App:] File created');

        fs.appendFile(
            path.join(__dirname, '/test/', 'hello.txt'),
            ' I love Node.js',
            err => {
                if (err) throw err;
                console.log('[App:] Text added');

                fs.rename(
                    path.join(__dirname, '/test/', 'hello.txt'),
                    path.join(__dirname, '/test/', 'helloWorld.txt'),
                    err => {
                        if (err) throw err;
                        console.log('[App:] File renamed');

                        fs.readFile(path.join(__dirname, '/test/', 'helloWorld.txt'), 'utf8', (err, data) => {
                            if (err) throw new Error(`Can't find the file`, err);
                            console.log('Data: ', data);
                        })
                    }
                );
            }
        );
    }
);
