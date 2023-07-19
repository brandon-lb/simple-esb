const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const mimeTypes = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpg',
};

const server = http.createServer((req, res) => {
	let filePath = `./public/${req.url}`;

	if (req.url === '/') {
		filePath += 'index.html';
	}

	// If URL has no file extension, assume it's an HTML file
	else if (!path.extname(req.url)) {
		filePath += '.html';
	}

	const ext = path.extname(filePath);
	const contentType = mimeTypes[ext] || 'text/html';

	fs.readFile(filePath, (err, content) => {
		if (err) {
			res.writeHead(404);
			res.end(`Error 404: ${filePath} not found`);
		} else {
			res.writeHead(200, {
				'Content-Type': contentType,
				'Cache-Control': 'no-cache, no-store, must-revalidate'
			});
			res.end(content);
		}
	});
});

const argv = process.argv.slice(2);
const portArg = argv.find(arg => arg.startsWith('--port='));
const PORT = portArg ? portArg.split('=')[1] : 3000;

const hostArg = argv.find(arg => arg.startsWith('--host='));
const HOST = hostArg ? hostArg.split('=')[1] : 'localhost';

server.listen(PORT, HOST, () => {
	console.log(`Server running on port ${HOST}:${PORT}`);
});