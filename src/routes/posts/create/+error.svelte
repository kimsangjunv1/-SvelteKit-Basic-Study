<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>Yikes! ๐ฃ</h1>

<!-- ?๋ฅผ ์ฌ์ฉํด error์์ ๋ฉ์ธ์ง๊ฐ ์๋ ๊ฒฝ์ฐ ์ถ๋ ฅํ๋ค. -->
<h1>{$page.error?.message}</h1>

<p>Something wend horribly wrong but the blast radius has been contained to this route.</p>

<pre>
    {JSON.stringify($page, null, 4)}
</pre>
