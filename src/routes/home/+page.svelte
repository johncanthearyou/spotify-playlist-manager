<!-- Setup -->
<script>
	import { onMount } from 'svelte';
	import getTopSongs from "./getTopSongs";

	var topSongs = []
	onMount(async () => {
		topSongs = await getTopSongs("short")
	})
</script>

<!-- Page definition -->
<section>
	<button
		on:click={() => {
			window.location = "/";
		}}>Log Out</button
	>
	<br />
	<h2>Top Songs</h2>
	<button
		on:click={async () => {
			topSongs = await getTopSongs("short");
		}}>Short Term</button
	>
	<button
		on:click={async () => {
			topSongs = await getTopSongs("medium");
		}}>Medium Term</button
	>
	<button
		on:click={async () => {
			topSongs = await getTopSongs("long");
		}}>Long Term</button
	>
	<ol>
		{#each topSongs as topSong}
			<li>{topSong.name} - {topSong.artists[0].name}</li>
		{/each}
	</ol>
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

	ol {
		padding: 0;
		border: 1px solid black;
	}

	ol li {
		padding: 8px 16px;
		border-bottom: 1px solid black;
	}

	ol li:last-child {
		border-bottom: none;
	}
</style>
