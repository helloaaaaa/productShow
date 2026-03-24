<template>
  <div class="home-view">
    <!-- 轮播图 -->
    <HomeBanner />

    <!-- 特色服务 -->
    <FeaturesSection />

    <!-- 商品分类 -->
    <CategorySection />

    <!-- 热销商品 -->
    <ProductSection
      title="热销推荐"
      :products="hotProducts"
      more-link="/products?sortBy=sales"
    />

    <!-- 新品上架 -->
    <ProductSection
      title="新品上市"
      :products="newProducts"
      more-link="/products?sortBy=newest"
    />

    <!-- 促销横幅 -->
    <section class="promo-section">
      <div class="container">
        <div class="promo-grid">
          <div class="promo-card promo-large">
            <div class="promo-bg" style="background-image: url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop')" />
            <div class="promo-overlay" />
            <div class="promo-content">
              <span class="promo-tag">限时特惠</span>
              <h3 class="promo-title">春夏新品<br>低至7折</h3>
              <p class="promo-desc">精选春夏系列，焕新你的衣橱</p>
              <router-link to="/products?category=clothing" class="promo-btn">
                立即选购
              </router-link>
            </div>
          </div>
          <div class="promo-card promo-small">
            <div class="promo-bg" style="background-image: url('https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=400&fit=crop')" />
            <div class="promo-overlay" />
            <div class="promo-content">
              <span class="promo-tag">新品</span>
              <h3 class="promo-title">精品帽饰</h3>
              <p class="promo-desc">彰显个性品味</p>
              <router-link to="/products?category=hat" class="promo-btn">
                探索更多
              </router-link>
            </div>
          </div>
          <div class="promo-card promo-small">
            <div class="promo-bg" style="background-image: url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=400&fit=crop')" />
            <div class="promo-overlay" />
            <div class="promo-content">
              <span class="promo-tag">热销</span>
              <h3 class="promo-title">时尚配饰</h3>
              <p class="promo-desc">点缀你的穿搭</p>
              <router-link to="/products?category=accessory" class="promo-btn">
                探索更多
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeBanner from './HomeBanner.vue'
import FeaturesSection from './FeaturesSection.vue'
import CategorySection from './CategorySection.vue'
import ProductSection from './ProductSection.vue'
import { mockApi } from '@/mock/products'
import type { Product } from '@/types/product'

const hotProducts = ref<Product[]>([])
const newProducts = ref<Product[]>([])

onMounted(async () => {
  hotProducts.value = await mockApi.getHotProducts()
  newProducts.value = await mockApi.getNewProducts()
})
</script>

<style scoped>
.home-view {
  padding-top: 70px;
}

/* 促销区域 */
.promo-section {
  padding: 60px 0 80px;
  background: var(--gray-50);
}

.promo-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  height: 500px;
}

.promo-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
}

.promo-large {
  grid-row: span 2;
}

.promo-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.promo-card:hover .promo-bg {
  transform: scale(1.05);
}

.promo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.promo-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  color: white;
  z-index: 2;
}

.promo-tag {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  background: var(--primary-500);
  border-radius: var(--radius-full);
  margin-bottom: 16px;
}

.promo-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 12px;
}

.promo-large .promo-title {
  font-size: 42px;
}

.promo-desc {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 20px;
}

.promo-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  background: white;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 0.3s ease;
}

.promo-btn:hover {
  background: var(--primary-500);
  color: white;
  transform: translateY(-2px);
}

/* 响应式 */
@media (max-width: 992px) {
  .promo-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: auto;
  }

  .promo-large {
    grid-column: span 2;
    grid-row: span 1;
    height: 350px;
  }

  .promo-small {
    height: 250px;
  }

  .promo-large .promo-title {
    font-size: 32px;
  }
}

@media (max-width: 576px) {
  .promo-grid {
    grid-template-columns: 1fr;
  }

  .promo-large {
    grid-column: span 1;
  }

  .promo-content {
    padding: 24px;
  }

  .promo-title {
    font-size: 24px;
  }

  .promo-large .promo-title {
    font-size: 28px;
  }
}
</style>
