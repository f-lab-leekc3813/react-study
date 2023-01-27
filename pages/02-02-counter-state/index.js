import {useState} from 'react'

export default function CounterStatePage() {

    // let count = 0
    const [count,setCount] = useState(0)

    function onClickCountUp() {
        setCount(count + 1) // 기존방식: count = count + 1
    }

    function onClickCountDown() {
        setCount(count - 1) // 기존방식: count = count - 1
    }

    return (
        <>
            <div>{count}</div>
            <button onClick = {onClickCountUp} >카운트 올리기!!!</button>
            <button onClick = {onClickCountDown} >카운트 내리기!!!</button>
        </>  
    )
}