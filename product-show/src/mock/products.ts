import type { Product, Category, Banner, Review } from '@/types/product'

export const banners: Banner[] = [
  {
    id: 1,
    title: '春季新品上市',
    subtitle: '探索2026春夏系列，感受时尚与舒适的完美融合',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=500&fit=crop',
    link: '/products?category=clothing',
    color: '#1e40af'
  },
  {
    id: 2,
    title: '精品帽饰专区',
    subtitle: '精选全球顶级帽饰品牌，彰显独特品味',
    image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=1200&h=500&fit=crop',
    link: '/products?category=hat',
    color: '#1e3a8a'
  },
  {
    id: 3,
    title: '限时特惠活动',
    subtitle: '精选商品低至5折起，限时抢购',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=500&fit=crop',
    link: '/products?sortBy=sales',
    color: '#312e81'
  }
]

export const categories: Category[] = [
  {
    id: 'clothing',
    name: '服装',
    icon: 'Shirt',
    children: [
      { id: 'tshirt', name: 'T恤', parentId: 'clothing' },
      { id: 'shirt', name: '衬衫', parentId: 'clothing' },
      { id: 'sweater', name: '毛衣/卫衣', parentId: 'clothing' },
      { id: 'jacket', name: '外套/夹克', parentId: 'clothing' },
      { id: 'coat', name: '大衣/风衣', parentId: 'clothing' },
      { id: 'pants', name: '裤装', parentId: 'clothing' }
    ]
  },
  {
    id: 'hat',
    name: '帽饰',
    icon: 'Hat',
    children: [
      { id: 'baseball', name: '棒球帽', parentId: 'hat' },
      { id: 'beret', name: '贝雷帽', parentId: 'hat' },
      { id: 'fedora', name: '礼帽', parentId: 'hat' },
      { id: 'beanie', name: '针织帽', parentId: 'hat' },
      { id: 'bucket', name: '渔夫帽', parentId: 'hat' },
      { id: 'sun', name: '遮阳帽', parentId: 'hat' }
    ]
  },
  {
    id: 'accessory',
    name: '配饰',
    icon: 'Sparkles',
    children: [
      { id: 'scarf', name: '围巾', parentId: 'accessory' },
      { id: 'gloves', name: '手套', parentId: 'accessory' },
      { id: 'belt', name: '腰带', parentId: 'accessory' },
      { id: 'tie', name: '领带/领结', parentId: 'accessory' }
    ]
  }
]

