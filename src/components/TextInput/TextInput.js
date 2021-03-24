import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const TextInput = ({ fieldName, value, onChange, placeholder, onClick }) => {
    const handleChange = (e) => {
        onChange({ fieldName, value: e.target.value });
    };

    return (
        <S.BaseTextInput>
            <S.Input onChange={handleChange} value={value} placeholder={placeholder} />
            <FontAwesomeIcon icon={faPaperPlane} onClick={onClick} />
        </S.BaseTextInput>
    );
};

export default TextInput;
