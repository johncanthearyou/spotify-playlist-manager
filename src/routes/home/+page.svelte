<!-- Setup -->
<script>
	import { onMount } from "svelte";
	import { getTopSongs } from "../../scripts";

	var times = ["short", "medium", "long"];
	var topSongs = [];
	onMount(async () => {
		topSongs = await getTopSongs("short");
	});
</script>

<!-- Page definition -->
<section>
	<h2>Home</h2>
	<h4>Top Songs</h4>
	{#each times as time}
		<button
			on:click={async () => {
				topSongs = await getTopSongs(time);
			}}>{time} term</button
		>
	{/each}
	<ol>
		{#each topSongs as topSong}
			<li>"<i>{topSong.name}</i>" by {topSong.artists[0].name}</li>
		{/each}
	</ol>
</section>
