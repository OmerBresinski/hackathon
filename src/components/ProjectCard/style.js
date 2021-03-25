import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid #c3c3c3;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: auto;
    border-radius: 20px;
    -webkit-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 63px 9px rgba(0, 0, 0, 0.15);
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 15px 20px;
    gap: 10px;
`;

export const ProfileName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    padding: 80px;
    padding-top: 3px;
`;

export const Text = styled.div``;

export const Image = styled.img`
    width: 250px;
    height: 230px;
    border-radius: 30px;
    margin-inline-start: 80px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-block-start: 30px;
    margin-inline-start: 45px;
    justify-content: center;
`;

export const MessagesInput = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-block-start: 30px;
    margin-inline-start: 45px;
    justify-content: center;
`;

export const Meesages = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-block-start: 30px;
    margin-inline-start: 45px;
    justify-content: center;
    flex-direction: column;
`;

export const MessageBox = styled.div`
    border-bottom: 1px solid #f3f3f3;
    margin: 20px 0;
`