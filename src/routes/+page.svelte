<!-- Setup -->
<script>
	import authRedirect from "./authRedirect"
	import { onMount } from 'svelte';
	onMount(() => {
		const currUrl = window.location.toString()
		if (currUrl.includes("code=")) {
			const urlParams = new URLSearchParams(window.location.search);
			const code = urlParams.get('code');
			sessionStorage.setItem("authToken", code);
			window.location = "/home"
		}
	});
</script>
<svelte:head>
	<title>Authorization</title>
	<meta name="description" content="Authorization page for Spotify Playlist Manager" />
</svelte:head>


<!-- Page definition -->
<section>
	<button on:click={authRedirect}>
		Log in
	</button>
</section>


<!-- Style configuration -->
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
