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
    background: lightgray;
`;

export const WhoAreWeRight = styled.div``;

export const Dots = styled.div`
    display: flex;
    gap: 20px;
    margin-block-end: 135px;
`;

export const Projects = styled.div`
    padding: 0px 20px;
`;

export const ProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;
    margin-top: 20px;

`

export const CreateProjectContainer = styled.div`
    padding: 100px;

`

export const FormCardContainer = styled.div`
    padding: 50px;
    border: 1px solid transparent;
    border-radius: 50px;
    -webkit-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);`

export const BottomFormSection = styled.div`
display:flex;
justify-content: space-around;
margin: 30px 0;
gap: 35px;
`

export const Separator = styled.div`
    background-color: #c3c3c3;
    width: 100%;
    height: 2px;
`;

export const ProjectCardWrapper = styled.div`
    display:flex;
    margin: 50px;
    justify-content: center;
`;
