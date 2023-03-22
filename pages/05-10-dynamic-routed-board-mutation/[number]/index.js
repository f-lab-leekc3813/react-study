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
    console.log(router.query.number)

    const { data } = useQuery(FETCH_BOARD,{
        variables: {
            number: Number(router.query.number),
        }
    })


    console.log(data)

    return (
        <>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다 -쿼리!!</div>
            <div>Writer {data && data.fetchBoard.writer}</div>
            <div>Title {data && data.fetchBoard.title}</div>
            <div>Content {data && data.fetchBoard.contents}</div>
        </>
    )
}