<template>
  <div v-if="product" class="product-detail-view">
    <div class="container">
      <!-- 面包屑 -->
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span class="separator">/</span>
        <router-link :to="`/products?category=${product.category}`">
          {{ categoryName }}
        </router-link>
        <span class="separator">/</span>
        <span class="current">{{ product.name }}</span>
      </nav>

      <!-- 商品详情区 -->
      <div class="product-detail">
        <!-- 图片区 -->
        <div class="product-gallery">
          <div class="main-image">
            <img :src="currentImage" :alt="product.name" />
            <div v-if="product.isHot" class="badge hot">热销</div>
            <div v-if="product.isNew" class="badge new">新品</div>
          </div>
          <div v-if="product.images && product.images.length > 1" class="thumbnail-list">
            <button
              v-for="(img, index) in product.images"
              :key="index"
              :class="['thumbnail', { active: currentImage === img }]"
              @click="currentImage = img"
            >
              <img :src="img" :alt="`${product.name}-${index}`" />
            </button>
          </div>
        </div>

        <!-- 信息区 -->
        <div class="product-info">
          <div class="info-header">
            <span class="brand">{{ product.brand }}</span>
            <h1 class="name">{{ product.name }}</h1>
            <div class="meta">
              <div class="rating">
                <span class="stars">
                  <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :fill="i <= Math.round(product.rating) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <span class="score">{{ product.rating }}</span>
                <span class="count">({{ product.reviewCount }}条评价)</span>
              </div>
              <span class="sales">已售 {{ product.sales }} 件</span>
            </div>
          </div>

          <div class="info-price">
            <div class="price-row">
              <span class="symbol">¥</span>
              <span class="value">{{ product.price }}</span>
              <span v-if="product.originalPrice" class="original">
                ¥{{ product.originalPrice }}
              </span>
              <span v-if="product.originalPrice" class="discount">
                {{ Math.round((1 - product.price / product.originalPrice) * 100) }}%OFF
              </span>
            </div>
          </div>

          <p class="description">{{ product.description }}</p>

          <!-- 规格选择 -->
          <div v-if="product.colors" class="spec-section">
            <h3>颜色</h3>
            <div class="color-options">
              <button
                v-for="color in product.colors"
                :key="color.name"
                :class="['color-btn', { active: selectedColor === color.name }]"
                @click="selectedColor = color.name"
              >
                <span class="dot" :style="{ backgroundColor: color.value }" />
                <span class="name">{{ color.name }}</span>
              </button>
            </div>
          </div>

          <div v-if="product.sizes" class="spec-section">
            <h3>尺码</h3>
            <div class="size-options">
              <button
                v-for="size in product.sizes"
                :key="size"
                :class="['size-btn', { active: selectedSize === size }]"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- 数量 -->
          <div class="spec-section">
            <h3>数量</h3>
            <div class="quantity-selector">
              <button @click="quantity > 1 && quantity--">-</button>
              <input v-model.number="quantity" type="number" min="1" :max="product.stock" />
              <button @click="quantity < product.stock && quantity++">+</button>
            </div>
            <span class="stock">库存 {{ product.stock }} 件</span>
          </div>

          <!-- 操作按钮 -->
          <div class="actions">
            <button class="btn-add-cart" @click="addToCart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              加入购物车
            </button>
            <button class="btn-buy" @click="buyNow">立即购买</button>
            <button class="btn-favorite" @click="toggleFavorite">
              <svg
                viewBox="0 0 24 24"
                :fill="isFavorite ? 'currentColor' : 'none'"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          <!-- 服务承诺 -->
          <div class="services">
            <div class="service-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>正品保证</span>
            </div>
            <div class="service-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
              <span>免费配送</span>
            </div>
            <div class="service-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
              <span>7天退换</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 详情标签页 -->
      <div class="detail-tabs">
        <div class="tab-header">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            :class="['tab-btn', { active: activeTab === tab.key }]"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="tab-content">
          <!-- 商品详情 -->
          <div v-if="activeTab === 'detail'" class="tab-panel">
            <div class="detail-section">
              <h3>商品参数</h3>
              <table class="param-table">
                <tr>
                  <td>品牌</td>
                  <td>{{ product.brand }}</td>
                </tr>
                <tr>
                  <td>分类</td>
                  <td>{{ categoryName }}</td>
                </tr>
                <tr v-if="product.material">
                  <td>材质</td>
                  <td>{{ product.material }}</td>
                </tr>
                <tr v-if="product.sizes">
                  <td>尺码</td>
                  <td>{{ product.sizes.join('、') }}</td>
                </tr>
                <tr v-if="product.colors">
                  <td>颜色</td>
                  <td>{{ product.colors.map(c => c.name).join('、') }}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- 评价 -->
          <div v-if="activeTab === 'reviews'" class="tab-panel">
            <div v-if="reviews.length === 0" class="empty-reviews">
              暂无评价
            </div>
            <div v-else class="reviews-list">
              <div v-for="review in reviews" :key="review.id" class="review-item">
                <div class="review-header">
                  <img :src="review.avatar" :alt="review.userName" class="avatar" />
                  <div class="info">
                    <span class="name">{{ review.userName }}</span>
                    <div class="rating">
                      <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :fill="i <= review.rating ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                  </div>
                  <span class="date">{{ review.createTime }}</span>
                </div>
                <p class="content">{{ review.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 加载状态 -->
  <div v-else-if="loading" class="loading-page">
    <div class="loading-spinner" />
    <p>加载中...</p>
  </div>

  <!-- 错误状态 -->
  <div v-else class="error-page">
    <h2>商品不存在</h2>
    <router-link to="/products" class="btn-primary">返回商品列表</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockApi } from '@/mock/products'
import type { Product, Review } from '@/types/product'

const route = useRoute()
const router = useRouter()

const product = ref<Product | null>(null)
const reviews = ref<Review[]>([])
const loading = ref(true)
const currentImage = ref('')
const selectedColor = ref('')
const selectedSize = ref('')
const quantity = ref(1)
const isFavorite = ref(false)
const activeTab = ref('detail')

const tabs = [
  { key: 'detail', label: '商品详情' },
  { key: 'reviews', label: '用户评价' }
]

const categoryName = computed(() => {
  const names: Record<string, string> = {
    clothing: '服装',
    hat: '帽饰',
    accessory: '配饰'
  }
  return names[product.value?.category || ''] || '商品'
})

const fetchProduct = async () => {
  const id = Number(route.params.id)
  if (!id) {
    loading.value = false
    return
  }

  const data = await mockApi.getProductById(id)
  if (data) {
    product.value = data
    currentImage.value = data.image
    if (data.colors && data.colors.length > 0) selectedColor.value = data.colors[0]?.name ?? ''
    if (data.sizes && data.sizes.length > 0) selectedSize.value = data.sizes[0] ?? ''
    fetchReviews(id)
  }
  loading.value = false
}

const fetchReviews = async (productId: number) => {
  reviews.value = await mockApi.getProductReviews(productId)
}

const addToCart = () => {
  if (!product.value) return
  alert(`已将 ${quantity.value} 件 "${product.value.name}" 加入购物车`)
}

const buyNow = () => {
  alert('立即购买功能开发中...')
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

onMounted(() => {
  fetchProduct()
})
</script>

<style scoped>
.product-detail-view {
  padding-top: 90px;
  padding-bottom: 60px;
  background: var(--gray-50);
  min-height: 100vh;
}

/* 面包屑 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  font-size: 14px;
}

.breadcrumb a {
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: var(--primary-600);
}

.breadcrumb .separator {
  color: var(--gray-400);
}

.breadcrumb .current {
  color: var(--gray-800);
  font-weight: 500;
}

/* 商品详情区 */
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  margin-bottom: 40px;
}

/* 图片区 */
.product-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-image {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--gray-100);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.badge.hot {
  background: linear-gradient(135deg, #fecaca, #fca5a5);
  color: #991b1b;
}

.badge.new {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
}

.thumbnail-list {
  display: flex;
  gap: 12px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border: 2px solid transparent;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  background: var(--gray-100);
  transition: all 0.3s ease;
}

.thumbnail.active {
  border-color: var(--primary-500);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 信息区 */
.product-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-header .brand {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-600);
  background: var(--primary-50);
  border-radius: var(--radius-full);
  margin-bottom: 12px;
}

.info-header .name {
  font-size: 28px;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.4;
  margin-bottom: 16px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 20px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
  color: #f59e0b;
}

.stars svg {
  width: 16px;
  height: 16px;
}

.score {
  font-weight: 600;
  color: var(--gray-800);
}

.count {
  font-size: 14px;
  color: var(--gray-500);
}

.sales {
  font-size: 14px;
  color: var(--gray-500);
}

/* 价格 */
.info-price {
  padding: 20px;
  background: linear-gradient(135deg, var(--primary-50), #eff6ff);
  border-radius: var(--radius-lg);
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.symbol {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-700);
}

.value {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-700);
}

.original {
  font-size: 18px;
  color: var(--gray-400);
  text-decoration: line-through;
}

.discount {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-radius: var(--radius-full);
}

.description {
  font-size: 15px;
  line-height: 1.8;
  color: var(--gray-600);
}

/* 规格选择 */
.spec-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spec-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-700);
}

