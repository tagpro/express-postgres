import * as fs from 'fs';
import * as shell from 'shelljs';

const dest = 'dist/src/views';

if (!fs.existsSync(dest)){
    fs.mkdirSync(dest);
}
// Copy all the view templates
shell.cp( '-R', 'src/views/**/*.pug', dest );

const publicDir = 'dist/src/public';
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

// Copy all remote assets
shell.cp( '-R', 'src/public/img', publicDir );
