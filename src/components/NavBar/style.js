import styled from "styled-components";

export const NavBar = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    max-height: 70px;
    padding: 0px 50px 0px 25px;
    box-sizing: border-box;
    background: white;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.28);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.28);
    z-index: 10;
`;

export const NavGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
