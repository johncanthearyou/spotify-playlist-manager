<!-- Setup -->
<script>
	import { isLoggedIn, loginRedirect, logoutRedirect } from "../scripts";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	var loggedIn = false;
	onMount(() => {
		loggedIn = isLoggedIn();
		if (!loggedIn && $page.url.pathname != "/") {
			alert("You are not logged in! Redirecting to login page...");
			logoutRedirect();
		}
	});
</script>

<!-- Page Definition -->
<div>
	<header>
		<span align="left">Spotify Playlist Manager</span>
		{#if !loggedIn}
			<button on:click={loginRedirect}>Log in</button>
			{:else}
			<button on:click={() => window.location = "/home"}>/home</button>
			<button on:click={() => window.location = "/tracks"}>/tracks</button>
			<button on:click={() => window.location = "/playlists"}>/playlists</button>
			<button on:click={logoutRedirect}>Log Out</button>
		{/if}
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<span>
			visit <a href="https://github.com/johncanthearyou"
				>github/johncanthearyou</a
			> to see more of my portfolio
		</span>
	</footer>
</div>

<style>
	a {
		color: mediumspringgreen;
	}

	button {
		background-color: mintcream;
		color: indigo;
	}

	header {
		position: fixed;
		width: 100%;
		left: 0px;
		top: 0px;
		padding: 5px;
		text-align: center;
		background: indigo;
		color: mintcream;
		font-size: 25px;
	}

	main {
		position: fixed;
		width: 100%;
		left: 10px; /* Offset 10px to the left for aesthetics */
		top: 30px; /* 25px font + 5px padding = 30px from top */
		bottom: 24px; /* 20px font + 4px padding = 24px from bottom */
		overflow: auto;
	}
	
	footer {
		position: fixed;
		width: 100%;
		left: 0px;
		bottom: 0px;
		padding: 4px;
		text-align: center;
		background: indigo;
		color: mintcream;
		font-size: 20px;
	}
</style>
