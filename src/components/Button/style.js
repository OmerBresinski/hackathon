import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    height: ${({ height }) => height};
    align-items: center;
    justify-content: center;
    background: ${({ bgColor }) => bgColor};
    min-width: 160px;
    width: ${({ width }) => width};
    border: 2px solid ${({ borderColor }) => borderColor};
    border-radius: 35px;
    cursor: pointer;
    transition: all 0.12s ease-in-out;

    &:hover {
        background: ${({ hoverBgColor }) => hoverBgColor};
        border-color: ${({ hoverBorderColor }) => hoverBorderColor};
    }
`;
