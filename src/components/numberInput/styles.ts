import styled from 'styled-components'

export const NumberInputContainer = styled.div`
  height: 2rem;
  max-width: 4.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0 8px;

  svg {
    cursor: pointer;

    color: ${({ theme }) => theme.purple};

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  input[type='number'] {
    background: transparent;
    max-width: 1.25rem;
    max-height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: transparent;

    -moz-appearance: textfield;

    padding: 0 0.25rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
