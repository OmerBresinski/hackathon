import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const WhoAreWe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1150px;
    height: 500px;
    border-radius: 50px;
    -webkit-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    margin-block-start: 120px;
    margin-block-end: 25px;
    padding: 0px 50px 0px 100px;
    gap: 80px;
`;

export const WhoAreWeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
    gap: 10px;
`;

export const WhoAreWeLeftTop = styled.div``;

export const WhoAreWeLeftBottom = styled.div`
    width: 533px;
`;

export const Dot = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #979797;
`;

export const WhoAreWeRight = styled.div``;

export const Dots = styled.div`
    display: flex;
    gap: 5px;
    margin-block-end: 135px;
`;

export const Projects = styled.div``;

export const ProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;
