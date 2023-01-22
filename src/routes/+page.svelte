<script lang="ts">
	import { onMount, onDestroy } from 'svelte'

	// 마운트 되었을때
	// onMount는 본 컴포넌트가 처음 DOM에 렌더링 될 때 실행되는 함수
	// api 같이 데이터를 한번만 가져와야하는 경우에 유용한 함수
	onMount(() => {
		console.log('Mounted home page')
	})

	// 마운트 되지 않았을때
	// onDestroy는 본 컴포넌트가 DOM에서 제거되었을때 실행되는 함수
	onDestroy(() => {
		console.log('Unmounted home page')
	})
</script>

<h1>Home Page</h1>
