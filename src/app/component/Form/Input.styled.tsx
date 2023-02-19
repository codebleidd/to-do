import styled, { css } from 'styled-components';

const commonInputStyle = css`
  background-color: ${({ theme }) => theme.color.palette.grey['900']};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: ${({ theme }) => theme.shadow.inset};
  padding: 8px 14px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.palette.grey['50']};
`;

export const Input = styled.input`
  ${commonInputStyle}
  padding: 8px 14px;
`;

export const TextArea = styled.textarea`
  ${commonInputStyle};
  resize: none;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.color.error};
  font-size: 12px;
  padding: 6px 8px 0px;
`;

export const Label = styled.label`
  font-size: 13px;
  padding: 8px 8px;
`;
