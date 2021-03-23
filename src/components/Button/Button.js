import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Button = ({ label, onClick }) => {
    return (
        <S.BaseButton>
            <S.Button onClick={onClick}>
                <Text color='red' size='72px'>
                    {label}
                </Text>
            </S.Button>
        </S.BaseButton>
    );
};

export default Button;
