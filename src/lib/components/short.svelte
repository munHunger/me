<script>
	export let title, from, to;
</script>

<div>
	<slot name="icon" />
	<div class="text-lg font-mono">{title}</div>
	<div class="{to ? 'text-green-100' : 'text-green-500'} text-xs font-mono">
		{from} -
		{#if to}{to}{/if}
	</div>

	<div class="font-sans"><slot /></div>
</div>
