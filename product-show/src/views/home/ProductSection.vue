<template>
  <section class="product-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <router-link :to="moreLink" class="view-more">
          查看更多
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/common/ProductCard.vue'
import type { Product } from '@/types/product'

interface Props {
  title: string
  products: Product[]
  moreLink?: string
}

withDefaults(defineProps<Props>(), {
  moreLink: '/products'
})
</script>

<style scoped>
.product-section {
  padding: 60px 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--gray-900);
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 28px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

.view-more {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-600);
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-more:hover {
  gap: 10px;
  color: var(--primary-700);
}

.view-more svg {
  width: 16px;
  height: 16px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 22px;
  }

  .section-title::before {
    height: 22px;
  }
}
</style>
