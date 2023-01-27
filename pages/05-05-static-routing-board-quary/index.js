import {useRouter} from 'next/router'

export default function StaticRoutingPage() {

    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-06-static-routed-board-quary/1")
    }

    const onClickMove2 = () => {
        router.push("/05-06-static-routed-board-quary/2")
    }

    const onClickMove3 = () => {
        router.push("/05-06-static-routed-board-quary/3")
    }

    return(
        <>
            <div>메인페이지 입니다-쿼리.</div>
            <button onClick = {onClickMove1}>1번 게시글로 이동하기.</button><br />
            <button onClick = {onClickMove2}>2번 게시글로 이동하기.</button><br />
            <button onClick = {onClickMove3}>3번 게시글로 이동하기.</button><br />
        </>
    )
}