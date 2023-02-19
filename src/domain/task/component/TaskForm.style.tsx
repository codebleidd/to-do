import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 36px 36px;
  align-items: center;
  row-gap: 22px;
  border: 2px solid ${(props) => props.theme.color.palette.grey['900']};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${(props) => props.theme.color.palette.grey['800']};
  box-shadow: ${({ theme }) => theme.shadow[1]};
`;

export const InputWrapper = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: column;
`;
