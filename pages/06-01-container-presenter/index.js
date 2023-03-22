import { gql,useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWrite from '../../src/components/units/board/writer/BoardWrite.container';

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
    // 자바스크립트 영역
    
    // HTML영역 (return 아래)
    return <BoardWrite />
}