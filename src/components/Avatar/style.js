import styled from "styled-components";

export const AvatarContainer = styled.div`
    border-radius: 50%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    overflow-y: hidden;
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 100%;
    height: auto;
`;
