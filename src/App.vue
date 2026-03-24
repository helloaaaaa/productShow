<template>
  <div class="app">
    <header class="header">
      <div class="container header-content">
        <router-link to="/" class="logo">
          <span class="logo-icon">👒</span>
          <span class="logo-text">衣帽风尚</span>
        </router-link>
        <nav class="nav">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">首页</router-link>
          <router-link to="/hats" class="nav-link" :class="{ active: $route.path === '/hats' }">帽子专区</router-link>
          <router-link to="/clothing" class="nav-link" :class="{ active: $route.path === '/clothing' }">服装专区</router-link>
        </nav>
        <div class="header-actions">
          <button class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button class="icon-btn cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-badge">3</span>
          </button>
        </div>
      </div>
    </header>
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-info">
          <div class="logo">
            <span class="logo-icon">👒</span>
            <span class="logo-text">衣帽风尚</span>
          </div>
          <p class="footer-desc">精选优质衣帽商品，为您打造时尚穿搭体验</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>商品分类</h4>
            <router-link to="/hats">帽子专区</router-link>
            <router-link to="/clothing">服装专区</router-link>
          </div>
          <div class="footer-column">
            <h4>客户服务</h4>
            <a href="#">售后服务</a>
            <a href="#">配送说明</a>
            <a href="#">退换政策</a>
          </div>
          <div class="footer-column">
            <h4>关于我们</h4>
            <a href="#">品牌故事</a>
            <a href="#">联系我们</a>
            <a href="#">加入我们</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2024 衣帽风尚 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
}

.logo-icon {
  font-size: 28px;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  opacity: 0.9;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255, 255, 255, 0.15);
  opacity: 1;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-sm);
  color: white;
  transition: var(--transition);
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.cart-btn {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background: #f44336;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  flex: 1;
  padding: 32px 0;
}

.footer {
  background: linear-gradient(135deg, #1a237e, #0d47a1);
  color: white;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 48px 24px;
  gap: 48px;
}

.footer-info {
  max-width: 300px;
}

.footer-info .logo {
  margin-bottom: 16px;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.8;
}

.footer-links {
  display: flex;
  gap: 64px;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.footer-column a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 12px;
  transition: var(--transition);
}

.footer-column a:hover {
  color: white;
  transform: translateX(4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

@media (max-width: 768px) {
  .header-content {
    height: 60px;
  }

  .logo-text {
    display: none;
  }

  .nav {
    gap: 16px;
  }

  .nav-link {
    font-size: 13px;
    padding: 6px 12px;
  }

  .footer-content {
    flex-direction: column;
    gap: 32px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>
