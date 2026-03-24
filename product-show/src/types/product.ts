export interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: 'clothing' | 'hat' | 'accessory'
  subCategory: string
  brand: string
  sizes?: string[]
  colors?: ColorOption[]
  material?: string
  stock: number
  sales: number
  rating: number
  reviewCount: number
  isNew?: boolean
  isHot?: boolean
  tags?: string[]
  createTime: string
}

export interface ColorOption {
  name: string
  value: string
  image?: string
}

export interface Category {
  id: string
  name: string
  icon: string
  children?: SubCategory[]
}

export interface SubCategory {
  id: string
  name: string
  parentId: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
  color: string
}

export interface Review {
  id: number
  productId: number
  userName: string
  avatar: string
  rating: number
  content: string
  images?: string[]
  createTime: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface FilterParams {
  category?: string
  subCategory?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'price-asc' | 'price-desc' | 'sales' | 'newest' | 'rating'
  keyword?: string
}
