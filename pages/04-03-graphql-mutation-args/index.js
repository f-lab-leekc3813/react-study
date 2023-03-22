import { gql,useMutation } from '@apollo/client';

const CREATE_BOARD =gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { 
        createBoard(writer: $writer, title: $title, contents: $contents){     
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: { //variavles 이게 $ 역할을 해줌
                writer: "찬이" ,
                title: "안녕" ,
                contents: "교이루" 
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }

    return (
        <button onClick={onClickSubmit}>
            GRAPHQL-API(동기) 요청하기
        </button>
    )
}