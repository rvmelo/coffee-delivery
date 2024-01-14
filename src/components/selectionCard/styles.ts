import styled, { css } from 'styled-components'

interface SelectionCardContainerProps {
  isSelected: boolean
}

export const SelectionCardContainer = styled.div<SelectionCardContainerProps>`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme['purple-light'] : theme['base-button']};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.purple};
    `}

  max-width: 11.125rem;

  span {
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};
  }

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
