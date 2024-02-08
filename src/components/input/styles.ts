import styled, { css } from 'styled-components'

interface InputContainerProps {
  $isActive: boolean
}

interface InputWrapperProps {
  width?: number
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border: 1px solid ${theme.yellow};
    `}

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-label']};
    font-weight: 400;
    font-style: italic;
  }

  input {
    border: none;
    width: inherit;
    background: transparent;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
    outline: none;
  }

  input:focus {
    outline: 0;
    -webkit-appearance: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ErrorText = styled.div`
  font-size: 10px;
  color: red;
`

export const InputWrapper = styled.div<InputWrapperProps>`
  max-width: ${({ width }) => (width ? width / 16 : 27.125)}rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`
