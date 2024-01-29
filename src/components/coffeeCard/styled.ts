import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;

  padding: 7rem 20px 20px;

  position: relative;

  img {
    height: 7.5rem;
    width: 7.5rem;
    position: absolute;
    top: -25px;
  }

  .categoryContainer {
    background: ${({ theme }) => theme['yellow-light']};
    padding: 4px 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;
  }

  .categoriesWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .categoryContainer span {
    font-weight: 700;
    font-size: 0.625rem;
    color: ${({ theme }) => theme.yellow};
    text-transform: uppercase;
  }

  .coffeeNameText {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .coffeeDescriptionText {
    font-size: 0.875rem;
    line-height: 18.2px;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme['base-label']};

    margin-top: 8px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 23px;

  margin-top: 33px;

  > span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }

  .priceValueText {
    font-weight: 800;
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-text']};
  }

  .actionContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`
