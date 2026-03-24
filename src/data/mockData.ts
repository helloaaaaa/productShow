import type { Product, Category } from '../types'

export const categories: Category[] = [
  { id: 1, name: '外套', icon: '🧥' },
  { id: 2, name: '卫衣', icon: '👕' },
  { id: 3, name: '帽子', icon: '🎩' },
  { id: 4, name: '围巾', icon: '🧣' },
  { id: 5, name: '手套', icon: '🧤' },
  { id: 6, name: '鞋子', icon: '👟' }
]

export const products: Product[] = [
  {
    id: 1,
    name: '经典蓝色牛仔外套',
    price: 299,
    originalPrice: 399,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20denim%20jacket%20fashion%20photography%20white%20background&image_size=square_hd',
    category: '外套',
    description: '采用优质牛仔面料，经典版型设计，百搭时尚。适合春秋季节穿着，舒适透气，做工精细。',
    tags: ['新品', '热销'],
    colors: ['蓝色', '黑色', '浅蓝'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 256
  },
  {
    id: 2,
    name: '休闲连帽卫衣',
    price: 199,
    originalPrice: 249,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=casual%20blue%20hoodie%20sweatshirt%20fashion%20white%20background&image_size=square_hd',
    category: '卫衣',
    description: '柔软舒适的棉质面料，简约大方的设计，适合日常休闲穿着。多色可选，易搭配。',
    tags: ['热销'],
    colors: ['蓝色', '灰色', '黑色', '白色'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviews: 189
  },
  {
    id: 3,
    name: '英伦风格贝雷帽',
    price: 89,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20beret%20hat%20fashion%20accessory%20white%20background&image_size=square_hd',
    category: '帽子',
    description: '经典英伦风格，优质羊毛混纺面料，保暖舒适，时尚百搭，适合各种场合佩戴。',
    tags: ['新品'],
    colors: ['蓝色', '黑色', '米色', '酒红'],
    sizes: ['均码'],
    rating: 4.5,
    reviews: 98
  },
  {
    id: 4,
    name: '格纹羊绒围巾',
    price: 159,
    originalPrice: 199,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20plaid%20cashmere%20scarf%20fashion%20white%20background&image_size=square_hd',
    category: '围巾',
    description: '高档羊绒面料，格纹设计经典时尚，保暖性能优异，是秋冬季节的必备单品。',
    tags: ['热销', '特价'],
    colors: ['蓝格', '灰格', '棕格'],
    sizes: ['均码'],
    rating: 4.9,
    reviews: 312
  },
  {
    id: 5,
    name: '真皮保暖手套',
    price: 129,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20leather%20gloves%20warm%20fashion%20white%20background&image_size=square_hd',
    category: '手套',
    description: '优质真皮材质，内里加绒保暖，触屏设计方便使用手机，经典款式永不过时。',
    tags: ['新品'],
    colors: ['蓝色', '黑色', '棕色'],
    sizes: ['S', 'M', 'L'],
    rating: 4.7,
    reviews: 145
  },
  {
    id: 6,
    name: '运动休闲板鞋',
    price: 259,
    originalPrice: 329,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20sneakers%20casual%20shoes%20fashion%20white%20background&image_size=square_hd',
    category: '鞋子',
    description: '轻便舒适的运动板鞋，透气网面设计，减震鞋底，适合日常穿着和轻度运动。',
    tags: ['热销', '特价'],
    colors: ['蓝色', '白色', '黑色', '红色'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    rating: 4.4,
    reviews: 267
  },
  {
    id: 7,
    name: '双排扣毛呢大衣',
    price: 459,
    originalPrice: 599,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20wool%20coat%20double%20breasted%20fashion%20white%20background&image_size=square_hd',
    category: '外套',
    description: '高端毛呢面料，经典双排扣设计，修身版型，保暖性能出色，职场休闲两相宜。',
    tags: ['新品', '热销'],
    colors: ['蓝色', '驼色', '黑色', '灰色'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 198
  },
  {
    id: 8,
    name: '字母印花棒球帽',
    price: 69,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20baseball%20cap%20with%20logo%20fashion%20white%20background&image_size=square_hd',
    category: '帽子',
    description: '休闲棒球帽，正面字母印花，可调节帽围，棉质面料舒适透气，日常搭配必备。',
    tags: [],
    colors: ['蓝色', '黑色', '白色', '粉色'],
    sizes: ['均码'],
    rating: 4.3,
    reviews: 87
  }
]

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category)
}
