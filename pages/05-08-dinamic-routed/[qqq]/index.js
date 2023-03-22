import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {

    const router = useRouter()
    console.log(router.query.qqq)

    const { data } = useQuery(FETCH_BOARD,{
        variables: {
            number: Number(router.query.qqq),
        }
    })


    console.log(data)

    return (
        <>
            <div>{router.query.qqq}번 게시글로 이동이 완료되었습니다 -쿼리!!</div>
            <div>Writer {data && data.fetchBoard.writer}</div>
            <div>Title {data && data.fetchBoard.title}</div>
            <div>Content {data && data.fetchBoard.contents}</div>
        </>
    )
}