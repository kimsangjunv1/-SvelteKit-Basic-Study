<script lang="ts">
	import { onMount, onDestroy } from 'svelte'

	onMount(() => {
		console.log('Mounted home page')
	})
	onDestroy(() => {
		console.log('Unmounted home page')
	})
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
	</ul>
</nav>

<h1>Home Page</h1>
