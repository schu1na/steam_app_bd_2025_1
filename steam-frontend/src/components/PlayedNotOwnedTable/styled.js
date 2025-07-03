import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    `;

export const BoxContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    width: 98%;    
    background-color: #181C21;
    padding: 64px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const PlayerSelectContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    label {
        font-size: 20px;
    }

    select {
        padding: 8px 12px;
        font-size: 16px;
        color: #333;
        background: #fff; 
        border: 1px solid #ccc;
        border-radius: 4px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        transition: border-color .2s, box-shadow .2s;

        &:focus {
            border-color: #888;
            box-shadow: 0 0 0 2px rgba(136,136,136,0.2);
            outline: none;
        }
    }
`;