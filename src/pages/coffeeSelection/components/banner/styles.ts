import styled from 'styled-components'

export enum ColorValues {
  YELLOW = 'yellow',
  BASE_TEXT = 'base-text',
  YELLOW_DARK = 'yellow-dark',
  PURPLE = 'purple',
}

interface FeatureItemProps {
  color: ColorValues
}

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.5rem;
  margin-top: 5.875rem;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.125rem;

  .bannerTextContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bannerTextContainer .bannerTitle {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
    color: ${({ theme }) => theme['base-title']};
  }

  .bannerTextContainer .bannerInfoText {
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${({ theme }) => theme['base-title']};
  }

  .featuresContainer {
    display: grid;
    grid-row-gap: 1.25rem;
    grid-column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }
`

export const FeatureItem = styled.div<FeatureItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  .iconContainer {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({ theme, color }) => theme[color]};
  }

  .iconContainer svg {
    color: #fafafa;
    width: 1rem;
    height: 1rem;
  }

  .featureText {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${({ theme }) => theme['base-text']};
  }
`
