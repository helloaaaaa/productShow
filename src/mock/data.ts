import type { Product, Category } from '@/types'

export const categories: Category[] = [
  { id: 'all', name: '全部商品', icon: '🏪' },
  { id: 'hats', name: '帽子专区', icon: '🎩' },
  { id: 'clothing', name: '服装专区', icon: '👔' }
]

export const products: Product[] = [
  {
    id: 1,
    name: '经典棒球帽',
    category: 'hat',
    price: 89,
    originalPrice: 129,
    image: 'https://picsum.photos/400/400?random=1',
    description: '优质棉质面料，透气舒适，经典六片式设计，可调节后扣，适合日常休闲搭配。',
    colors: ['黑色', '白色', '深蓝', '灰色'],
    sizes: ['均码'],
    isNew: true,
    stock: 156
  },
  {
    id: 2,
    name: '英伦风礼帽',
    category: 'hat',
    price: 259,
    originalPrice: 359,
    image: 'https://picsum.photos/400/400?random=2',
    description: '复古英伦风格，优质羊毛混纺材质，精致做工，彰显优雅气质。',
    colors: ['驼色', '黑色', '灰色'],
    sizes: ['M', 'L', 'XL'],
    isHot: true,
    stock: 89
  },
  {
    id: 3,
    name: '渔夫帽',
    category: 'hat',
    price: 69,
    image: 'https://picsum.photos/400/400?random=3',
    description: '宽松版型，遮阳效果好，柔软舒适，可折叠便携，夏日出行必备。',
    colors: ['米色', '卡其色', '军绿', '藏蓝'],
    sizes: ['均码'],
    isNew: true,
    stock: 234
  },
  {
    id: 4,
    name: '针织毛线帽',
    category: 'hat',
    price: 59,
    originalPrice: 79,
    image: 'https://picsum.photos/400/400?random=4',
    description: '柔软亲肤羊毛混纺，保暖舒适，简约设计，秋冬必备单品。',
    colors: ['米白', '灰色', '酒红', '墨绿'],
    sizes: ['均码'],
    stock: 178
  },
  {
    id: 5,
    name: '鸭舌帽',
    category: 'hat',
    price: 99,
    image: 'https://picsum.photos/400/400?random=5',
    description: '潮流时尚款，优质帆布材质，透气网眼设计，运动休闲两相宜。',
    colors: ['黑色', '白色', '深灰', '藏蓝'],
    sizes: ['均码'],
    isHot: true,
    stock: 145
  },
  {
    id: 6,
    name: '贝雷帽',
    category: 'hat',
    price: 79,
    originalPrice: 99,
    image: 'https://picsum.photos/400/400?random=6',
    description: '法式优雅风格，柔软羊毛呢材质，文艺气质满满，四季可戴。',
    colors: ['黑色', '酒红', '驼色', '灰色'],
    sizes: ['均码'],
    isNew: true,
    stock: 112
  },
  {
    id: 7,
    name: '休闲连帽卫衣',
    category: 'clothing',
    price: 199,
    originalPrice: 299,
    image: 'https://picsum.photos/400/400?random=7',
    description: '优质纯棉面料，宽松版型，舒适透气，经典连帽设计，休闲百搭。',
    colors: ['黑色', '白色', '灰色', '藏蓝'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isHot: true,
    stock: 267
  },
  {
    id: 8,
    name: '商务休闲夹克',
    category: 'clothing',
    price: 459,
    originalPrice: 599,
    image: 'https://picsum.photos/400/400?random=8',
    description: '精选面料，立体剪裁，商务休闲两相宜，彰显成熟稳重气质。',
    colors: ['黑色', '深灰', '藏蓝'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 89
  },
  {
    id: 9,
    name: '纯棉圆领T恤',
    category: 'clothing',
    price: 79,
    image: 'https://picsum.photos/400/400?random=9',
    description: '100%纯棉面料，柔软亲肤，透气舒适，简约基础款，百搭必备。',
    colors: ['白色', '黑色', '灰色', '藏蓝', '酒红'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    stock: 456
  },
  {
    id: 10,
    name: '修身牛仔裤',
    category: 'clothing',
    price: 259,
    originalPrice: 359,
    image: 'https://picsum.photos/400/400?random=10',
    description: '优质牛仔面料，修身版型，弹力舒适，经典百搭款式。',
    colors: ['深蓝', '浅蓝', '黑色'],
    sizes: ['28', '30', '32', '34', '36'],
    isHot: true,
    stock: 178
  },
  {
    id: 11,
    name: '轻薄羽绒服',
    category: 'clothing',
    price: 399,
    originalPrice: 599,
    image: 'https://picsum.photos/400/400?random=11',
    description: '90%白鸭绒填充，轻薄保暖，便携收纳，秋冬出行首选。',
    colors: ['黑色', '白色', '藏蓝', '军绿'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 134
  },
  {
    id: 12,
    name: '休闲工装裤',
    category: 'clothing',
    price: 189,
    image: 'https://picsum.photos/400/400?random=12',
    description: '耐磨面料，多口袋设计，宽松舒适，户外休闲必备。',
    colors: ['卡其色', '军绿', '黑色', '深灰'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    isNew: true,
    stock: 167
  },
  {
    id: 13,
    name: '羊毛混纺大衣',
    category: 'clothing',
    price: 699,
    originalPrice: 999,
    image: 'https://picsum.photos/400/400?random=13',
    description: '优质羊毛混纺面料，经典双排扣设计，优雅大气，冬季必备。',
    colors: ['驼色', '黑色', '灰色', '藏蓝'],
    sizes: ['M', 'L', 'XL'],
    stock: 56
  },
  {
    id: 14,
    name: '运动风衣',
    category: 'clothing',
    price: 299,
    image: 'https://picsum.photos/400/400?random=14',
    description: '防风透气面料，轻便舒适，运动休闲两相宜，四季可穿。',
    colors: ['黑色', '藏蓝', '灰色', '白色'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isHot: true,
    stock: 198
  },
  {
    id: 15,
    name: '复古格纹衬衫',
    category: 'clothing',
    price: 159,
    originalPrice: 199,
    image: 'https://picsum.photos/400/400?random=15',
    description: '经典格纹设计，优质棉质面料，舒适透气，复古文艺风格。',
    colors: ['红黑格', '蓝白格', '灰白格'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 145
  },
  {
    id: 16,
    name: '草编遮阳帽',
    category: 'hat',
    price: 129,
    image: 'https://picsum.photos/400/400?random=16',
    description: '天然草编材质，宽檐遮阳设计，度假风满满，夏日必备。',
    colors: ['原色', '米白', '深棕'],
    sizes: ['均码'],
    isNew: true,
    stock: 78
  }
]

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  if (category === 'hats') return products.filter(p => p.category === 'hat')
  if (category === 'clothing') return products.filter(p => p.category === 'clothing')
  return products
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id)
}

export function getHotProducts(): Product[] {
  return products.filter(p => p.isHot)
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.isNew)
}
