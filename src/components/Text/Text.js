import React from "react";
import * as S from "./style";

function Text(props) {
    return (
        <S.TextContainer
            bold={props.bold}
            size={props.size}
            color={props.color}
            hoverColor={props.hoverColor}
        >
            {props.children}
        </S.TextContainer>
    );
}

export default Text;
