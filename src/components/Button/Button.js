import React from "react";
import * as S from "./style";

const Button = ({ label, onClick }) => {
    return (
        <S.BaseButton>
            <S.Button onClick={onClick}>{label}</S.Button>
        </S.BaseButton>
    );
};

export default Button;
