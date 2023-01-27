import {useRouter} from 'next/router'

export default function StaticRoutedPage() {

    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-01-static-routing")
    }

    return (
        <>
            <div>2번페이지 이동이 완료되었습니다!!</div>
            <button onClick = {onClickMove}>1번페이지 이동하기.</button>
        </>
        
    )
}