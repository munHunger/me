<script>
	const roles = [
		'Developer',
		'Backend Developer',
		'Frontend Developer',
		'DevOps Engineer',
		'Security Advisor',
		'Architect'
	];
	let index = 0;
	let role = roles[index];

	setTimeout(carousel, 3000);
	function carousel() {
		transition();
		setTimeout(carousel, 3000);
	}

	function transition() {
		let nextIndex = (index + 1) % roles.length;
		let next = roles[nextIndex];
		if (role.length > 0 && !next.startsWith(role)) role = role.substring(0, role.length - 1);
		else role = role + next[role.length];
		if (role === next) index = (index + 1) % roles.length;
		else if (role.length === 0) transition();
		else setTimeout(transition, 20);
	}
</script>

<div
	class="bg-nord-1 p-20 rounded-lg inline-flex flex-col items-center overflow-hidden relative shadow-md"
>
	<img class="absolute left-0 top-0 w-full z-10 border-b-2 border-nord-2" src="/bg.jpg" alt="Marcus Münger" />
	<div class="z-20">
		<img class="w-40 rounded-full ring ring-nord-1" src="/1.jpg" alt="Marcus Münger" />
	</div>

	<h1 class="text-3xl mt-6">Marcus Münger</h1>

	<div class="text-green-500 text-lg">{role}</div>

	<div class="mt-8">
		<a href="/experiences">work</a>
		<a href="/">projects</a>
		<a href="/skills">skills</a>
		<a href="/about">about</a>
	</div>
	<div class="">
		<a href="https://github.com/munHunger/" class="text-gray-50 fill-current">
			<svg
				class="w-4 h-4 hover:text-green-500 transition inline m-1"
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>GitHub</title>
				<path
					d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
				/>
			</svg>
		</a>

		<a
			href="https://stackoverflow.com/users/3566441/munhunger?tab=profile"
			class="text-gray-50 fill-current"
		>
			<svg
				class="w-4 h-4 hover:text-green-500 transition inline m-1"
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Stack Overflow</title><path
					d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"
				/>
			</svg>
		</a>
		<a
			href="https://www.linkedin.com/in/marcus-m%C3%BCnger-034398123/"
			class="text-gray-50 fill-current"
		>
			<svg
				class="w-4 h-4 hover:text-green-500 transition inline m-1"
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>LinkedIn</title><path
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
		</a>
	</div>
</div>

<style global lang="postcss">
	a {
		@apply mx-2;
	}
</style>
