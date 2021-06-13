<script>
	import Content from '$lib/components/content.svelte';
	import Short from '$lib/components/short.svelte';
</script>

<svelte:head><title>Marcus Münger</title></svelte:head>

<Content>
	<Short
		{...{
			title: 'auth',
			from: '2021',
			to: '2021'
		}}
	>
		A fortnight project for creating an OAuth server for managing users and services in my personal
		apps
	</Short>

	<Short
		{...{
			title: 'effidox',
			from: '2021',
			to: null
		}}
	>
		A complete Q&A system joined with a traditional wiki. Supporting a custom markdown subset
		language with working compiler
	</Short>
	<Short
		{...{
			title: 'soft-sync',
			from: '2020',
			to: '2020'
		}}
	>
		Custom linux package manager and configuration helper for easy linux rice
	</Short>
	<Short
		{...{
			title: 'otto',
			from: '2020',
			to: '2020'
		}}
	>
		Service management system handlig deployments and automatic service updates
	</Short>
	<Short
		{...{
			title: 'blitzbauen',
			from: '2020',
			to: '2020'
		}}
	>
		Working build server for a CI/CD pipeline
	</Short>
	<Short
		{...{
			title: 'datason',
			from: '2019',
			to: '2020'
		}}
	>
		A joke database simplifying system architecture by saving entries as json files in a folder
		structure
	</Short>
	<Short
		{...{
			title: 'wunderbaren',
			from: '2018',
			to: null
		}}
	>
		A bar inventory and management system with user management and RFID card payments
	</Short>
</Content>
