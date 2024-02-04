import styled from 'styled-components'

export const RequestContainer = styled.div`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  width: 100%;

  background: ${({ theme }) => theme['base-card']};

  padding: 2.5rem;

  margin-top: 0.9rem;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`

export const CoffeeItem = styled.div`
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`

export const PriceContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PriceItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }

  .priceText {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }

  > strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
