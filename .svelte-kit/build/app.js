import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" />\n\t\t<link\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\"\n\t\t\trel=\"stylesheet\"\n\t\t/>\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-15869307.js",
			css: ["/./_app/assets/start-0826e215.css"],
			js: ["/./_app/start-15869307.js","/./_app/chunks/vendor-0d5e72c3.js","/./_app/chunks/preload-helper-9f12a5fd.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"1.jpg","size":77255,"type":"image/jpeg"},{"file":"2.jpg","size":4350832,"type":"image/jpeg"},{"file":"bg.jpg","size":1707431,"type":"image/jpeg"},{"file":"content.yaml","size":4698,"type":"text/yaml"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"icons/github.svg","size":822,"type":"image/svg+xml"},{"file":"icons/kambi.svg","size":1590,"type":"image/svg+xml"},{"file":"icons/linkedin.svg","size":610,"type":"image/svg+xml"},{"file":"icons/mpa.svg","size":1241,"type":"image/svg+xml"},{"file":"icons/stackoverflow.svg","size":441,"type":"image/svg+xml"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/experiences\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/experiences.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/skills\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/skills.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/experiences.svelte": () => import("../../src/routes/experiences.svelte"),"src/routes/skills.svelte": () => import("../../src/routes/skills.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-e499f8f1.js","css":["/./_app/assets/pages/__layout.svelte-49d00493.css"],"js":["/./_app/pages/__layout.svelte-e499f8f1.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/vendor-0d5e72c3.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-891ae76b.js","css":[],"js":["/./_app/error.svelte-891ae76b.js","/./_app/chunks/vendor-0d5e72c3.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-6f02a32d.js","css":["/./_app/assets/content-05b57a0b.css"],"js":["/./_app/pages/index.svelte-6f02a32d.js","/./_app/chunks/vendor-0d5e72c3.js","/./_app/chunks/content-c51a0429.js","/./_app/chunks/short-1b693a10.js"],"styles":null},"src/routes/experiences.svelte":{"entry":"/./_app/pages/experiences.svelte-3f41fbfe.js","css":["/./_app/assets/content-05b57a0b.css"],"js":["/./_app/pages/experiences.svelte-3f41fbfe.js","/./_app/chunks/vendor-0d5e72c3.js","/./_app/chunks/content-c51a0429.js","/./_app/chunks/short-1b693a10.js"],"styles":null},"src/routes/skills.svelte":{"entry":"/./_app/pages/skills.svelte-e74c0b63.js","css":["/./_app/assets/content-05b57a0b.css"],"js":["/./_app/pages/skills.svelte-e74c0b63.js","/./_app/chunks/vendor-0d5e72c3.js","/./_app/chunks/content-c51a0429.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-ba2c545a.js","css":["/./_app/assets/content-05b57a0b.css"],"js":["/./_app/pages/about.svelte-ba2c545a.js","/./_app/chunks/vendor-0d5e72c3.js","/./_app/chunks/content-c51a0429.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}