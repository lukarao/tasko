<script lang="ts">
	import '../app.css';
	import logo from '$shared/assets/logo.svg';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Tasko</title>
	<link rel="icon" href={logo} sizes="any" type="image/svg+xml" />
	<link rel="icon" href="/favicon.ico" sizes="48x48" />
	<link
		rel="icon"
		href="/favicon-white.ico"
		sizes="48x48"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

{@render children?.()}
