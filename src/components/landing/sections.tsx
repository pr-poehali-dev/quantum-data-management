import { Badge } from "@/components/ui/badge"

export interface Recipe {
  name: string
  time: string
  emoji: string
  ingredients: string[]
}

export interface SectionData {
  id: string
  title: string
  subtitle?: React.ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  recipes?: Recipe[]
  mealType?: 'breakfast' | 'lunch' | 'dinner'
}

import React from "react"

export const sections: SectionData[] = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Книга рецептов</Badge>,
    title: "Вкусно. Просто. Каждый день.",
    content: "Идеи для завтрака, обеда и ужина — всё в одном месте.",
    showButton: true,
    buttonText: 'Смотреть рецепты'
  },
  {
    id: 'breakfast',
    title: '🌅 Завтрак',
    content: 'Лёгкий старт для продуктивного дня',
    mealType: 'breakfast',
    recipes: [
      {
        name: 'Овсяная каша с ягодами',
        time: '10 мин',
        emoji: '🥣',
        ingredients: ['Овсянка', 'Молоко', 'Черника', 'Мёд']
      },
      {
        name: 'Яичница с авокадо',
        time: '7 мин',
        emoji: '🍳',
        ingredients: ['Яйца', 'Авокадо', 'Помидор', 'Соль']
      },
      {
        name: 'Творог с фруктами',
        time: '5 мин',
        emoji: '🍓',
        ingredients: ['Творог', 'Клубника', 'Банан', 'Сметана']
      }
    ]
  },
  {
    id: 'lunch',
    title: '☀️ Обед',
    content: 'Сытные блюда для середины дня',
    mealType: 'lunch',
    recipes: [
      {
        name: 'Куриный суп',
        time: '40 мин',
        emoji: '🍲',
        ingredients: ['Курица', 'Морковь', 'Лук', 'Картофель']
      },
      {
        name: 'Паста с томатами',
        time: '20 мин',
        emoji: '🍝',
        ingredients: ['Паста', 'Томаты', 'Чеснок', 'Базилик']
      },
      {
        name: 'Греческий салат',
        time: '10 мин',
        emoji: '🥗',
        ingredients: ['Огурец', 'Помидор', 'Брынза', 'Оливки']
      }
    ]
  },
  {
    id: 'dinner',
    title: '🌙 Ужин',
    content: 'Вкусный финал дня',
    mealType: 'dinner',
    recipes: [
      {
        name: 'Запечённая рыба',
        time: '30 мин',
        emoji: '🐟',
        ingredients: ['Рыба', 'Лимон', 'Розмарин', 'Оливковое масло']
      },
      {
        name: 'Овощное рагу',
        time: '35 мин',
        emoji: '🥘',
        ingredients: ['Баклажан', 'Кабачок', 'Перец', 'Томат']
      },
      {
        name: 'Стейк с картофелем',
        time: '25 мин',
        emoji: '🥩',
        ingredients: ['Говядина', 'Картофель', 'Розмарин', 'Масло']
      }
    ]
  }
]