.color-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.color-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-btn:hover {
  border-color: var(--primary-400);
}

.color-btn.active {
  border-color: var(--primary-500);
  background: var(--primary-50);
}

.color-btn .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--gray-200);
}

.color-btn .name {
  font-size: 14px;
  color: var(--gray-700);
}

.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.size-btn {
  min-width: 50px;
  padding: 10px 16px;
  font-size: 14px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.size-btn:hover {
  border-color: var(--primary-400);
}

.size-btn.active {
  border-color: var(--primary-500);
  background: var(--primary-500);
  color: white;
}

/* 数量选择 */
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0;
}

.quantity-selector button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--gray-200);
  background: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quantity-selector button:first-child {
  border-radius: var(--radius) 0 0 var(--radius);
}

.quantity-selector button:last-child {
  border-radius: 0 var(--radius) var(--radius) 0;
}

.quantity-selector button:hover {
  background: var(--gray-50);
}

.quantity-selector input {
  width: 60px;
  height: 40px;
  border: 1px solid var(--gray-200);
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 14px;
  outline: none;
}

.stock {
  font-size: 13px;
  color: var(--gray-500);
}

/* 操作按钮 */
.actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn-add-cart {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-700);
  background: var(--primary-50);
  border: 1px solid var(--primary-200);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add-cart:hover {
  background: var(--primary-100);
}