export const products: Product[] = [
  // 服装 - T恤
  {
    id: 1,
    name: '纯棉基础款圆领T恤',
    description: '采用100%优质纯棉面料，亲肤透气，经典圆领设计，百搭不挑人。多色可选，是夏季衣橱必备单品。',
    price: 99,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop'
    ],
    category: 'clothing',
    subCategory: 'tshirt',
    brand: 'UrbanStyle',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '白色', value: '#ffffff' },
      { name: '黑色', value: '#1f2937' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '灰色', value: '#6b7280' }
    ],
    material: '100%纯棉',
    stock: 500,
    sales: 2340,
    rating: 4.8,
    reviewCount: 856,
    isHot: true,
    tags: ['热销', '纯棉', '百搭'],
    createTime: '2026-01-15'
  },
  {
    id: 2,
    name: '印花图案短袖T恤',
    description: '时尚印花设计，彰显个性。采用环保印染工艺，色彩持久不褪色。修身版型，展现完美身材。',
    price: 149,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'tshirt',
    brand: 'TrendWave',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: '白色', value: '#ffffff' },
      { name: '米色', value: '#f5f5dc' }
    ],
    material: '95%棉 5%氨纶',
    stock: 300,
    sales: 890,
    rating: 4.6,
    reviewCount: 234,
    isNew: true,
    tags: ['新品', '印花'],
    createTime: '2026-03-01'
  },
  // 服装 - 衬衫
  {
    id: 3,
    name: '商务休闲牛津纺衬衫',
    description: '经典牛津纺面料，挺括有型。适合商务休闲场合，可单穿也可搭配西装。精致细节处理，体现品质感。',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop'
    ],
    category: 'clothing',
    subCategory: 'shirt',
    brand: 'ClassicMan',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: '白色', value: '#ffffff' },
      { name: '浅蓝', value: '#dbeafe' },
      { name: '浅粉', value: '#fce7f3' }
    ],
    material: '100%棉',
    stock: 200,
    sales: 567,
    rating: 4.7,
    reviewCount: 189,
    tags: ['商务', '经典'],
    createTime: '2026-02-10'
  },
  {
    id: 4,
    name: '亚麻透气休闲衬衫',
    description: '天然亚麻面料，透气吸汗，夏季穿着清爽舒适。宽松版型设计，休闲随性。',
    price: 259,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'shirt',
    brand: 'NatureWear',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '原麻色', value: '#d4c4a8' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '军绿', value: '#4b5563' }
    ],
    material: '100%亚麻',
    stock: 150,
    sales: 423,
    rating: 4.5,
    reviewCount: 156,
    isNew: true,
    tags: ['亚麻', '透气'],
    createTime: '2026-03-05'
  },
  // 服装 - 外套
  {
    id: 5,
    name: '经典牛仔夹克',
    description: '复古水洗工艺，经典牛仔蓝。修身版型，百搭时尚。优质牛仔布料，耐磨耐穿。',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=750&fit=crop'
    ],
    category: 'clothing',
    subCategory: 'jacket',
    brand: 'DenimCo',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '深蓝', value: '#1e3a8a' },
      { name: '浅蓝', value: '#60a5fa' },
      { name: '黑色', value: '#1f2937' }
    ],
    material: '98%棉 2%氨纶',
    stock: 180,
    sales: 756,
    rating: 4.8,
    reviewCount: 312,
    isHot: true,
    tags: ['经典', '牛仔', '百搭'],
    createTime: '2026-01-20'
  },
  {
    id: 6,
    name: '轻薄防风运动外套',
    description: '轻薄透气面料，防风防泼水。适合户外运动和日常穿着。连帽设计，实用美观。',
    price: 359,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'jacket',
    brand: 'SportMax',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '灰色', value: '#6b7280' },
      { name: '藏青', value: '#1e3a8a' }
    ],
    material: '100%聚酯纤维',
    stock: 250,
    sales: 634,
    rating: 4.6,
    reviewCount: 278,
    tags: ['运动', '防风'],
    createTime: '2026-02-15'
  },
  // 帽饰 - 棒球帽
  {
    id: 7,
    name: '经典弯檐棒球帽',
    description: '经典六片式版型，弯檐设计修饰脸型。可调节扣带，适合各种头围。刺绣logo，精致时尚。',
    price: 129,
    originalPrice: 169,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop'
    ],
    category: 'hat',
    subCategory: 'baseball',
    brand: 'CapMaster',
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '白色', value: '#ffffff' },
      { name: '红色', value: '#dc2626' }
    ],
    material: '100%棉',
    stock: 400,
    sales: 1567,
    rating: 4.7,
    reviewCount: 523,
    isHot: true,
    tags: ['经典', '百搭'],
    createTime: '2026-01-10'
  },
  {
    id: 8,
    name: '复古水洗牛仔棒球帽',
    description: '复古水洗牛仔面料，做旧工艺处理，彰显个性。软顶设计，佩戴舒适。',
    price: 159,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop',
    category: 'hat',
    subCategory: 'baseball',
    brand: 'DenimCo',
    colors: [
      { name: '深蓝', value: '#1e3a8a' },
      { name: '浅蓝', value: '#60a5fa' }
    ],
    material: '100%棉',
    stock: 200,
    sales: 445,
    rating: 4.5,
    reviewCount: 167,
    isNew: true,
    tags: ['复古', '牛仔'],
    createTime: '2026-03-08'
  },
  // 帽饰 - 贝雷帽
  {
    id: 9,
    name: '法式羊毛贝雷帽',
    description: '优质羊毛材质，手感柔软。经典法式贝雷帽版型，优雅时尚。多色可选，适合各种风格搭配。',
    price: 189,
    image: 'https://images.unsplash.com/photo-1575428652377-a2697242636b?w=400&h=500&fit=crop',
    category: 'hat',
    subCategory: 'beret',
    brand: 'ParisStyle',
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '酒红', value: '#7f1d1d' },
      { name: '驼色', value: '#92400e' },
      { name: '灰色', value: '#6b7280' }
    ],
    material: '80%羊毛 20%尼龙',
    stock: 150,
    sales: 389,
    rating: 4.8,
    reviewCount: 145,
    tags: ['法式', '优雅'],
    createTime: '2026-02-20'
  },
  // 帽饰 - 针织帽
  {
    id: 10,
    name: '加厚保暖针织帽',
    description: '加厚毛线编织，保暖性极佳。翻边设计，可自由调整佩戴方式。冬季必备单品。',
    price: 99,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=500&fit=crop',
    category: 'hat',
    subCategory: 'beanie',
    brand: 'WarmWinter',
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '灰色', value: '#6b7280' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '酒红', value: '#7f1d1d' }
    ],
    material: '100%腈纶',
    stock: 350,
    sales: 1234,
    rating: 4.6,
    reviewCount: 456,
    isHot: true,
    tags: ['保暖', '冬季'],
    createTime: '2026-01-05'
  },
  // 帽饰 - 渔夫帽
  {
    id: 11,
    name: '日系纯棉渔夫帽',
    description: '简约日系风格，纯棉面料透气舒适。宽檐设计，有效遮阳防晒。可折叠收纳，方便携带。',
    price: 119,
    image: 'https://images.unsplash.com/photo-1560774358-d727658f457c?w=400&h=500&fit=crop',
    category: 'hat',
    subCategory: 'bucket',
    brand: 'TokyoStyle',
    colors: [
      { name: '米色', value: '#f5f5dc' },
      { name: '卡其', value: '#d4c4a8' },
      { name: '黑色', value: '#1f2937' }
    ],
    material: '100%棉',
    stock: 280,
    sales: 678,
    rating: 4.5,
    reviewCount: 234,
    isNew: true,
    tags: ['日系', '防晒'],
    createTime: '2026-03-10'
  },
  // 帽饰 - 礼帽
  {
    id: 12,
    name: '复古羊毛礼帽',
    description: '经典费多拉帽型，优质羊毛毡制作。复古优雅，适合正式场合佩戴。手工制作，品质保证。',
    price: 399,
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&h=500&fit=crop',
    category: 'hat',
    subCategory: 'fedora',
    brand: 'Gentleman',
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '深灰', value: '#374151' },
      { name: '驼色', value: '#92400e' }
    ],
    material: '100%羊毛毡',
    stock: 80,
    sales: 234,
    rating: 4.9,
    reviewCount: 89,
    tags: ['复古', '优雅'],
    createTime: '2026-02-25'
  },
  // 配饰 - 围巾
  {
    id: 13,
    name: '羊绒混纺围巾',
    description: '羊绒与羊毛混纺，柔软亲肤。经典格纹图案，百搭时尚。大尺寸设计，可做披肩使用。',
    price: 259,
    originalPrice: 329,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop',
    category: 'accessory',
    subCategory: 'scarf',
    brand: 'LuxWrap',
    colors: [
      { name: '驼色格', value: '#92400e' },
      { name: '灰格', value: '#6b7280' },
      { name: '藏青格', value: '#1e3a8a' }
    ],
    material: '30%羊绒 70%羊毛',
    stock: 200,
    sales: 567,
    rating: 4.7,
    reviewCount: 198,
    isHot: true,
    tags: ['羊绒', '保暖'],
    createTime: '2026-01-25'
  },
  {
    id: 14,
    name: '轻薄丝质围巾',
    description: '桑蚕丝面料，轻薄透气。优雅印花设计，适合春夏季节。精致卷边工艺，品质感满满。',
    price: 199,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop',
    category: 'accessory',
    subCategory: 'scarf',
    brand: 'SilkTouch',
    colors: [
      { name: '粉色', value: '#fce7f3' },
      { name: '蓝色', value: '#dbeafe' },
      { name: '米色', value: '#f5f5dc' }
    ],
    material: '100%桑蚕丝',
    stock: 150,
    sales: 345,
    rating: 4.6,
    reviewCount: 134,
    isNew: true,
    tags: ['真丝', '轻薄'],
    createTime: '2026-03-12'
  },
  // 配饰 - 手套
  {
    id: 15,
    name: '触屏保暖皮手套',
    description: '优质羊皮制作，内里加绒保暖。触屏指尖设计，无需脱手套即可操作手机。经典款式，商务休闲皆宜。',
    price: 179,
    image: 'https://images.unsplash.com/photo-1605218427306-022ba6c5544f?w=400&h=500&fit=crop',
    category: 'accessory',
    subCategory: 'gloves',
    brand: 'LeatherPro',
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '棕色', value: '#92400e' }
    ],
    material: '羊皮',
    stock: 180,
    sales: 423,
    rating: 4.5,
    reviewCount: 167,
    tags: ['触屏', '保暖'],
    createTime: '2026-02-05'
  },
  // 更多服装
  {
    id: 16,
    name: '中长款风衣外套',
    description: '经典 trench coat 版型，防风防泼水面料。腰带收腰设计，展现优雅身姿。双排扣设计，英伦风范。',
    price: 699,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'coat',
    brand: 'BritishStyle',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: '卡其', value: '#d4c4a8' },
      { name: '黑色', value: '#1f2937' },
      { name: '藏青', value: '#1e3a8a' }
    ],
    material: '65%聚酯纤维 35%棉',
    stock: 120,
    sales: 345,
    rating: 4.8,
    reviewCount: 123,
    isHot: true,
    tags: ['经典', '风衣'],
    createTime: '2026-02-01'
  },
  {
    id: 17,
    name: '修身休闲西裤',
    description: '修身版型，展现腿部线条。免烫面料，易于打理。适合商务休闲多种场合。',
    price: 259,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'pants',
    brand: 'BusinessPro',
    sizes: ['28', '29', '30', '31', '32', '33', '34', '36'],
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '灰色', value: '#6b7280' }
    ],
    material: '78%聚酯纤维 22%粘纤',
    stock: 250,
    sales: 678,
    rating: 4.4,
    reviewCount: 234,
    tags: ['商务', '修身'],
    createTime: '2026-01-18'
  },
  {
    id: 18,
    name: '圆领套头卫衣',
    description: '加绒内里，保暖舒适。简约纯色设计，百搭时尚。罗纹袖口和下摆，防风保暖。',
    price: 199,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
    category: 'clothing',
    subCategory: 'sweater',
    brand: 'StreetWear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '黑色', value: '#1f2937' },
      { name: '灰色', value: '#6b7280' },
      { name: '藏青', value: '#1e3a8a' },
      { name: '酒红', value: '#7f1d1d' }
    ],
    material: '65%棉 35%聚酯纤维',
    stock: 400,
    sales: 1456,
    rating: 4.6,
    reviewCount: 567,
    isHot: true,
    tags: ['休闲', '保暖'],
    createTime: '2026-01-12'
  }
]

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    userName: '时尚达人',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    rating: 5,
    content: '面料很舒服，纯棉的透气性很好。版型也不错，修身但不紧绷。已经回购了三个颜色！',
    createTime: '2026-03-15'
  },
  {
    id: 2,
    productId: 1,
    userName: '购物狂',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    rating: 4,
    content: '性价比很高，质量超出预期。就是尺码偏小，建议买大一码。',
    createTime: '2026-03-10'
  },
  {
    id: 3,
    productId: 7,
    userName: '帽子控',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    rating: 5,
    content: '帽型很好，戴着很显脸小。做工也很精细，没有线头。',
    createTime: '2026-03-12'
  },
  {
    id: 4,
    productId: 10,
    userName: '冬季必备',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    rating: 5,
    content: '非常暖和！毛线很厚实，冬天戴完全不会冷。颜色也很正。',
    createTime: '2026-03-08'
  }
]

