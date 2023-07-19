const esbuild = require('esbuild');
const fs = require('node:fs');

const watch = process.argv.includes('watch');

main();

async function main () {
	await Promise.all([generateHTML(watch), generateBundle(watch)]);

	if (!watch) {
		process.exit(0);
	}
}

async function generateHTML(watch) {
	const context = await esbuild.context({
		entryPoints: ['./generator/generate.js'],
		bundle: true,
		platform: 'node',
		write: false,
		sourcemap: true,
	});

	async function rebuild() {
		const result = await context.rebuild();
		const generatePagesScript = result.outputFiles[0].text;

		eval(generatePagesScript);
	}
	await rebuild();
	console.log('Generated all pages')

	if (watch) {
		fs.watch('./generator', { recursive: true }, (eventType, filename) => {
			rebuild();
			console.log(`File ${filename} changed, updated pages`);
		});
	}
}

async function generateBundle() {
	const outfile = './public/scripts/bundle.js';

	const context = await esbuild.context({
		entryPoints: ['./src/main.js'],
		bundle: true,
		minify: true,
		sourcemap: true,
		outfile: outfile,
		define: {
		},
		loader: {
			'.png': 'file',
			'.glsl': 'text',
		},
		plugins: [
		],
		logLevel: 'error',
	});

	async function rebuild() {
		const result = await context.rebuild();
	}

	await rebuild();
	console.log('Generated bundle')

	if (watch) {
		fs.watch('./src/', { recursive: true }, (eventType, filename) => {
			console.log(`File ${filename} changed, updated bundle`);
			rebuild();
		});
	}
}
