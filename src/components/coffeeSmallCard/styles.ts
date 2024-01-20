import styled from 'styled-components'

export const CoffeeSmallCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.125rem;
  background: ${({ theme }) => theme['base-card']};
  padding: 8px 4px;
`

export const CardLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  > svg {
    width: 4rem;
    height: 4rem;
  }

  .cardData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .cardData > span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .cardInterface {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`

export const CardRightSection = styled.div`
  display: flex;
  flex: 1;

  > span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-text']};
    margin-left: auto;
    margin-bottom: auto;
    white-space: nowrap;
  }
`
