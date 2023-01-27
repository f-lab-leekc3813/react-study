import BoardWriteUI from './BoardWrite.present'
import {useState} from 'react'

export default function BoardWrite(){

    // 자바스크립트 영역
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    // HTML 영역(return)
    return (
        <BoardWriteUI 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
        />
    )
}