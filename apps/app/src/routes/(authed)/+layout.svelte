<script lang="ts">
	import { goto } from '$app/navigation';

	let { data, children } = $props();
	let { supabase } = $derived(data);

	async function logOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		} else {
			goto('/login');
		}
	}
</script>

<button onclick={logOut}>Log out</button>

{@render children?.()}
