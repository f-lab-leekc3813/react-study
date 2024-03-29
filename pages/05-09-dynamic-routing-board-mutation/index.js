import { gql,useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

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

    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)

    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")

    const onClickSubmit = async () => {
        try{
            const result = await createBoard({
                variables: { //variavles 이게 $ 역할을 해줌
                    writer: writer,
                    title: title,
                    contents: contents 
                }
            })
            console.log(result)
            alert(result.data.createBoard.message)
            console.log(result.data.createBoard.number)
            router.push(`./05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)
        } catch(error){
            // try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시!!하고 catch가 실행됨
            console.log(error.message)
            alert(error.message)
        }
    }

    const onChangeWriter = (event) => {
       setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    return (
        <>
            작성자: <input type='text' onChange={onChangeWriter} /><br />
            제목: <input type='text' onChange={onChangeTitle} /><br />
            내용: <input type='text' onChange={onChangeContents} /><br />
            <button onClick={onClickSubmit}>
                GRAPHQL-API(동기) 요청하기
            </button>
        </>
    )
}