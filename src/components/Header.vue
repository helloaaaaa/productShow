<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-icon">🧢</span>
          <span class="logo-text">衣帽商城</span>
        </router-link>
      </div>
      
      <nav class="nav">
        <router-link to="/" class="nav-link" :class="{ active: route.name === 'Home' }">首页</router-link>
        <a href="#products" class="nav-link">商品</a>
        <a href="#categories" class="nav-link">分类</a>
        <a href="#about" class="nav-link">关于我们</a>
      </nav>
      
      <div class="header-actions">
        <button class="search-btn" aria-label="搜索">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button class="cart-btn" aria-label="购物车">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">3</span>
        </button>
      </div>
      
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="菜单">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav class="mobile-nav">
        <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">首页</router-link>
        <a href="#products" class="mobile-nav-link" @click="mobileMenuOpen = false">商品</a>
        <a href="#categories" class="mobile-nav-link" @click="mobileMenuOpen = false">分类</a>
        <a href="#about" class="mobile-nav-link" @click="mobileMenuOpen = false">关于我们</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.header {
  background-color: var(--surface-color);
  box-shadow: var(--shadow-light);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all var(--transition-normal);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 8px 0;
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 1px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-btn,
.cart-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--background-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all var(--transition-fast);
}

.search-btn:hover,
.cart-btn:hover {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.05);
}

.cart-count {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  background-color: #e53935;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-btn {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--background-color);
  color: var(--text-secondary);
  align-items: center;
  justify-content: center;
}

.mobile-menu {
  display: none;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition-normal);
}

.mobile-menu.open {
  max-height: 300px;
}

.mobile-nav {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  padding: 12px 16px;
  font-size: 15px;
  color: var(--text-secondary);
  border-radius: var(--radius-medium);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
  background-color: var(--background-color);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .header-actions {
    gap: 12px;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>
