<template>
  <div class="product-card" @click="goToDetail">
    <div class="product-image-wrapper">
      <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
      <div class="product-tags">
        <span v-if="product.isHot" class="tag tag-hot">热销</span>
        <span v-if="product.isNew" class="tag tag-new">新品</span>
        <span v-if="product.originalPrice" class="tag tag-discount">
          {{ Math.round((1 - product.price / product.originalPrice) * 100) }}%OFF
        </span>
      </div>
      <div class="product-actions">
        <button class="action-btn" @click.stop="addToCart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
        <button class="action-btn" @click.stop="toggleFavorite">
          <svg
            viewBox="0 0 24 24"
            :fill="isFavorite ? 'currentColor' : 'none'"
            stroke="currentColor"
            stroke-width="2"
            :class="{ 'text-red-500': isFavorite }"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">{{ product.brand }}</div>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-desc">{{ product.description.slice(0, 50) }}...</p>
      <div class="product-meta">
        <div class="product-rating">
          <span class="rating-stars">
            <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :fill="i <= Math.round(product.rating) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </span>
          <span class="rating-count">({{ product.reviewCount }})</span>
        </div>
        <div class="product-sales">已售 {{ product.sales }}</div>
      </div>
      <div class="product-price-row">
        <div class="price-wrapper">
          <span class="price-symbol">¥</span>
          <span class="price-value">{{ product.price }}</span>
          <span v-if="product.originalPrice" class="price-original">¥{{ product.originalPrice }}</span>
        </div>
        <div v-if="product.colors" class="product-colors">
          <span
            v-for="(color, index) in product.colors.slice(0, 3)"
            :key="index"
            class="color-dot"
            :style="{ backgroundColor: color.value }"
            :title="color.name"
          />
          <span v-if="product.colors.length > 3" class="color-more">+{{ product.colors.length - 3 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Product } from '@/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()

const isFavorite = ref(false)

const goToDetail = () => {
  router.push(`/product/${props.product.id}`)
}

const addToCart = () => {
  // 后续接入购物车 store
  alert(`已将 "${props.product.name}" 加入购物车`)
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

/* 图片区域 */
.product-image-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--gray-100);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

/* 标签 */
.product-tags {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tag-discount {
  background: linear-gradient(135deg, #fecaca, #fca5a5);
  color: #991b1b;
}

/* 操作按钮 */
.product-actions {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) translateX(20px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card:hover .product-actions {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.action-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: white;
  color: var(--gray-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--primary-500);
  color: white;
  transform: scale(1.1);
}

.action-btn svg {
  width: 18px;
  height: 18px;
}

.action-btn .text-red-500 {
  color: #ef4444;
}

/* 商品信息 */
.product-info {
  padding: 16px;
}

.product-brand {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-600);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.product-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-800);
  line-height: 1.4;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-desc {
  font-size: 13px;
  color: var(--gray-500);
  line-height: 1.5;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 评分和销售 */
.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-stars {
  display: flex;
  gap: 2px;
  color: #f59e0b;
}

.rating-stars svg {
  width: 12px;
  height: 12px;
}

.rating-count {
  font-size: 12px;
  color: var(--gray-400);
}

.product-sales {
  font-size: 12px;
  color: var(--gray-400);
}

/* 价格和颜色 */
.product-price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-wrapper {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.price-symbol {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-700);
}

.price-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-700);
}

.price-original {
  font-size: 13px;
  color: var(--gray-400);
  text-decoration: line-through;
  margin-left: 6px;
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 4px;
}

.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 1px var(--gray-300);
}

.color-more {
  font-size: 11px;
  color: var(--gray-500);
  margin-left: 2px;
}
</style>
