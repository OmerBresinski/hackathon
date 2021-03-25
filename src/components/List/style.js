import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-gap: 20px 10px;
    justify-items: center;
    width: 100%;
`;
