import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {

    const { data } = useQuery(FETCH_BOARDS)
    

    return (
        <>
            <div>1번 게시글로 이동이 완료되었습니다 -쿼리!!</div>
            <div>작성자: {data ? data.fetchBoards.writer : "로딩중입니다..."}</div>
            <div>제목: {data && data.fetchBoards.title}</div>
            <div>내용: {data?.fetchBoards.contents}</div>
        </>
    )
}