import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid #c3c3c3;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    width: 350px;
    height: 615px;
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
    padding: 3px 20px;
`;

export const Text = styled.div``;

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Wanted = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
    margin-inline-start: 8px;
    margin-block-start: 15px;
`;

export const WantedRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Dot = styled.div`
    min-height: 12px;
    min-width: 12px;
    max-height: 12px;
    max-width: 12px;
    border-radius: 50%;
    background: #158aff;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-block-start: 30px;
    margin-inline-start: 45px;
`;
