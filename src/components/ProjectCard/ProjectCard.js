import React, { useState } from "react";
import { useHistory } from "react-router";
import Text from "components/Text";
import Avatar from "components/Avatar";
import Button from "components/Button";
import * as S from "./style";
import { URL } from "constant";
import TextInput from "components/TextInput";

function ProjectCard(props) {
    const history = useHistory();
    const [messageValue, setMessageValue] = useState("")
    const [messages, setMessages] = useState([])

    const handleChange = (field) => {
        setMessageValue(field.value)
    }

    const handleIconClick = () => {
        console.log(messageValue)
        const messagesArray = [...messages]
        messagesArray.push(messageValue)
        setMessageValue("")
        setMessages(messagesArray)
    }

    return (
        <S.CardContainer width={props.width}>
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
                    <Text size={'18px'} bold>{props.title}</Text>
                </S.Text>
                <S.Text>
                    <Text size={'18px'}>{props.description}</Text>
                </S.Text>
            </S.Description>
            <S.Image src={props.image}></S.Image>
            <S.MessagesInput>
                <TextInput placeholder={"Type your message..."} onChange={handleChange} fieldName={"message"} onClick={handleIconClick} value={messageValue}></TextInput>
            </S.MessagesInput>
            <S.Meesages>
                {messages?.map((item) => {
                    return (<S.MessageBox>
                        <Text>{item}</Text>
                    </S.MessageBox>)
                })}
            </S.Meesages>
            <S.ButtonWrapper>
                <Button
                    label='Join Project'
                    height='40px'
                    width='50px'
                    textSize='14px'
                    onClick={() => history.push(`${URL.project}/${props.id}`)}
                />
            </S.ButtonWrapper>
        </S.CardContainer>
    );
}

export default ProjectCard;
