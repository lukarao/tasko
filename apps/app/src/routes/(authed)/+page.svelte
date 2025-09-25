<script>
	let { data } = $props();
	let { user } = $derived(data);
</script>

<h1>App</h1>
<p>Hello, {user?.user_metadata.display_name}</p>
