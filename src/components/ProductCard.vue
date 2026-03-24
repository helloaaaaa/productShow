<template>
  <div class="product-card" @click="goToDetail">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <div class="product-badges">
        <span v-if="product.isNew" class="badge badge-new">新品</span>
        <span v-if="product.isHot" class="badge badge-hot">热卖</span>
      </div>
      <div class="product-overlay">
        <button class="view-btn">查看详情</button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-colors">
        <span class="color-label">颜色：</span>
        <span class="color-list">{{ product.colors.slice(0, 3).join(' / ') }}</span>
        <span v-if="product.colors.length > 3" class="color-more">+{{ product.colors.length - 3 }}</span>
      </div>
      <div class="product-footer">
        <div class="product-price">
          <span class="current-price">¥{{ product.price }}</span>
          <span v-if="product.originalPrice" class="original-price">¥{{ product.originalPrice }}</span>
        </div>
        <div class="product-stock">
          <span class="stock-label">库存：</span>
          <span class="stock-value" :class="{ low: product.stock < 50 }">{{ product.stock }}件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const router = useRouter()

const goToDetail = () => {
  router.push(`/product/${props.product.id}`)
}
</script>

<style scoped>
.product-card {
  background: var(--card-background);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.product-image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-new {
  background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
  color: white;
}

.badge-hot {
  background: linear-gradient(135deg, #ff7043, #f4511e);
  color: white;
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 136, 229, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.view-btn {
  padding: 12px 32px;
  background: white;
  color: var(--primary-color);
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.view-btn:hover {
  background: var(--primary-color);
  color: white;
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 16px;
}

.color-label {
  flex-shrink: 0;
}

.color-list {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.color-more {
  flex-shrink: 0;
  background: var(--primary-light);
  color: white;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 11px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.original-price {
  font-size: 14px;
  color: var(--text-light);
  text-decoration: line-through;
}

.product-stock {
  font-size: 12px;
  color: var(--text-light);
}

.stock-value {
  color: var(--success-color);
  font-weight: 500;
}

.stock-value.low {
  color: var(--warning-color);
}
</style>
