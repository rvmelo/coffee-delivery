import styled from 'styled-components'

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};

  max-width: 40rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.purple};
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .textContainer strong {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .description {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
