export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  tags: string[]
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
}

export interface Category {
  id: number
  name: string
  icon: string
}
