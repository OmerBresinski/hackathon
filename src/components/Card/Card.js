import React from "react";
import { useHistory } from "react-router";
import Text from "components/Text";
import Avatar from "components/Avatar";
import Button from "components/Button";
import * as S from "./style";
import { URL } from "constant";

function Card(props) {
    const history = useHistory();

    return (
        <S.CardContainer width={props.width}>
            <S.Image src={props.image}></S.Image>
            <S.HeaderContainer>
                <S.ProfileContainer>
                    <Avatar src={props.userProfileImage} width={"40px"} height={"40px"} />
                    <S.ProfileName>
                        <Text size="14px" color="#333333" bold>
                            {props.userName}
                        </Text>
                        <Text size="14px" color="#333333">
                            {props.title}
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
                            <Text size="14px" color="#333333">
                                {wanted}
                            </Text>
                        </S.WantedRow>
                    ))}
                </S.Wanted>
            </S.Description>
            <S.ButtonWrapper>
                <Button label="Read More" height="40px" width="50px" textSize="14px" onClick={() => history.push(`${URL.project}/${props.id}`)} />
            </S.ButtonWrapper>
        </S.CardContainer>
    );
}

export default Card;
