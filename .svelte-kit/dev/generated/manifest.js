const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/experiences.svelte"),
	() => import("../../../src/routes/skills.svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/experiences.svelte
	[/^\/experiences\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/skills.svelte
	[/^\/skills\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];