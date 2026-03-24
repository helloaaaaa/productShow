<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">发现你的专属风格</h1>
          <p class="hero-subtitle">精选优质衣帽商品，打造独特时尚穿搭</p>
          <div class="hero-actions">
            <router-link to="/hats" class="btn btn-primary">浏览帽子</router-link>
            <router-link to="/clothing" class="btn btn-outline">浏览服装</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <h2 class="section-title">商品分类</h2>
        <div class="category-grid">
          <router-link to="/hats" class="category-card">
            <div class="category-icon">🎩</div>
            <h3>帽子专区</h3>
            <p>时尚潮流，遮阳防晒</p>
          </router-link>
          <router-link to="/clothing" class="category-card">
            <div class="category-icon">👔</div>
            <h3>服装专区</h3>
            <p>舒适面料，品质之选</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="hot-products">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">热卖商品</h2>
          <router-link to="/" class="view-more">查看更多 →</router-link>
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in hotProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <section class="new-products">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">新品上架</h2>
          <router-link to="/" class="view-more">查看更多 →</router-link>
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in newProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">🚚</div>
            <h3>免费配送</h3>
            <p>订单满99元免运费</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔄</div>
            <h3>七天退换</h3>
            <p>不满意可退换货</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <h3>品质保证</h3>
            <p>精选优质商品</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <h3>在线客服</h3>
            <p>专业客服随时解答</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getHotProducts, getNewProducts } from '@/mock/data'

const hotProducts = computed(() => getHotProducts().slice(0, 4))
const newProducts = computed(() => getNewProducts().slice(0, 4))
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1565c0 0%, #1e88e5 50%, #42a5f5 100%);
  color: white;
  padding: 80px 0;
  margin-bottom: 48px;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-actions .btn-outline {
  border-color: white;
  color: white;
}

.hero-actions .btn-outline:hover {
  background: white;
  color: var(--primary-color);
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.section-header .section-title {
  margin-bottom: 0;
}

.view-more {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition);
}

.view-more:hover {
  color: var(--primary-dark);
}

.categories {
  margin-bottom: 64px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.category-card {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  padding: 48px;
  border-radius: var(--radius-lg);
  text-align: center;
  transition: var(--transition);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.category-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.category-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.category-card p {
  font-size: 14px;
  opacity: 0.9;
}

.hot-products,
.new-products {
  margin-bottom: 64px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.features {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  padding: 64px 0;
  margin-top: 64px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.feature-item {
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-item p {
  font-size: 14px;
  color: var(--text-secondary);
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 36px;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 48px 0;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 15px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 32px;
  }

  .section-title {
    font-size: 24px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