.btn-add-cart svg {
  width: 20px;
  height: 20px;
}

.btn-buy {
  flex: 1;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-buy:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-favorite {
  width: 56px;
  height: 56px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: white;
  color: var(--gray-400);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-favorite:hover {
  border-color: #ef4444;
  color: #ef4444;
}

.btn-favorite svg {
  width: 24px;
  height: 24px;
}

/* 服务承诺 */
.services {
  display: flex;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--gray-100);
}

.service-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--gray-600);
}

.service-item svg {
  width: 16px;
  height: 16px;
  color: var(--primary-500);
}

/* 详情标签页 */
.detail-tabs {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid var(--gray-100);
}

.tab-btn {
  padding: 20px 40px;
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-600);
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  color: var(--primary-600);
}

.tab-btn.active {
  color: var(--primary-700);
  font-weight: 600;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-500);
}

.tab-content {
  padding: 40px;
}

.detail-section h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 20px;
}

.param-table {
  width: 100%;
  border-collapse: collapse;
}

.param-table td {
  padding: 16px 20px;
  font-size: 14px;
  border-bottom: 1px solid var(--gray-100);
}

.param-table td:first-child {
  width: 150px;
  color: var(--gray-500);
  background: var(--gray-50);
}

.param-table td:last-child {
  color: var(--gray-700);
}

/* 评价 */
.empty-reviews {
  text-align: center;
  padding: 60px 0;
  color: var(--gray-500);
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.review-item {
  padding: 24px;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.review-header .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.review-header .info {
  flex: 1;
}

.review-header .name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 4px;
}

.review-header .rating {
  display: flex;
  gap: 2px;
  color: #f59e0b;
}

.review-header .rating svg {
  width: 14px;
  height: 14px;
}

.review-header .date {
  font-size: 13px;
  color: var(--gray-400);
}

.review-item .content {
  font-size: 14px;
  line-height: 1.8;
  color: var(--gray-600);
}

/* 加载和错误状态 */
.loading-page,
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding-top: 90px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-page h2 {
  font-size: 24px;
  color: var(--gray-700);
  margin-bottom: 20px;
}

/* 响应式 */
@media (max-width: 992px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 576px) {
  .product-detail {
    padding: 24px;
  }

  .info-header .name {
    font-size: 22px;
  }

  .value {
    font-size: 28px;
  }

  .actions {
    flex-wrap: wrap;
  }

  .btn-add-cart,
  .btn-buy {
    flex: 1 1 calc(50% - 6px);
  }

  .tab-btn {
    padding: 16px 24px;
    font-size: 14px;
  }

  .tab-content {
    padding: 24px;
  }
}
</style>
