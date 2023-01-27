import {useRouter} from 'next/router'

export default function StaticRoutingPage() {

    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-02-static-routed")
    }

    return(
        <>
            <div>1번페이지 입니다.</div>
            <button onClick = {onClickMove}>2번페이지 이동하기.</button>
        </>
        
    )
}