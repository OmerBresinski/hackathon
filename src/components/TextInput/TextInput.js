import React from "react";
import * as S from "./style";

const TextInput = ({ fieldName, value, onChange }) => {
    const handleChange = (e) => {
        onChange({ fieldName, value: e.target.value });
    };

    return (
        <S.BaseTextInput>
            <S.Label>Hello</S.Label>
            <S.Input onChange={handleChange} value={value} />
        </S.BaseTextInput>
    );
};

export default TextInput;
