import Text from 'components/Text'
import React from 'react'
import * as S from './style'


function Card(props) {

    return (
        <S.CardContainer>
            <S.Header>
                <Text bold> {props.title}</Text>
            </S.Header>
            <S.Image src={props.image}></S.Image>
            <S.Text><Text>{props.description}</Text></S.Text>
        </S.CardContainer>
    )


}

export default Card