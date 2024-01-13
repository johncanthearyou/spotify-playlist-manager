<!-- Setup -->
<script>
	import { onMount } from "svelte";
	import { getUserPlaylists } from "../../scripts";

	var userPlaylists = [];
	onMount(async () => {
		userPlaylists = await getUserPlaylists("short");
	});
</script>

<!-- Page definition -->
<section>
	<h2>Home</h2>
	<h4>User Playlists</h4>
	<ol>
		{#each userPlaylists as userPlaylist}
			<li>{userPlaylist.name} - {userPlaylist.tracks.total} tracks</li>
		{/each}
	</ol>
</section>
