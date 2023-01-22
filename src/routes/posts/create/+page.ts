import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

// 예기치 않은 오류가 발생하면 민감한 정보가 유출될 수 있으므로
// 오류 메시지와 스택 추적이 사용자에게 노출되지 않게 한다.

// 표시할 요류 내용을 이렇게 커스텀도 가능하다.
export const load: PageLoad = async () => {
	// alert('good')
	// 페이지가 로드 되어질때 강제로 에러를 표시하고 +error.svelte가 작동하게 된다.
	throw error(404, { message: 'yikes! ❤️' })
}
