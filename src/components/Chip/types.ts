export type ChipVariant = 'primary' | 'secondary' | 'outline'
export type ChipSize = 'sm' | 'md' | 'lg'

export interface ChipProps {
  variant?: ChipVariant
  size?: ChipSize
  disabled?: boolean
  removable?: boolean
}
