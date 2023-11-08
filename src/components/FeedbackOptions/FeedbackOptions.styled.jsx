import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Button = styled.button`
  font-size: 14px;
  background-color: inherit;
  border: 1px solid black;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-property: background-color, border-color, color;

  &:hover,
  &:focus,
  &:active {
    background-color: #416ece;
    border-color: #416ece;
    color: white;
  }
`;
