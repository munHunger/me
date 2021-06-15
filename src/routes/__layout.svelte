<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	import Me from '$lib/components/me.svelte';
	import { fade } from 'svelte/transition';
	export let key;

	import { onMount } from 'svelte';

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: '#434C5E'
			},
			links: {
				enable: true,
				color: '#4C566A'
			},
			move: {
				enable: true,
				speed: 0.2
			},
			number: {
				value: 300
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
</script>

<svelte:head>
	<meta name="description" 
    	content="Marcus Münger passionate developer from Uppsala Sweden. Currently most interested in svelte and node applications as well as devops" />
	<meta property="og:title" content="Marcus Münger" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://me.munhunger.com/1.jpg" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:description" 
		content="Marcus Münger passionate developer from Uppsala Sweden. Currently most interested in svelte and node applications as well as devops">
	<meta name="twitter:title" content="Marcus Münger">
	<meta name="twitter:image" content="https://me.munhunger.com/1.jpg">
</svelte:head>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	on:particlesInit={onParticlesInit}
/>

<div class="absolute flex content-center justify-center min-h-full min-w-full z-10">
	<div class="h-160 self-center flex">
		<Me />
		<div class="w-96 -ml-2 p-4 pl-6 bg-nord-2 rounded-r-lg my-1">
			<div class="relative">
				{#key key}
					<div
						in:fade={{ duration: 500, delay: 500 }}
						out:fade={{ duration: 500 }}
						class="absolute top-0 w-full h-full"
					>
						<slot />
					</div>
				{/key}
			</div>
		</div>
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	:global(body) {
		@apply bg-nord-0;
		@apply text-gray-50;
		/* background-color: #1d1e20; */
	}
	#tsparticles {
		@apply h-full w-full absolute z-0;
	}
</style>
