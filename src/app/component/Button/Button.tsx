import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.palette.blue['800']};
  color: ${({ theme }) => theme.color.palette.grey['50']};
  font-weight: 400;
  font-size: 14px;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 12px 32px;
  box-shadow: ${({ theme }) => theme.shadow[0]};
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: ${({ theme }) => theme.shadow[1]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.palette.blue['700']};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.palette.blue['700']};
    box-shadow: ${({ theme }) => theme.shadow[0]};
  }
`;
