import type { ReactNode } from "react"

export interface Recipe {
  name: string
  time: string
  emoji: string
  ingredients: string[]
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  recipes?: Recipe[]
  mealType?: 'breakfast' | 'lunch' | 'dinner'
}

export interface SectionProps extends Section {
  isActive: boolean
}
