import React from 'react';
import { css, scopeSelectors } from '../helpers';

import Layout from './Layout';

const componentId = 'blog';

const blogPosts = [
	{
		title: "Azuma: A Hidden Gem",
		id: "blog-post-1",
		description: "Azuma, Japan, offers a serene escape amidst its verdant landscapes and mountains. Its beauty shines through all four seasons, each offering a unique spectacle.",
		tags: ["Travel", "Nature", "Japan", "Seasons"],
		imgUrl: "blog-post-1.png",
	},
	{
		title: "The Cuisine of Azuma",
		id: "blog-post-2",
		description: "One cannot miss the unique culinary traditions of Azuma. The region boasts an array of locally sourced dishes, each an embodiment of its rich cultural heritage and natural bounty.",
		tags: ["Food", "Cuisine", "Cultural Heritage", "Japan"],
		imgUrl: "blog-post-2.png"
	},
	{
		title: "Exploring the Mountains of Azuma",
		id: "blog-post-3",
		description: "Hiking in the Azuma Mountains is a must-do for any nature enthusiast. The trek offers mesmerizing views of the landscape, which is rich in flora and fauna.",
		tags: ["Hiking", "Nature", "Adventure", "Flora and Fauna"],
		imgUrl: "blog-post-3.png"
	},
	{
		title: "Azuma: The Art Capital",
		id: "blog-post-4",
		description: "Azuma's vibrant arts scene is a reflection of its cultural richness. The region is known for its unique art forms, traditional crafts, and annual festivals.",
		tags: ["Art", "Culture", "Festivals", "Japan"],
		imgUrl: "blog-post-4.png"
	},
	{
		title: "Historical Landmarks in Azuma",
		id: "blog-post-5",
		description: "History enthusiasts will find plenty to explore in Azuma. From ancient temples to historic buildings, every landmark tells a story of its glorious past.",
		tags: ["History", "Landmarks", "Ancient Temples", "Architecture"],
		imgUrl: "blog-post-5.png"
	}
];


const blogCards = blogPosts.map((blogPost, i) => {
	const techButton = (
		<div className="tech-btn">
			See tags
			<span className="tech-used">{blogPost.tags.join(", ")}</span>
		</div>
	);
	const blogPostLink = { href: `/blog/${blogPost.id}` };

	return (
		<div className="work-item" key={i}>
			<a { ...blogPostLink }>
				<img className="work-image" src={`images/${blogPost.imgUrl}`} alt={blogPost.title} />
			</a>
			<div className="work-desc">
				<a { ...blogPostLink }><h3>{blogPost.title}</h3></a>
				<p>{blogPost.description}</p>
				<p>{blogPost.companyType}</p>
				<a { ...blogPostLink }>See details</a>
				{techButton}
			</div>
		</div>
	);
});

const Component = () => (
	<Layout.component>
		<article data-style-scope={componentId} data-router-view={componentId}>
			<h2>blog</h2>
			<div className="content">
				{ blogCards }
			</div>
		</article>
	</Layout.component>
);

const componentStyle = scopeSelectors(`[data-style-scope=${componentId}]`, css`
	.work-item {
		transition: 0.3s;
		width: 100%;
		border-radius: 5px;
		display: flex;
		margin-bottom: 20px;
		text-decoration: none;
		color: inherit;
	}

	.work-image {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 2px;
		background-color: #fff;
	}

	.work-desc {
		padding: 10px;
	}

	.work-desc h3 {
		margin: 0;
		margin-bottom: 10px;
	}

	.work-desc p {
		margin: 0;
		margin-bottom: 10px;
	}

	.tech-used {
		transition: height 300ms, opacity 200ms;
		display: block;
		position: relative;

		height: 0px;
		overflow: hidden;
		opacity: 0;
	}

	.tech-btn {
		cursor: pointer;
		user-select: none;
	}
`);

function hydrateButtons() {
	document.querySelectorAll('.tech-btn').forEach((el) => {
		const techUsed = el.querySelector('.tech-used');

		el.addEventListener('click', async (ev) => {
			if (!el.attributes['data-active']) {
				Object.assign(techUsed.style, {
					height: techUsed.scrollHeight + 'px',
					opacity: '1',
					overflow: '',
				});

				el.attributes['data-active'] = true;
			} else {

				Object.assign(techUsed.style, {
					height: '0px',
					opacity: '0',
					overflow: 'hidden',
				});

				el.attributes['data-active'] = false;
			}
		});
	});
}

// Export the /blog index page
export default {
	isPage: true,
	component: Component,
	id: componentId,
	style: componentStyle,
	clientData: {
		path: `/${componentId}`,
		script: hydrateButtons,
	},
}


// Make blog pages for each blog post
const blogPages = blogPosts.map((blogPost, i) => {
	const parentComponentId = componentId;
	const blogPageId = `${parentComponentId}--${blogPost.id}`;

	const BlogPageComponent = () => (
		<Layout.component>
			<article data-style-scope={parentComponentId} data-router-view={blogPageId}>
				<h2>blog</h2>
				<div className="content">
					<div className="work-item">
						<a href={blogPost.url}>
							<img className="work-image" src={`/images/${blogPost.imgUrl}`} alt={blogPost.title} />
						</a>
						<div className='work-desc'>
							<h3>{blogPost.title}</h3>
							<p>{blogPost.description}</p>
							<p>{blogPost.companyType}</p>
							<p>Tags: {blogPost.tags.join(", ")}</p>
						</div>
					</div>
				</div>
			</article>
		</Layout.component>
	);

	return {
		isPage: true,
		component: BlogPageComponent,
		id: blogPageId,
	};
});

export { blogPages };