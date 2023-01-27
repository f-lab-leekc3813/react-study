import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props){

    // 자바스크립트 영역


    // HTML 영역(return)
    return(
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} /> <br />
            제목: <S.BlueInput type="text" onChange={props.onChangeTitle} /> <br />
            내용: <S.GreenInput type="text" onChange={props.onChangeContents} /> <br />
        </>
    )
}