// 模拟API函数
export const mockApi = {
  getBanners: (): Promise<Banner[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(banners), 300)
    })
  },

  getCategories: (): Promise<Category[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(categories), 300)
    })
  },

  getProducts: (params?: {
    category?: string
    subCategory?: string
    page?: number
    pageSize?: number
    sortBy?: string
  }): Promise<{ list: Product[]; total: number }> => {
    return new Promise((resolve) => {
      let result = [...products]

      if (params?.category) {
        result = result.filter((p) => p.category === params.category)
      }

      if (params?.subCategory) {
        result = result.filter((p) => p.subCategory === params.subCategory)
      }

      if (params?.sortBy) {
        switch (params.sortBy) {
          case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
          case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
          case 'sales':
            result.sort((a, b) => b.sales - a.sales)
            break
          case 'newest':
            result.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime())
            break
          case 'rating':
            result.sort((a, b) => b.rating - a.rating)
            break
        }
      }

      const page = params?.page || 1
      const pageSize = params?.pageSize || 12
      const start = (page - 1) * pageSize
      const end = start + pageSize

      setTimeout(() => {
        resolve({
          list: result.slice(start, end),
          total: result.length
        })
      }, 500)
    })
  },

  getProductById: (id: number): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      const product = products.find((p) => p.id === id)
      setTimeout(() => resolve(product), 300)
    })
  },

  getProductReviews: (productId: number): Promise<Review[]> => {
    return new Promise((resolve) => {
      const productReviews = reviews.filter((r) => r.productId === productId)
      setTimeout(() => resolve(productReviews), 300)
    })
  },

  getHotProducts: (): Promise<Product[]> => {
    return new Promise((resolve) => {
      const hotProducts = products.filter((p) => p.isHot).slice(0, 8)
      setTimeout(() => resolve(hotProducts), 300)
    })
  },

  getNewProducts: (): Promise<Product[]> => {
    return new Promise((resolve) => {
      const newProducts = products.filter((p) => p.isNew).slice(0, 8)
      setTimeout(() => resolve(newProducts), 300)
    })
  },

  searchProducts: (keyword: string): Promise<Product[]> => {
    return new Promise((resolve) => {
      const result = products.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword.toLowerCase()) ||
          p.description.toLowerCase().includes(keyword.toLowerCase()) ||
          p.brand.toLowerCase().includes(keyword.toLowerCase())
      )
      setTimeout(() => resolve(result), 500)
    })
  }
}
