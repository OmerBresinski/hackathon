import styled from "styled-components";

export const TextContainer = styled.div`
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    font-size: ${(props) => props.size};
    font-family: Helvetica, Arial, sans-serif;
    transition: all 0.12s ease-in-out;
    cursor: ${({ withPointer }) => (withPointer ? "pointer" : "initial")};

    &:hover {
        color: ${(props) => props.hoverColor};
    }
`;
