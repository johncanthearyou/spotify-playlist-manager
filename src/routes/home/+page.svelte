<!-- Setup -->
<script>
	import getAccessToken from "./getAccessToken"
	import { onMount } from 'svelte';
	onMount(() => {
        const authToken = sessionStorage.getItem("authToken")
        if (authToken === null || authToken == "") {
            alert("You are not logged in! Rerouting to authorization page...")
            window.location = "/"
        }
	});
</script>


<!-- Page definition -->
<section>
    <button on:click={() => { window.location="/"}}>Log Out</button>
    <br />
    <button on:click={getAccessToken}>Get Access Token</button>
    <br />
    home!
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