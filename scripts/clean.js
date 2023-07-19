const fs = require('node:fs');

cleanHtml();

function cleanHtml() {
	const serveDir = './public';

	// Read gitignore file and delete all files listed within it:
	const gitIgnore = fs.readFileSync(`${serveDir}/.gitignore`, 'utf8');
	const gitIgnoreFiles = gitIgnore.split('\n');

	for (const file of gitIgnoreFiles) {
		fs.rmSync(`${serveDir}/${file}`, { recursive: true });
		console.log(`Deleted ${serveDir}/${file}`);
	}
}