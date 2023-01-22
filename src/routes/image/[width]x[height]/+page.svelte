<script lang="ts">
	// 페이지에 대한 정보
	import { page } from '$app/stores'
</script>

<h1>Dimensions</h1>

<pre>
    <!-- 폴더 경로의 이름에 따라 높이,넓이 값을 주소에 입력받은 값을 그대로 배열에 가져온다? -->
    {JSON.stringify($page, null, 2)}
</pre>
