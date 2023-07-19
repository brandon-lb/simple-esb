import React from 'react';

import Layout from './Layout';

const componentId = 'now';

const Component = () => (
	<Layout.component>
		<article data-router-view={componentId}>
			<h2>now</h2>

			<div className="content">
				<p>Welcome to our 'Now' page, your hub for everything that's going on this summer with us. As the days get longer and the sun shines brighter, we're turning up the heat with exciting developments and fresh ideas.</p>

				<p>Our team is enjoying the season and working diligently to bring you the best of our offerings. There's a vibe of creative energy in the air as our developers continue to experiment, our designers explore new aesthetics, and our marketers strategize on innovative campaigns.</p>

				<p>This summer, we're focused on advancing our knowledge, improving our products, and engaging with our fantastic community. We're excited about what's around the corner and we look forward to sharing our journey with you. So, grab your favorite summer drink, find a cozy spot, and dive in!</p>
			</div>
		</article>
	</Layout.component>
);


export default {
	isPage: true,
	component: Component,
	id: componentId,
}