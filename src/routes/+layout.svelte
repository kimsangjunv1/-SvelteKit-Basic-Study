<!-- layout 파일은 각 링크된 page의 dom정보를 -->
<script lang="ts">
	// css 로딩시 이렇게
	// layout에 넣어야 slot에 바뀌는 값에도 각각 적용이 가능하기 떄문에?
	import '../app.css'
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

<!-- 슬롯이 위치한곳에 뿌려준다. -->
<slot />
