<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.38 3.4a1.6 1.6 0 0 0-2.29.1l-9.18 9.19-3.54-3.54a1.6 1.6 0 0 0-2.26 0L1.4 10.86a1.6 1.6 0 0 0 0 2.26l6.93 6.93a1.6 1.6 0 0 0 2.26 0l10.4-10.4a1.6 1.6 0 0 0-.1-2.29l-1.41-1.96z"/>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <span class="logo-text">衣品汇</span>
        </router-link>

        <!-- 导航菜单 -->
        <nav class="nav-menu">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- 搜索框 -->
        <div class="search-box">
          <input
            v-model="searchKeyword"
            type="text"
            placeholder="搜索商品..."
            class="search-input"
            @keyup.enter="handleSearch"
          />
          <button class="search-btn" @click="handleSearch">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>

        <!-- 右侧操作区 -->
        <div class="header-actions">
          <router-link to="/cart" class="action-btn cart-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
          </router-link>
          <button class="action-btn user-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-show="isMobileMenuOpen" class="mobile-menu">
      <div class="container">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const searchKeyword = ref('')

const cartCount = computed(() => 0) // 后续从store获取

const navItems = [
  { name: '首页', path: '/' },
  { name: '全部商品', path: '/products' },
  { name: '服装', path: '/products?category=clothing' },
  { name: '帽饰', path: '/products?category=hat' },
  { name: '配饰', path: '/products?category=accessory' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push(`/products?keyword=${encodeURIComponent(searchKeyword.value.trim())}`)
    searchKeyword.value = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.header-scrolled {
  box-shadow: var(--shadow-md);
  border-bottom-color: var(--gray-200);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 24px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-icon svg {
  width: 24px;
  height: 24px;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-600);
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-600);
  background: var(--primary-50);
}

.nav-link.active {
  color: var(--primary-700);
  background: var(--primary-100);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--primary-500);
  border-radius: var(--radius-full);
}

/* 搜索框 */
.search-box {
  position: relative;
  width: 280px;
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  height: 42px;
  padding: 0 44px 0 16px;
  font-size: 14px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-full);
  background: var(--gray-50);
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  background: white;
  border-color: var(--primary-400);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.search-input::placeholder {
  color: var(--gray-400);
}

.search-btn {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.search-btn:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: var(--shadow-glow);
}

.search-btn svg {
  width: 16px;
  height: 16px;
}

/* 操作按钮 */
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.action-btn {
  position: relative;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--gray-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--primary-50);
  color: var(--primary-600);
}

.action-btn svg {
  width: 22px;
  height: 22px;
}

.cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  background: var(--error);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--gray-600);
  cursor: pointer;
}

.mobile-menu-btn svg {
  width: 24px;
  height: 24px;
}

/* 移动端菜单 */
.mobile-menu {
  display: none;
  padding: 16px 0;
  background: white;
  border-top: 1px solid var(--gray-100);
}

.mobile-nav-link {
  display: block;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-700);
  text-decoration: none;
  border-bottom: 1px solid var(--gray-100);
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

/* 响应式 */
@media (max-width: 1024px) {
  .nav-menu {
    display: none;
  }

  .search-box {
    flex: 1;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .header-content {
    height: 60px;
  }

  .logo-text {
    font-size: 18px;
  }

  .search-box {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
