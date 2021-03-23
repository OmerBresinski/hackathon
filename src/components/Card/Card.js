import React from 'react'
import * as S from './style'


function Card(props) {

    return (
        <S.CardContainer>
            <S.Header>
                {props.title}
            </S.Header>
            <S.Image src={props.image}></S.Image>
            <S.Text>{props.description}</S.Text>
        </S.CardContainer>
    )


}

export default Card