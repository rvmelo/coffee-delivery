import { IconProps } from 'phosphor-react'
import React from 'react'
import { SelectionCardContainer } from './styles'

interface SelectionCardProps {
  label: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  isSelected?: boolean
  onClick: () => void
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  icon,
  label,
  isSelected = false,
  onClick,
}) => {
  const Icon = icon

  return (
    <SelectionCardContainer onClick={onClick} $isSelected={isSelected}>
      <Icon size={16} />
      <span>{label}</span>
    </SelectionCardContainer>
  )
}
