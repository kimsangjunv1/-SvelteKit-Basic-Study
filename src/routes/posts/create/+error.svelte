<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>Yikes! 💣</h1>

<!-- ?를 사용해 error안에 메세지가 있는 경우 출력한다. -->
<h1>{$page.error?.message}</h1>

<p>Something wend horribly wrong but the blast radius has been contained to this route.</p>

<pre>
    {JSON.stringify($page, null, 4)}
</pre>
