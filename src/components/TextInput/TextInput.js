import React from "react";
import * as S from "./style";

const TextInput = ({ fieldName, value, onChange, placeholder, onClick }) => {
    const handleChange = (e) => {
        onChange({ fieldName, value: e.target.value });
    };

    return (
        <S.BaseTextInput>
            <S.Input onChange={handleChange} value={value} placeholder={placeholder} />
            <div onClick={onClick} style={{ height: "20px", width: "20px", cursor: "pointer", background: "lightgreen", borderRadius: "3px" }} />
        </S.BaseTextInput>
    );
};

export default TextInput;
