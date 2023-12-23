<!-- Setup -->
<script>
	import './styles.css';
</script>


<!-- Page Definition -->
<div class="app">
	<header>
		<p align=center>Spotify Playlist Manager</p>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://github.com/johncanthearyou">github/johncanthearyou</a> to see more of my portfolio</p>
	</footer>
</div>


<!-- Style Configuration -->
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
