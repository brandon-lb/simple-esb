import fs from 'node:fs'
import path from 'node:path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Now from './components/Now'
import Lab from './components/Lab'
import Blog, { blogPages } from './components/Blog'

const serveDir = './public';
const stylePath = `${serveDir}/styles/index.css`;
const htmlPath = serveDir;
const ignoreFiles = [];
const clientScripts = new Map();

generateAll();
makeGitIgnore();

function generateAll() {
	generatePage(Home);
	generatePage(About);
	generatePage(Blog);
	generatePage(Now);
	generatePage(Lab);

	for (const BlogPage of blogPages) {
		generatePage(BlogPage);
	}

	generateStylesheet(Layout, Home, About, Blog, Lab);
	generateClientScript();
}

function generatePage(component) {

	if (!component.isPage || component.isLayout) {
		throw new Error('Component must be a page and not a layout');
	}

	const template = React.createElement(component.component);

	let templateString = ReactDOMServer.renderToString(template);

	// Replace all double dashes with a slash to denote a subdirectory
	const pagePath = component.id.replace(/--/g, '/');
	const pageFile = `${htmlPath}/${pagePath}.html`;

	writeFile(pageFile, templateString);


	if (component.clientData) {
		clientScripts.set(component.clientData.path, component.clientData.script);
	}
}

function generateStylesheet(...components) {
	const componentStyles = [];

	for (const component of components) {

		if (!component.style) {
			continue;
		}

		componentStyles.push(component.style);
	}

	const componentStylesString = componentStyles.join('').replace(/\t/g, '');

	writeFile(stylePath, componentStylesString, false);
}

function generateClientScript() {
	const clientScriptPath = `./src/generated/client.js`;

	const clientScript = `export default new Map([
			${Array.from(clientScripts).map(([path, script]) => `['${path}', ${script}]`).join(',\n')}
		]);`;

	writeFile(clientScriptPath, clientScript, false);
}

function writeFile(_path, _string, logIgnore = true) {

	const pathCreated = fs.mkdirSync(path.dirname(_path), { recursive: true });
	fs.writeFileSync(_path, _string);

	if (pathCreated) {
		ignoreFile(pathCreated);
	}

	if (logIgnore) {
		ignoreFile(_path);
	}

	function ignoreFile(path) {
		let localPath = path.replace(serveDir, '');

		// Remove the first slash
		if (localPath.startsWith('/')) {
			localPath = localPath.slice(1);
		}

		ignoreFiles.push(localPath);
	}
	// console.log(`Wrote ${_path}`);
}

function makeGitIgnore() {
	// Make a .gitignore file with the contents of gitIgnoreString within serveDir
	fs.writeFileSync(`${serveDir}/.gitignore`, ignoreFiles.join('\n'));
}