import React from 'react';

import Layout from './Layout';

const componentId = 'index';

const Component = () => (
	<Layout.component>
		<article data-router-view={componentId}>
			<h2>home</h2>
			<div className="content">
				<p>
					This example project is meant to be some sort of weird blog. On the /blog route, we have a list of cards highlighting each blog post. Each one has a "See details" button, which opens up a subpage of the blog and a "See tags" button, which dynamically expands to reveal a list of tags. This entire blog is implemented in `html/Blog.jsx`, which defines all the blog data, an entire page highlighting all the blog posts, defines subpages, with scoped style, and hydration in one file.
				</p>
			</div>
		</article>
	</Layout.component>
);

export default {
	isPage: true,
	component: Component,
	id: componentId,
}