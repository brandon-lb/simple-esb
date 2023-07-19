import React from 'react';

import { css } from '../helpers';

const componentId = 'layout';

const Component = ({ children }) => (
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no viewport-fit=cover" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<link rel="stylesheet" href="/styles/index.css"></link>
			<title>SimpleESG</title>
		</head>
		<body>
			<noscript>
				<strong>This is the complete, fully accessible website. Nothing else to see here. And you're definitely not seeing this message because you have JavaScript disabled.</strong>
			</noscript>
			<nav>
				<header>
					<a href="/.">SimpleESG</a>
				</header>
				<div className="selection">
					<a href="/about">about</a>
					<a href="/blog">blog</a>
					<a href="/now">now</a>
					<a href="/lab">lab</a>
				</div>
			</nav>
			<main data-router-wrapper>
				{ children }
			</main>
			<script type="module" src="/scripts/bundle.js"></script>
		</body>
	</html>
);


const componentStyle = css`
	body {
		font-family: "Arial";
		position: absolute;
		top: 0;

		margin: 0;
		padding: 0;

		height: 100%;
		width: 100%;

		color: white;
		background-color: black;
	}

	header {
		top: 0;
		position: relative;
		margin-top: 0;
		padding: 20px;
		padding-bottom: 15px;
		font-weight: 600;
		background-color: transparent;
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	nav {
		font-weight: 400;
		font-size: 48px;
		position: fixed;
		color: transparent;
		user-select: none;
		color: rgb(240, 240, 240);
		top: 0;
		z-index: 1;
	}

	nav > div {
		margin: 0 20px;
	}

	.selection > a {
		display: block;
		cursor: pointer;
	}

	.selection > a:hover {
		color: red;
	}

	.content {
		margin: 4rem 2rem;
		font-size: 20px;
		backdrop-filter: blur(16px);
	}

	h2 {
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: unset;
	}

	a {
		color: unset;
	}

	article {
		font-weight: 300;
		margin: 2rem auto;
		width: 800px;
		height: 100%;
	}
`;


export default {
	isLayout: true,
	component: Component,
	id: componentId,
	style: componentStyle,
}