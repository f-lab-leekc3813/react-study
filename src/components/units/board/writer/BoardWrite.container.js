import { gql,useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWriter.presenter'

const CREATE_BOARD =gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { 
        createBoard(writer: $writer, title: $title, contents: $contents){     
            _id
            number
            message
        }
    }
`

export default function BoardWrite() {

    // 자바스크립트 영역

    const [createBoard] = useMutation(CREATE_BOARD)

    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: { //variavles 이게 $ 역할을 해줌
                writer: writer,
                title: title,
                contents: contents 
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
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


    //HTML 영역(return 아래)
    return (
        <BoardWriteUI />
    )
}