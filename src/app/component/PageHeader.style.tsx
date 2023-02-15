import styled from 'styled-components';

export const PageHeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.grey['900']};
  padding: 32px 256px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.grey['50']};
  margin-bottom: 0;
  text-align: end;
`;

export const Subtitle = styled.h6`
  color: ${({ theme }) => theme.color.grey['100']};
  margin-top: 16px;
  text-align: end;
  font-style: italic;
`;
