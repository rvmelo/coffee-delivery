import styled from 'styled-components'

interface CartButtonContainerProps {
  backgroundColor: 'purple-dark' | 'yellow-dark'
}

export const ActionButtonContainer = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['yellow-dark']};

  border: none;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
  }

  &:hover {
    background: ${({ theme }) => theme.yellow};
  }
`

export const DeleteButtonContainer = styled.div`
  height: 2rem;
  border-radius: 6px;
  padding: 0 0.5rem;
  background: ${({ theme }) => theme['base-button']};

  cursor: pointer;

  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
  }

  > svg {
    color: ${({ theme }) => theme.purple};
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};

    > span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 2.375rem;
  max-width: 2.375rem;

  padding: 0.5rem;

  border-radius: 6px;
  border: none;

  cursor: pointer;

  background: ${({ theme, backgroundColor }) => theme[backgroundColor]};

  > svg {
    color: ${({ theme }) => theme['base-card']};
  }

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
