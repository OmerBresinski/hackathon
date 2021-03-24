import React from "react";
import * as S from "./style";

const Avatar = (props) => {

    return (
        <S.AvatarContainer
            width={props.width}
            height={props.height}
        >
            <S.Image src={props.src} />
        </S.AvatarContainer>
    );
};

export default Avatar;
