import React from "react";
import { useHistory } from "react-router";
import mail from "assets/mail.png";
import notification from "assets/notification.png";
import Text from "components/Text";
import Button from "components/Button";
import * as S from "./style";
import { URL } from "constant";

const NavBar = (props) => {
    const history = useHistory();
    console.log(history);
    return (
        <S.NavBar>
            <S.NavGroup>
                <img src={mail} alt='' style={{ cursor: "pointer" }} />
                <img src={notification} alt='' style={{ cursor: "pointer" }} />
            </S.NavGroup>
            <S.NavGroup>
                <Text
                    hoverColor='#3C3C3C'
                    color='darkgray'
                    size='14px'
                    onClick={() => {}}
                >
                    About
                </Text>
                <Text
                    hoverColor='#3C3C3C'
                    color='darkgray'
                    size='14px'
                    onClick={() => {
                        history.push(URL.feed);
                    }}
                >
                    Projects
                </Text>
                <Text
                    hoverColor='#3C3C3C'
                    color='darkgray'
                    size='14px'
                    onClick={() => {}}
                >
                    Success Stories
                </Text>
                <Text
                    hoverColor='#3C3C3C'
                    color='darkgray'
                    size='14px'
                    onClick={() => {}}
                >
                    Join Us
                </Text>
                <Button
                    height='35px'
                    label='Create Account'
                    textSize='14px'
                    bgColor='white'
                    hoverBgColor='#158AFF'
                    borderColor='#158AFF'
                    hoverBorderColor='#158AFF'
                    textColor='#158AFF'
                    hoverTextColor='white'
                />
            </S.NavGroup>
        </S.NavBar>
    );
};

export default NavBar;
