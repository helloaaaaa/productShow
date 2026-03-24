<template>
  <div class="product-detail" v-if="product">
    <div class="container">
      <div class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span class="separator">/</span>
        <router-link :to="product.category === 'hat' ? '/hats' : '/clothing'">
          {{ product.category === 'hat' ? '帽子专区' : '服装专区' }}
        </router-link>
        <span class="separator">/</span>
        <span class="current">{{ product.name }}</span>
      </div>

      <div class="detail-content">
        <div class="product-gallery">
          <div class="main-image">
            <img :src="product.image" :alt="product.name" />
            <div class="badges">
              <span v-if="product.isNew" class="badge badge-new">新品</span>
              <span v-if="product.isHot" class="badge badge-hot">热卖</span>
            </div>
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-desc">{{ product.description }}</p>

          <div class="price-section">
            <span class="current-price">¥{{ product.price }}</span>
            <span v-if="product.originalPrice" class="original-price">¥{{ product.originalPrice }}</span>
            <span v-if="product.originalPrice" class="discount">
              {{ Math.round((1 - product.price / product.originalPrice) * 100) }}% OFF
            </span>
          </div>

          <div class="info-item">
            <label>颜色</label>
            <div class="color-options">
              <button
                v-for="(color, index) in product.colors"
                :key="index"
                class="color-btn"
                :class="{ active: selectedColor === color }"
                @click="selectedColor = color"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <div class="info-item" v-if="product.sizes && product.sizes.length > 0">
            <label>尺码</label>
            <div class="size-options">
              <button
                v-for="size in product.sizes"
                :key="size"
                class="size-btn"
                :class="{ active: selectedSize === size }"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="info-item">
            <label>库存</label>
            <span class="stock" :class="{ low: product.stock < 50 }">{{ product.stock }} 件</span>
          </div>

          <div class="action-buttons">
            <button class="btn btn-primary buy-btn">立即购买</button>
            <button class="btn btn-outline cart-btn">加入购物车</button>
          </div>

          <div class="service-info">
            <div class="service-item">
              <span class="icon">🚚</span>
              <span>免费配送</span>
            </div>
            <div class="service-item">
              <span class="icon">🔄</span>
              <span>7天无理由退换</span>
            </div>
            <div class="service-item">
              <span class="icon">✅</span>
              <span>正品保证</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="not-found" v-else>
    <div class="container">
      <h2>商品不存在</h2>
      <router-link to="/" class="btn btn-primary">返回首页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '@/mock/data'

const route = useRoute()
const productId = computed(() => Number(route.params.id))
const product = computed(() => getProductById(productId.value))

const selectedColor = ref('')
const selectedSize = ref('')

if (product.value) {
  selectedColor.value = product.value.colors[0]
  if (product.value.sizes && product.value.sizes.length > 0) {
    selectedSize.value = product.value.sizes[0]
  }
}
</script>

<style scoped>
.product-detail {
  padding: 24px 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 14px;
}

.breadcrumb a {
  color: var(--text-secondary);
  transition: var(--transition);
}

.breadcrumb a:hover {
  color: var(--primary-color);
}

.separator {
  color: var(--text-light);
}

.current {
  color: var(--text-primary);
  font-weight: 500;
}

.detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.product-gallery {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.main-image {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badges {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.badge {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
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

.product-info {
  padding: 16px 0;
}

.product-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.product-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: var(--radius-md);
  margin-bottom: 32px;
}

.current-price {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
}

.original-price {
  font-size: 18px;
  color: var(--text-light);
  text-decoration: line-through;
}

.discount {
  padding: 4px 12px;
  background: var(--danger-color);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
}

.info-item {
  margin-bottom: 24px;
}

.info-item label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.color-options,
.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.color-btn,
.size-btn {
  padding: 10px 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-primary);
  background: white;
  transition: var(--transition);
}

.color-btn:hover,
.size-btn:hover {
  border-color: var(--primary-light);
}

.color-btn.active,
.size-btn.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: white;
}

.stock {
  font-size: 16px;
  font-weight: 500;
  color: var(--success-color);
}

.stock.low {
  color: var(--warning-color);
}

.action-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.buy-btn,
.cart-btn {
  flex: 1;
  padding: 16px 32px;
  font-size: 16px;
}

.service-info {
  display: flex;
  gap: 24px;
  padding: 20px;
  background: #f5f9fc;
  border-radius: var(--radius-md);
}

.service-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}

.service-item .icon {
  font-size: 18px;
}

.not-found {
  text-align: center;
  padding: 100px 0;
}

.not-found h2 {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 992px) {
  .detail-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .product-gallery {
    position: static;
  }
}

@media (max-width: 768px) {
  .product-title {
    font-size: 24px;
  }

  .current-price {
    font-size: 28px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .service-info {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
