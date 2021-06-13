<script>
	export let singleCol;
</script>

<div class="grid {singleCol ? 'grid-cols-1' : 'grid-cols-2'} gap-2 overflow-y-auto max-h-96">
	<slot />
</div>

<style lang="postcss">
	/* width */
	::-webkit-scrollbar {
		@apply w-1;
	}

	/* Track */
	::-webkit-scrollbar-track {
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-nord-3 rounded-sm transition-all shadow-inner;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		@apply shadow-md;
	}
</style>
