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

export const AverageContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 16px;
    width: 98%;
    background-color: #181C21;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const GamesWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const GameTag = styled.span`
  background-color: #2a2e3a;
  color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: background 0.3s;

  &:hover {
    background-color: #1db954;
    color: #f1f1f1;
    cursor: default;
  }
`;
