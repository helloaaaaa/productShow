<template>
  <div class="product-detail" v-if="product">
    <div class="container">
      <!-- 面包屑导航 -->
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span>/</span>
        <span>{{ product.category }}</span>
        <span>/</span>
        <span>{{ product.name }}</span>
      </nav>

      <div class="product-detail-content">
        <!-- 图片区域 -->
        <div class="product-gallery">
          <div class="main-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="thumbnails">
            <div 
              v-for="(img, index) in thumbnails" 
              :key="index" 
              class="thumbnail"
              :class="{ active: activeThumbnail === index }"
              @click="activeThumbnail = index"
            >
              <img :src="img" :alt="`缩略图 ${index + 1}`" />
            </div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div class="product-info">
          <div class="product-header">
            <div class="product-tags">
              <span v-for="tag in product.tags" :key="tag" :class="['tag', getTagClass(tag)]">
                {{ tag }}
              </span>
            </div>
            <h1 class="product-title">{{ product.name }}</h1>
            <div class="product-rating">
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="stars-fill" :style="{ width: (product.rating / 5) * 100 + '%' }">★★★★★</span>
              </div>
              <span class="rating-value">{{ product.rating }}</span>
              <span class="reviews">({{ product.reviews }} 评价)</span>
            </div>
          </div>

          <div class="product-price-section">
            <div class="price-current">
              <span class="symbol">¥</span>
              <span class="amount">{{ product.price }}</span>
            </div>
            <div class="price-info" v-if="product.originalPrice">
              <span class="price-original">¥{{ product.originalPrice }}</span>
              <span class="discount">-{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%</span>
              <span class="save">省 ¥{{ product.originalPrice - product.price }}</span>
            </div>
          </div>

          <div class="product-description">
            <h3>商品描述</h3>
            <p>{{ product.description }}</p>
          </div>

          <!-- 颜色选择 -->
          <div class="product-option" v-if="product.colors.length > 0">
            <h4>颜色: <span class="selected-value">{{ selectedColor }}</span></h4>
            <div class="color-options">
              <button 
                v-for="color in product.colors" 
                :key="color"
                class="color-option"
                :class="{ active: selectedColor === color }"
                @click="selectedColor = color"
              >
                <span class="color-dot" :style="{ backgroundColor: getColorCode(color) }"></span>
                <span class="color-name">{{ color }}</span>
              </button>
            </div>
          </div>

          <!-- 尺码选择 -->
          <div class="product-option" v-if="product.sizes.length > 0">
            <h4>尺码: <span class="selected-value">{{ selectedSize }}</span></h4>
            <div class="size-options">
              <button 
                v-for="size in product.sizes" 
                :key="size"
                class="size-option"
                :class="{ active: selectedSize === size }"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>
            <a href="#" class="size-guide">尺码指南 →</a>
          </div>

          <!-- 数量选择 -->
          <div class="product-option">
            <h4>数量</h4>
            <div class="quantity-selector">
              <button class="quantity-btn" @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
              <span class="quantity-value">{{ quantity }}</span>
              <button class="quantity-btn" @click="increaseQuantity">+</button>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="product-actions">
            <button class="btn btn-primary btn-lg btn-block" @click="handleAddCart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              加入购物车
            </button>
            <button class="btn btn-outline btn-lg btn-block" @click="handleBuyNow">立即购买</button>
            <button class="btn-favorite" :class="{ active: isFavorite }" @click="toggleFavorite">
              <svg width="24" height="24" viewBox="0 0 24 24" :fill="isFavorite ? '#e53935' : 'none'" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <!-- 服务保障 -->
          <div class="service-guarantee">
            <div class="guarantee-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
              </svg>
              <span>正品保证</span>
            </div>
            <div class="guarantee-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
                <line x1="1" y1="19" x2="15" y2="19"></line>
              </svg>
              <span>免费配送</span>
            </div>
            <div class="guarantee-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23,4 23,10 17,10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              <span>7天无理由退换</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品详情标签页 -->
      <div class="product-tabs">
        <div class="tabs-header">
          <button 
            v-for="(tab, index) in tabs" 
            :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>
        <div class="tab-content">
          <div v-if="activeTab === 0" class="tab-pane">
            <h3>商品详情</h3>
            <p>{{ product.description }}</p>
            <ul>
              <li>优质面料，舒适透气</li>
              <li>精细做工，品质保证</li>
              <li>经典设计，百搭时尚</li>
              <li>多色可选，满足不同需求</li>
            </ul>
          </div>
          <div v-if="activeTab === 1" class="tab-pane">
            <h3>尺码说明</h3>
            <table class="size-table">
              <thead>
                <tr>
                  <th>尺码</th>
                  <th>胸围(cm)</th>
                  <th>肩宽(cm)</th>
                  <th>衣长(cm)</th>
                  <th>袖长(cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>96</td>
                  <td>42</td>
                  <td>66</td>
                  <td>58</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>100</td>
                  <td>44</td>
                  <td>68</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>104</td>
                  <td>46</td>
                  <td>70</td>
                  <td>62</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>108</td>
                  <td>48</td>
                  <td>72</td>
                  <td>64</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="activeTab === 2" class="tab-pane">
            <h3>洗涤说明</h3>
            <div class="wash-instructions">
              <div class="instruction-item">
                <span class="instruction-icon">🌡️</span>
                <span>水温不超过30℃</span>
              </div>
              <div class="instruction-item">
                <span class="instruction-icon">🧼</span>
                <span>使用中性洗涤剂</span>
              </div>
              <div class="instruction-item">
                <span class="instruction-icon">☀️</span>
                <span>阴凉处悬挂晾干</span>
              </div>
              <div class="instruction-item">
                <span class="instruction-icon">🔥</span>
                <span>低温熨烫</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 相关推荐 -->
      <div class="related-products">
        <h2 class="section-title">猜你喜欢</h2>
        <div class="products-grid">
          <ProductCard 
            v-for="p in relatedProducts" 
            :key="p.id" 
            :product="p" 
          />
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="loading">
    <p>商品加载中...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products, getProductById } from '../data/mockData'
import type { Product } from '../types'

const route = useRoute()
const product = ref<Product | null>(null)

const activeThumbnail = ref(0)
const selectedColor = ref('')
const selectedSize = ref('')
const quantity = ref(1)
const isFavorite = ref(false)
const activeTab = ref(0)

const tabs = ['商品详情', '尺码说明', '洗涤说明']

const thumbnails = computed(() => {
  if (!product.value) return []
  return [
    product.value.image,
    product.value.image,
    product.value.image,
    product.value.image
  ]
})

const relatedProducts = computed<Product[]>(() => {
  if (!product.value) return []
  return products
    .filter(p => p.id !== product.value!.id && p.category === product.value!.category)
    .slice(0, 4)
})

const getTagClass = (tag: string): string => {
  const tagMap: Record<string, string> = {
    '新品': 'tag-new',
    '热销': 'tag-hot',
    '特价': 'tag-sale'
  }
  return tagMap[tag] || ''
}

const getColorCode = (color: string): string => {
  const colorMap: Record<string, string> = {
    '蓝色': '#1e88e5',
    '黑色': '#212121',
    '浅蓝': '#64b5f6',
    '灰色': '#78909c',
    '白色': '#ffffff',
    '米色': '#efebe9',
    '酒红': '#b71c1c',
    '棕色': '#5d4037',
    '驼色': '#d7ccc8',
    '粉色': '#f48fb1',
    '红色': '#e53935'
  }
  return colorMap[color] || '#bdbdbd'
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const handleAddCart = () => {
  alert(`已加入购物车：${product.value?.name} x ${quantity.value}`)
}

const handleBuyNow = () => {
  alert(`立即购买：${product.value?.name} x ${quantity.value}`)
}

onMounted(() => {
  const productId = Number(route.params.id)
  product.value = getProductById(productId) || null
  
  if (product.value) {
    selectedColor.value = product.value.colors[0] || ''
    selectedSize.value = product.value.sizes[0] || ''
  }
})
</script>

<style scoped>
.product-detail {
  padding: 40px 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 32px;
}

.breadcrumb a {
  color: var(--primary-color);
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.product-detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

/* 图片画廊 */
.product-gallery {
  position: sticky;
  top: 100px;
  align-self: start;
}

.main-image {
  background-color: var(--background-color);
  border-radius: var(--radius-large);
  overflow: hidden;
  margin-bottom: 16px;
  aspect-ratio: 1;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 12px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-medium);
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all var(--transition-fast);
}

.thumbnail:hover {
  border-color: var(--primary-light);
}

.thumbnail.active {
  border-color: var(--primary-color);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 商品信息 */
.product-header .product-tags {
  margin-bottom: 16px;
}

.product-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 16px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.rating {
  position: relative;
  font-size: 18px;
  line-height: 1;
}

.stars {
  color: #e0e0e0;
}

.stars-fill {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffb300;
  overflow: hidden;
  white-space: nowrap;
}

.rating-value {
  font-weight: 600;
  color: var(--text-primary);
}

.reviews {
  color: var(--text-light);
}

/* 价格区域 */
.product-price-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 24px;
  border-radius: var(--radius-large);
  margin-bottom: 32px;
}

.price-current {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
}

.symbol {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}

.amount {
  font-size: 42px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price-original {
  font-size: 18px;
  color: var(--text-light);
  text-decoration: line-through;
}

.discount {
  background-color: #e53935;
  color: white;
  padding: 2px 8px;
  border-radius: var(--radius-small);
  font-size: 12px;
  font-weight: 600;
}

.save {
  font-size: 14px;
  color: #e53935;
  font-weight: 500;
}

/* 商品描述 */
.product-description {
  margin-bottom: 32px;
}

.product-description h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.product-description p {
  color: var(--text-secondary);
  line-height: 1.8;
}

/* 商品选项 */
.product-option {
  margin-bottom: 24px;
}

.product-option h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.selected-value {
  color: var(--primary-color);
  font-weight: 500;
}

/* 颜色选项 */
.color-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.color-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  background-color: var(--surface-color);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.color-option:hover {
  border-color: var(--primary-light);
}

.color-option.active {
  border-color: var(--primary-color);
  background-color: #e3f2fd;
}

.color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.color-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

/* 尺码选项 */
.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
}

.size-option {
  min-width: 60px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  background-color: var(--surface-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.size-option:hover {
  border-color: var(--primary-light);
}

.size-option.active {
  border-color: var(--primary-color);
  background-color: #e3f2fd;
  color: var(--primary-color);
}

.size-guide {
  font-size: 13px;
  color: var(--primary-color);
}

.size-guide:hover {
  text-decoration: underline;
}

/* 数量选择器 */
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  overflow: hidden;
  width: fit-content;
}

.quantity-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-color);
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
  border: none;
}

.quantity-btn:hover:not(:disabled) {
  background-color: var(--primary-color);
  color: white;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-value {
  width: 60px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  border-left: 2px solid var(--border-color);
  border-right: 2px solid var(--border-color);
}

/* 操作按钮 */
.product-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  position: relative;
}

.btn-block {
  flex: 1;
}

.btn-favorite {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  background-color: var(--surface-color);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-favorite:hover {
  border-color: #e53935;
  color: #e53935;
}

.btn-favorite.active {
  border-color: #e53935;
  background-color: #ffebee;
  color: #e53935;
}

/* 服务保障 */
.service-guarantee {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: var(--radius-medium);
}

.guarantee-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.guarantee-item svg {
  color: var(--primary-color);
}

/* 标签页 */
.product-tabs {
  margin-bottom: 60px;
}

.tabs-header {
  display: flex;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 32px;
}

.tab-btn {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  color: var(--primary-color);
}

.tab-btn.active {
  color: var(--primary-color);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.tab-content {
  min-height: 200px;
}

.tab-pane h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.tab-pane p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.tab-pane ul {
  list-style: none;
  padding: 0;
}

.tab-pane li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.tab-pane li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 600;
}

/* 尺码表 */
.size-table {
  width: 100%;
  border-collapse: collapse;
}

.size-table th,
.size-table td {
  padding: 12px 16px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.size-table th {
  background-color: var(--background-color);
  font-weight: 600;
  color: var(--text-primary);
}

.size-table td {
  color: var(--text-secondary);
}

/* 洗涤说明 */
.wash-instructions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.instruction-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: var(--background-color);
  border-radius: var(--radius-medium);
}

.instruction-icon {
  font-size: 24px;
}

/* 相关推荐 */
.related-products {
  margin-top: 60px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 992px) {
  .product-detail-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .product-gallery {
    position: static;
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-title {
    font-size: 22px;
  }
  
  .amount {
    font-size: 32px;
  }
  
  .product-actions {
    flex-direction: column;
  }
  
  .btn-favorite {
    position: absolute;
    top: 0;
    right: 0;
  }
  
  .wash-instructions {
    grid-template-columns: 1fr;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
