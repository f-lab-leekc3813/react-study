import { gql,useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_PRODUCT =gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { 
        createProduct(seller: $seller, createProductInput: $createProductInput){     
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createBoard] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: { //variavles 이게 $ 역할을 해줌
                seller: "찬이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                }
            }
        })
        console.log(result)
        alert(result.data.createProduct.message)
    }


    return (
            <button onClick={onClickSubmit}>
                GRAPHQL-API(동기) 요청하기
            </button>
    )
}