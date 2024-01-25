import React from 'react'
import coffeeImage from '../../../../assets/coffee-image.svg'
import { BannerContainer, BannerInfo, ColorValues, FeatureItem } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerInfo>
        <div className="bannerTextContainer">
          <span className="bannerTitle">
            Encontre o café perfeito para qualquer hora do dia
          </span>
          <span className="bannerInfoText">
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </span>
        </div>
        <div className="featuresContainer">
          <FeatureItem color={ColorValues.YELLOW}>
            <div className="iconContainer">
              <ShoppingCart />
            </div>
            <span className="featureText">Compra simples e segura</span>
          </FeatureItem>
          <FeatureItem color={ColorValues.BASE_TEXT}>
            <div className="iconContainer">
              <Package />
            </div>
            <span className="featureText">Embalagem mantém o café intacto</span>
          </FeatureItem>
          <FeatureItem color={ColorValues.YELLOW_DARK}>
            <div className="iconContainer">
              <Timer />
            </div>
            <span className="featureText">Entrega rápida e rastreada</span>
          </FeatureItem>
          <FeatureItem color={ColorValues.PURPLE}>
            <div className="iconContainer">
              <Coffee />
            </div>
            <span className="featureText">
              O café chega fresquinho até você
            </span>
          </FeatureItem>
        </div>
      </BannerInfo>
      <img src={coffeeImage} alt="" />
    </BannerContainer>
  )
}
