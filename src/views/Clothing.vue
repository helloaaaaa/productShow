<template>
  <div class="clothing-page">
    <div class="page-header">
      <div class="container">
        <h1>👔 服装专区</h1>
        <p>优质面料，舒适剪裁，打造品质穿搭</p>
      </div>
    </div>

    <div class="container">
      <div class="filter-bar">
        <div class="filter-left">
          <span class="filter-label">排序：</span>
          <select v-model="sortBy" class="filter-select">
            <option value="default">默认排序</option>
            <option value="price-asc">价格从低到高</option>
            <option value="price-desc">价格从高到低</option>
            <option value="newest">最新上架</option>
          </select>
        </div>
        <div class="filter-right">
          <span class="product-count">共 {{ filteredProducts.length }} 件商品</span>
        </div>
      </div>

      <div class="product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getProductsByCategory } from '@/mock/data'

const sortBy = ref('default')

const products = computed(() => getProductsByCategory('clothing'))

const filteredProducts = computed(() => {
  const list = [...products.value]
  switch (sortBy.value) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'newest':
      return list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    default:
      return list
  }
})
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #0d47a1, #1565c0);
  color: white;
  padding: 48px 0;
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}

.page-header p {
  font-size: 16px;
  opacity: 0.9;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: white;
  border-radius: var(--radius-md);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}

.filter-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filter-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.filter-select {
  padding: 10px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-primary);
  background: white;
  cursor: pointer;
  transition: var(--transition);
}

.filter-select:hover {
  border-color: var(--primary-color);
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.1);
}

.product-count {
  font-size: 14px;
  color: var(--text-secondary);
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

@media (max-width: 768px) {
  .page-header {
    padding: 32px 0;
  }

  .page-header h1 {
    font-size: 28px;
  }

  .filter-bar {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
