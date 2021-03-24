import React, { useState } from "react";
import Text from "components/Text";
import * as S from "./style";

const Avatar = ({
    height = "50px",
    width = "50px",
    src = "",
}) => {

    return (
        <S.Avatar
            width={width}
            height={height}
        >
            <Image src={src} />
        </S.Avatar>
    );
};

export default Avatar;
