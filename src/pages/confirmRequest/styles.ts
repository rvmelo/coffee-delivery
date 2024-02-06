import styled from 'styled-components'

interface IconWrapperProps {
  backgroundColor: string
}

export const ConfirmRequestContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6.375rem;
  padding: 0 10rem;
  margin-top: 5rem;
`

export const RequestStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme.yellow};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const AddressWrapper = styled.div`
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme['yellow-dark']}, ${theme.purple})`};

  overflow: hidden;

  margin-top: 2.5rem;

  padding: 1px;
`

export const AddressContainer = styled.div`
  background: ${({ theme }) => theme.background};

  border-radius: 6px 36px;

  height: 100%;

  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ backgroundColor }) => backgroundColor};

  svg {
    color: ${({ theme }) => theme.background};
  }
`

export const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    font-weight: 700;
  }
`

export const RequestGrid = styled.div``

export const IllustrationGrid = styled.div`
  img {
    width: 30.75rem;
    height: 18.3rem;
  }
`
