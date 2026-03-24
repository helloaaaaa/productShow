<template>
  <div class="banner-section">
    <div class="banner-slider">
      <div
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="banner-slide"
        :class="{ active: currentIndex === index }"
      >
        <div class="banner-bg" :style="{ backgroundImage: `url(${banner.image})` }">
          <div class="banner-overlay" :style="{ background: `linear-gradient(90deg, ${banner.color}ee 0%, ${banner.color}99 50%, transparent 100%)` }" />
        </div>
        <div class="container">
          <div class="banner-content">
            <h2 class="banner-title">{{ banner.title }}</h2>
            <p class="banner-subtitle">{{ banner.subtitle }}</p>
            <router-link :to="banner.link" class="banner-btn">
              立即探索
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 指示器 -->
    <div class="banner-dots">
      <button
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      />
    </div>

    <!-- 切换按钮 -->
    <button class="nav-btn prev-btn" @click="prevSlide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    <button class="nav-btn next-btn" @click="nextSlide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { mockApi } from '@/mock/products'
import type { Banner } from '@/types/product'

const banners = ref<Banner[]>([])
const currentIndex = ref(0)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

const fetchBanners = async () => {
  const data = await mockApi.getBanners()
  banners.value = data
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
  resetAutoPlay()
}

const startAutoPlay = () => {
  autoPlayTimer = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  fetchBanners()
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.banner-section {
  position: relative;
  height: 600px;
  overflow: hidden;
  background: var(--gray-900);
}

.banner-slider {
  position: relative;
  height: 100%;
}

.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s ease;
}

.banner-slide.active {
  opacity: 1;
  visibility: visible;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  transition: transform 6s ease;
}

.banner-slide.active .banner-bg {
  transform: scale(1);
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
}

.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  padding: 0 24px;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.3s;
}

.banner-slide.active .banner-content {
  opacity: 1;
  transform: translateY(0);
}

.banner-title {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.95;
  max-width: 480px;
}

.banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-700);
  background: white;
  border-radius: var(--radius-full);
  text-decoration: none;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
}

.banner-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
  gap: 14px;
}

.banner-btn svg {
  width: 20px;
  height: 20px;
}

/* 指示器 */
.banner-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border: none;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  width: 30px;
  background: white;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

/* 切换按钮 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn svg {
  width: 24px;
  height: 24px;
}

.prev-btn {
  left: 30px;
}

.next-btn {
  right: 30px;
}

/* 响应式 */
@media (max-width: 1024px) {
  .banner-section {
    height: 500px;
  }

  .banner-title {
    font-size: 40px;
  }

  .banner-overlay {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .banner-section {
    height: 450px;
  }

  .banner-title {
    font-size: 32px;
  }

  .banner-subtitle {
    font-size: 15px;
  }

  .banner-overlay {
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%) !important;
  }

  .nav-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .banner-section {
    height: 400px;
  }

  .banner-title {
    font-size: 26px;
  }

  .banner-btn {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>
