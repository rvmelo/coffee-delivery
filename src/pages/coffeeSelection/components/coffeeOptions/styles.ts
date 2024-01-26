import styled from 'styled-components'

export const CoffeeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > span {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }

  .optionsContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }
`
