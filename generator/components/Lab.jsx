import React from 'react';
import { css, scopeSelectors } from '../helpers';

import Layout from './Layout';

const componentId = 'lab';

const Component = () => (
	<Layout.component>
		<article data-style-scope={componentId} data-router-view={componentId}>
			<h2>lab</h2>
			<div className="content">
				<p>ChatGPT lulz: Welcome to the Lab, our playground for experimental web and marketing content. This is where we push boundaries, innovate, and transform our wildest ideas into reality.</p>

				<p>One of our most recent experiments is with the 'Azuma' web framework. This minimal, lightweight framework leverages ESBuild and simple JSX to offer a fast, efficient, and enjoyable development experience. Its simplicity doesn't compromise its capability – it offers high performance and easy customization, making it a versatile tool in our developer toolkit.</p>

				<p>We've recently integrated taxi.js into our workflow. Taxi.js provides a simple, powerful routing system that allows us to build single-page applications with ease. The benefits are already showing with more interactive and seamless user experiences.</p>

				<p>But we're not stopping at efficient scripting and seamless routing. We're also delving into the third dimension with three.js. This cross-browser JavaScript library/API is allowing us to create and display animated 3D graphics within any compatible web browser. It's adding a new level of dynamism and depth to our creations.</p>

				<p>Our Lab is the heart of our innovation.It's where we explore the possibilities of the web and rethink how we connect with our users. Stay tuned to see what comes out of our Lab next!</p>
			</div>
		</article>
	</Layout.component>
);

const componentStyle = scopeSelectors(`[data-style-scope=${componentId}]`, css`
	p {
		color: black;
		margin: 20px;
	}

	.content {
		background-color: white;
		padding: 20px;
		border-radius: 10px;
	}
`);


export default {
	isPage: true,
	component: Component,
	id: componentId,
	style: componentStyle,
}