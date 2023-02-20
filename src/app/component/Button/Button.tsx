import styled from 'styled-components';

export const TextButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
`;

export const Button = styled(TextButton)`
  padding: 12px 32px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.palette.grey['50']};
  background-color: ${({ theme }) => theme.color.palette.blue['800']};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${({ theme }) => theme.color.palette.blue['700']};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.palette.blue['700']};
    box-shadow: ${({ theme }) => theme.shadow[0]};
  }
`;
