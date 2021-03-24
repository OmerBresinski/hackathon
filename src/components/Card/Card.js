import Avatar from 'components/Avatar'
import Text from 'components/Text'
import React from 'react'
import * as S from './style'


function Card(props) {
    return (
        <S.CardContainer>
            <S.Image src={props.image}></S.Image>
            <S.HeaderContainer>
                <S.ProfileContainer>
                    <Avatar src={props.userProfileImage} width={"50px"} height={"50px"} />
                </S.ProfileContainer>
            </S.HeaderContainer>
            <S.Header>
                <Text bold> {props.title}</Text>
            </S.Header>
            <S.Text>
                <Text>{props.description}</Text>
            </S.Text>
        </S.CardContainer>
    );
}

export default Card;
