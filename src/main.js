import gsap from 'gsap';
import Highway from './vendor/highway';

import client from './generated/client';

run();

// https://highway.js.org

function run() {
	gsap.from('nav header, nav div a', {
		x: -6,
		y: -6,
		rotateY: 20,
		opacity: 0,
		duration: .5,
		stagger: .2,
		ease: 'power2.out'
	});

	// Looks up any defined client script for the current page and runs it. Hydration in this case.
	const clientScript = client.get(location.pathname);
	clientScript?.();


	class BaseTransition extends Highway.Transition {
		out({ from, trigger, done }) {

			gsap.to(from, {
				opacity: 0,
				duration: .25,
				x: 6,
				onComplete: done,
			});
		}

		in({ from, to, trigger, done }) {

			from.remove();

			gsap.from(to.querySelectorAll('p, img'), {
				opacity: 0,
				stagger: .05,
				x: -6,
			});

			gsap.from(to, {
				opacity: 0,
				duration: .25,
				x: -6,
				onComplete: done
			});
		}
	};

	const F = new Highway.Core( {
		transitions: {
			default: BaseTransition
		}
	});

	F.on('NAVIGATE_IN', ({ to, trigger, location }) => {

		// Looks up any defined client script for the current page and runs it. Hydration in this case.
		const clientScript = client.get(location.pathname);
		clientScript?.()
	});

	F.on('NAVIGATE_OUT', ({ from, trigger, location }) => {
	});

	F.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
	});
}

export default run;
