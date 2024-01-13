<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const currUrl = window.location.toString()
		if (currUrl.includes("code=")) {
			const authToken = new URLSearchParams(window.location.search).get('code');
			sessionStorage.setItem("authToken", authToken);
			window.location = "/home"
		}
	});
</script>

<svelte:head>
	<title>spotify-playlist-manager</title>
</svelte:head>
<section>
	<!-- TODO: Put an overview of the app's features -->
	<h1>Welcome to `spotify-playlist-manager`</h1>
	<p>Please log in above</p>
</section>