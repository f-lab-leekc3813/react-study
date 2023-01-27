import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: 239}
    })

    console.log(data)

    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-05-static-routing-board-quary")
    }

    return (
        <>
            <div>1번 게시글로 이동이 완료되었습니다 -쿼리!!</div>
            <button onClick = {onClickMove}>게시글 메뉴로 이동하기.</button>
            <div>작성자: {}</div>
            <div>제목: {}</div>
            <div>내용: {}</div>
        </>
    )
}