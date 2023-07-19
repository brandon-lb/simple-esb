import React from 'react';

import Layout from './Layout';

const componentId = 'about';

const Component = () => (
	<Layout.component>
		<article data-router-view={componentId}>
			<h2>about</h2>
			<div className="content">
				<p>SimpleESG stands for simple esbuild static generator.</p>

				<p>
					The Kantō region (関東地方, Kantō-chihō, IPA: [ka(ꜜ)ntoː tɕiꜜhoː]) is a geographical region of Honshu, the largest island of Japan.[3] In a common definition, the region includes the Greater Tokyo Area and encompasses seven prefectures: Gunma, Tochigi, Ibaraki, Saitama, Tokyo, Chiba, and Kanagawa. Slightly more than 45 percent of the land area within its boundaries is the Kantō Plain. The rest consists of the hills and mountains that form land borders with other regions of Japan.
				</p>

				<p>
					As the Kantō region contains Tokyo, the capital and largest city of Japan, the region is considered the center of Japan's politics and economy. According to the official census on October 1, 2010, by the Statistics Bureau of Japan, the population was 42,607,376,[4] amounting to approximately one third of the total population of Japan.
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