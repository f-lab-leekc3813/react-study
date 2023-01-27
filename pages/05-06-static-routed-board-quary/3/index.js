import {useRouter} from 'next/router'

export default function StaticRoutedPage() {

    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-05-static-routing-board-quary")
    }

    return (
        <>
            <div>3번 게시글로 이동이 완료되었습니다!!</div>
            <button onClick = {onClickMove}>게시글 메뉴로 이동하기.</button>
        </>
        
    )
}