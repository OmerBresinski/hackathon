import React from "react";
import Text from "components/Text";
import Avatar from "components/Avatar";
import * as S from "./style";

function Card(props) {
    return (
        <S.CardContainer>
            <S.Image src={props.image}></S.Image>
            <S.HeaderContainer>
                <S.ProfileContainer>
                    <Avatar
                        src={props.userProfileImage}
                        width={"40px"}
                        height={"40px"}
                    />
                    <S.ProfileName>
                        <Text size='14px' color='#333333' bold>
                            {props.userName}
                        </Text>
                        <Text size='14px' color='#333333'>
                            {props.role}
                        </Text>
                    </S.ProfileName>
                </S.ProfileContainer>
            </S.HeaderContainer>
            <S.Description>
                <S.Text>
                    <Text>{props.description}</Text>
                </S.Text>
                <S.Wanted>
                    {props.lookingFor?.map((wanted) => (
                        <S.WantedRow>
                            <S.Dot />
                            <Text size='14px' color='#333333'>
                                {wanted}
                            </Text>
                        </S.WantedRow>
                    ))}
                </S.Wanted>
            </S.Description>
        </S.CardContainer>
    );
}

export default Card;
