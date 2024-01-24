import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.div`
  padding: 2rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logoSVG {
    width: 5.3rem;
    height: 2.5rem;
  }

  .rightContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-light']};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme['purple-dark']};
    font-family: 'Roboto';
  }
`
