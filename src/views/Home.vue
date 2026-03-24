<template>
  <div class="home">
    <!-- Hero 轮播区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge">2024 新品上市</span>
          <h1 class="hero-title">发现你的<br />独特风格</h1>
          <p class="hero-subtitle">精选高品质衣帽服饰，让每一天都充满时尚感</p>
          <div class="hero-buttons">
            <a href="#products" class="btn btn-primary btn-lg">立即选购</a>
            <a href="#categories" class="btn btn-outline btn-lg">浏览分类</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fashion%20model%20wearing%20blue%20jacket%20and%20stylish%20outfit%20modern%20studio%20background&image_size=portrait_4_3" alt="时尚模特" />
        </div>
      </div>
    </section>

    <!-- 特色服务 -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🚚</div>
            <h4>免费配送</h4>
            <p>订单满199元全国包邮</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔄</div>
            <h4>7天无理由</h4>
            <p>不满意随时退换</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✅</div>
            <h4>品质保证</h4>
            <p>严选优质面料</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <h4>在线客服</h4>
            <p>7x24小时竭诚服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 商品分类 -->
    <section class="categories-section" id="categories">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">热门分类</h2>
          <a href="#" class="view-all">查看全部 →</a>
        </div>
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.id" 
            class="category-card"
            @click="selectCategory(category.name)"
          >
            <div class="category-icon">{{ category.icon }}</div>
            <h4>{{ category.name }}</h4>
            <span class="category-count">{{ getProductCount(category.name) }} 件商品</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 热销商品 -->
    <section class="products-section" id="products">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">热销商品</h2>
          <a href="#" class="view-all">查看全部 →</a>
        </div>
        <div class="products-grid">
          <ProductCard 
            v-for="product in displayedProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
        <div class="load-more" v-if="displayedProducts.length < products.length">
          <button class="btn btn-outline" @click="loadMore">加载更多</button>
        </div>
      </div>
    </section>

    <!-- 促销横幅 -->
    <section class="promo-banner">
      <div class="container">
        <div class="promo-content">
          <div class="promo-text">
            <span class="promo-badge">限时特惠</span>
            <h2>春季新品<br />全场低至5折起</h2>
            <p>活动时间：即日起至3月31日</p>
            <a href="#products" class="btn btn-primary">立即抢购</a>
          </div>
          <div class="promo-image">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20fashion%20collection%20blue%20theme%20clothing%20display&image_size=square_hd" alt="春季新品" />
          </div>
        </div>
      </div>
    </section>

    <!-- 新品上市 -->
    <section class="new-arrivals-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">新品上市</h2>
          <a href="#" class="view-all">查看全部 →</a>
        </div>
        <div class="products-grid">
          <ProductCard 
            v-for="product in newArrivals" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- 订阅区域 -->
    <section class="subscribe-section">
      <div class="container">
        <div class="subscribe-content">
          <div class="subscribe-text">
            <h3>订阅我们的资讯</h3>
            <p>第一时间获取新品上市、优惠活动等信息</p>
          </div>
          <form class="subscribe-form" @submit.prevent="handleSubscribe">
            <input 
              type="email" 
              v-model="subscribeEmail" 
              placeholder="请输入您的邮箱地址" 
              required 
            />
            <button type="submit" class="btn btn-primary">订阅</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products, categories } from '../data/mockData'
import type { Product } from '../types'

const subscribeEmail = ref('')
const displayedCount = ref(4)
const selectedCategory = ref('')

const displayedProducts = computed<Product[]>(() => {
  let filtered = selectedCategory.value 
    ? products.filter(p => p.category === selectedCategory.value)
    : products
  return filtered.slice(0, displayedCount.value)
})

const newArrivals = computed<Product[]>(() => {
  return products.filter(p => p.tags.includes('新品')).slice(0, 4)
})

const getProductCount = (categoryName: string): number => {
  return products.filter(p => p.category === categoryName).length
}

const selectCategory = (categoryName: string) => {
  selectedCategory.value = selectedCategory.value === categoryName ? '' : categoryName
  displayedCount.value = 4
}

const loadMore = () => {
  displayedCount.value += 4
}

const handleSubscribe = () => {
  if (subscribeEmail.value) {
    alert(`感谢订阅！我们将发送最新资讯到 ${subscribeEmail.value}`)
    subscribeEmail.value = ''
  }
}
</script>

<style scoped>
/* Hero 区域 */
.hero-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%);
  padding: 60px 0;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.hero-text {
  animation: fadeInLeft 0.8s ease;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-badge {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.btn-lg {
  padding: 14px 32px;
  font-size: 16px;
}

.hero-image {
  position: relative;
  animation: fadeInRight 0.8s ease;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-image img {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-heavy);
}

/* 特色服务 */
.features-section {
  padding: 60px 0;
  background-color: var(--surface-color);
  margin-top: -40px;
  position: relative;
  z-index: 10;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.feature-item {
  text-align: center;
  padding: 24px;
  border-radius: var(--radius-large);
  transition: all var(--transition-normal);
}

.feature-item:hover {
  background-color: var(--background-color);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.feature-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-item p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 分类区域 */
.categories-section {
  padding: 80px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.view-all {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.view-all:hover {
  color: var(--primary-dark);
  transform: translateX(4px);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.category-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-large);
  padding: 24px 16px;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-medium);
  border-color: var(--primary-color);
}

.category-icon {
  font-size: 48px;
  margin-bottom: 16px;
  display: block;
}

.category-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.category-count {
  font-size: 13px;
  color: var(--text-light);
}

/* 商品区域 */
.products-section {
  padding: 0 0 80px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.load-more {
  text-align: center;
  margin-top: 48px;
}

/* 促销横幅 */
.promo-banner {
  padding: 60px 0;
  background: linear-gradient(135deg, #1565c0 0%, #1e88e5 100%);
  margin: 40px 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.promo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.promo-text {
  color: white;
}

.promo-badge {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 20px;
}

.promo-text h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

.promo-text p {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 24px;
}

.promo-text .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.promo-text .btn-primary:hover {
  background-color: var(--background-color);
}

.promo-image img {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: var(--radius-large);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* 新品上市 */
.new-arrivals-section {
  padding: 0 0 80px;
}

/* 订阅区域 */
.subscribe-section {
  padding: 60px 0;
  background-color: var(--surface-color);
}

.subscribe-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.subscribe-text h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.subscribe-text p {
  font-size: 16px;
  color: var(--text-secondary);
}

.subscribe-form {
  display: flex;
  gap: 12px;
}

.subscribe-form input {
  flex: 1;
  padding: 14px 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  font-size: 14px;
  transition: all var(--transition-fast);
}

.subscribe-form input:focus {
  outline: none;
  border-color: var(--primary-color);
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image img {
    max-width: 350px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .promo-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .subscribe-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 28px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
}
</style>
