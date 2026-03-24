export interface Product {
  id: number
  name: string
  category: 'hat' | 'clothing'
  price: number
  originalPrice?: number
  image: string
  description: string
  colors: string[]
  sizes?: string[]
  isNew?: boolean
  isHot?: boolean
  stock: number
}

export interface Category {
  id: string
  name: string
  icon: string
}
