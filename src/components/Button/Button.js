import React, { useState } from "react";
import Text from "components/Text";
import * as S from "./style";

const Button = ({
    label,
    onClick,
    height = "60px",
    width = "fit-content",
    bgColor = "#158AFF",
    textColor = "white",
    textSize = "18px",
    borderColor = "transparent",
    hoverBgColor = "white",
    hoverBorderColor = "#158AFF",
    hoverTextColor = "#158AFF",
}) => {
    const [visibleTextColor, setVisibleTextColor] = useState(textColor);

    const handleMouseEnter = () => {
        setVisibleTextColor(hoverTextColor);
    };

    const handleMouseLeave = () => {
        setVisibleTextColor(textColor);
    };

    return (
        <S.Button
            width={width}
            height={height}
            onClick={onClick}
            bgColor={bgColor}
            borderColor={borderColor}
            hoverBgColor={hoverBgColor}
            hoverBorderColor={hoverBorderColor}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Text color={visibleTextColor} size={textSize} bold>
                {label}
            </Text>
        </S.Button>
    );
};

export default Button;
