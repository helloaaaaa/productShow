<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
      </router-link>
      
      <div class="product-tags">
        <span v-for="tag in product.tags" :key="tag" :class="['tag', getTagClass(tag)]">
          {{ getTagText(tag) }}
        </span>
      </div>
      
      <div class="product-actions">
        <button class="action-btn quick-view" title="快速查看" @click="handleQuickView">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
        <button class="action-btn add-favorite" title="加入收藏" @click="handleFavorite">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <button class="action-btn add-cart" title="加入购物车" @click="handleAddCart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="product-info">
      <div class="product-category">{{ product.category }}</div>
      
      <router-link :to="`/product/${product.id}`" class="product-name">
        <h3>{{ product.name }}</h3>
      </router-link>
      
      <div class="product-rating">
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="stars-fill" :style="{ width: (product.rating / 5) * 100 + '%' }">★★★★★</span>
        </div>
        <span class="reviews">({{ product.reviews }})</span>
      </div>
      
      <div class="product-colors" v-if="product.colors.length > 0">
        <span 
          v-for="color in product.colors.slice(0, 4)" 
          :key="color" 
          class="color-dot"
          :style="{ backgroundColor: getColorCode(color) }"
          :title="color"
        ></span>
        <span v-if="product.colors.length > 4" class="more-colors">+{{ product.colors.length - 4 }}</span>
      </div>
      
      <div class="product-price">
        <span class="price">¥{{ product.price }}</span>
        <span v-if="product.originalPrice" class="original-price">¥{{ product.originalPrice }}</span>
        <span v-if="product.originalPrice" class="discount">
          -{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  product: Product
}>()

const getTagClass = (tag: string): string => {
  const tagMap: Record<string, string> = {
    '新品': 'tag-new',
    '热销': 'tag-hot',
    '特价': 'tag-sale'
  }
  return tagMap[tag] || ''
}

const getTagText = (tag: string): string => {
  return tag
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

const handleQuickView = () => {
  // TODO: 实现快速查看功能
  console.log('快速查看')
}

const handleFavorite = () => {
  // TODO: 实现收藏功能
  console.log('加入收藏')
}

const handleAddCart = () => {
  // TODO: 实现加入购物车功能
  console.log('加入购物车')
}
</script>

<style scoped>
.product-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-large);
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-heavy);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  background-color: var(--background-color);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.product-card:hover .product-image {
  transform: scale(1.08);
}

.product-tags {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 2;
}

.product-actions {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  opacity: 0;
  transform: translateX(20px);
  transition: all var(--transition-normal);
}

.product-card:hover .product-actions {
  opacity: 1;
  transform: translateX(0);
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--surface-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-light);
  transition: all var(--transition-fast);
}

.action-btn:hover {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.action-btn.add-cart:hover {
  background-color: #43a047;
}

.action-btn.add-favorite:hover {
  background-color: #e53935;
}

.product-info {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-category {
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.product-name {
  display: block;
  margin-bottom: 12px;
}

.product-name h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color var(--transition-fast);
}

.product-name:hover h3 {
  color: var(--primary-color);
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.rating {
  position: relative;
  font-size: 14px;
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

.reviews {
  font-size: 13px;
  color: var(--text-light);
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}

.color-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.color-dot:hover {
  transform: scale(1.2);
  border-color: var(--primary-color);
}

.more-colors {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 500;
}

.product-price {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-price .price {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.product-price .original-price {
  font-size: 14px;
  color: var(--text-light);
  text-decoration: line-through;
}

.discount {
  font-size: 12px;
  font-weight: 600;
  color: #e53935;
  background-color: #ffebee;
  padding: 2px 6px;
  border-radius: var(--radius-small);
}

@media (max-width: 768px) {
  .product-actions {
    opacity: 1;
    transform: translateX(0);
  }
  
  .product-name h3 {
    font-size: 14px;
  }
  
  .product-price .price {
    font-size: 18px;
  }
}
</style>
