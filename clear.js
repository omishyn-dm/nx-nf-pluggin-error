const fs = require('fs');
const path = require('path');
const os = require('os');
const cp = require('child_process');
const isWindows = os.platform() === 'win32';
let output;
try {
	output = require('@nx/workspace').output;
} catch (e) {
	console.warn(
		'Angular CLI could not be clear caching. Please ensure @nx/workspace is installed.'
	);
	process.exit(0);
}

function clear() {
	try {
    const pathNF = path.join(__dirname, 'node_modules/.cache/native-federation');

		if (isWindows) {
      cp.execSync(`rmdir /s /q ${pathNF}`);
		} else {
			cp.execSync(`rm --recursive -f ./node_modules/.cache/*`);
		}
	} catch (e) {
		output.error({title: 'Unable to clear cache:' + e.message});
		throw e;
	}
}

try {
  clear();
	output.log({title: 'Angular CLI has been clear caching.'});
} catch (e) {
	output.error({title: 'Decoration of the Angular CLI did not clear successfully'});
}
