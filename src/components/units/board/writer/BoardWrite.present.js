import { RedInput, BlueInput, GreenInput} from './BoardWrite.styles';

export default function BoardWriteUI(props){

    // 자바스크립트 영역


    // HTML 영역(return)
    return(
        <>
            작성자: <RedInput type="text" onChange={props.onChangeWriter} /> <br />
            제목: <BlueInput type="text" onChange={props.onChangeTitle} /> <br />
            내용: <GreenInput type="text" onChange={props.onChangeContents} /> <br />
        </>
    )
}