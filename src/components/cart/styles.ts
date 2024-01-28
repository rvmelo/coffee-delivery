import styled from 'styled-components'

export const CartContainer = styled.div`
  border-radius: 6px;
  background: ${({ theme }) => theme['yellow-light']};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.375rem;
  width: 2.375rem;

  position: relative;

  > div {
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['yellow-dark']};

    bottom: 25px;
    left: 25px;

    width: 1.25rem;
    height: 1.25rem;

    span {
      font-weight: 700;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.white};
    }
  }
`
