<script>
	import { page } from '$app/stores'
</script>

<h1>Post</h1>

<pre>
    <!-- $page를 문자열(stringify)로 변환해 null, 2칸씩 띄워 표시한다. -->
    {JSON.stringify($page, null, 2)}
</pre>
