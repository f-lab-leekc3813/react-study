import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage() {

    const [title,setTitle] = useState("")
    
    //비동기
    function onClickAsync () {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result)
    }
    //동기
    async function onClicksync () {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        console.log(result.data)
        console.log(result.data.title)
        setTitle(result.data.title)
    }
    
    return (
        <>
            <button onClick= {onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick = {onClicksync}>REST-API(동기)  요청하기</button>
            <div>{title}</div>
        </>
    )
}