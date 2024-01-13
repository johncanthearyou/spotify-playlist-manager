<!-- Setup -->
<script>
	import { onMount } from "svelte";
	import { getUserTracks } from "../../scripts";

	var userTracks = [];
	onMount(async () => {
		userTracks = await getUserTracks();
		console.log(userTracks[0])
	});
</script>

<!-- Page definition -->
<section>
	<h2>Home</h2>
	<h4>User Liked Tracks</h4>
	<ol>
		{#if userTracks.length == 0}
			<li>Loading...</li>
		{:else}
			{#each userTracks as userTrack}
				<li>"<i>{userTrack.track.name}</i>" - {userTrack.track.artists[0].name}</li>
			{/each}
		{/if}
	</ol>
</section>
