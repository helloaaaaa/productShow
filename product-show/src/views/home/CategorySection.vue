<template>
  <section class="category-section">
    <div class="container">
      <h2 class="section-title">商品分类</h2>
      <div class="category-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
          @click="goToCategory(category.id)"
        >
          <div class="category-icon">
            <component :is="getIconComponent(category.icon)" />
          </div>
          <h3 class="category-name">{{ category.name }}</h3>
          <div class="category-children">
            <span
              v-for="child in category.children?.slice(0, 3)"
              :key="child.id"
              class="child-tag"
            >
              {{ child.name }}
            </span>
          </div>
          <div class="category-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { mockApi } from '@/mock/products'
import type { Category } from '@/types/product'

const router = useRouter()
const categories = ref<Category[]>([])

// 图标组件
const ShirtIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('path', { d: 'M6 2L2 6v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6l-4-4H6z' }),
  h('path', { d: 'M6 2v16M18 2v16M12 2v16' })
])

const HatIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('path', { d: 'M2 12h20M4 12v-2a8 8 0 0 1 16 0v2' }),
  h('path', { d: 'M12 2v2M8 4l1-1M16 4l-1-1' })
])

const SparklesIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('path', { d: 'M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z' }),
  h('path', { d: 'M6 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z' }),
  h('path', { d: 'M18 12l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5z' })
])

const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Shirt: ShirtIcon,
    Hat: HatIcon,
    Sparkles: SparklesIcon
  }
  return icons[iconName] || ShirtIcon
}

const fetchCategories = async () => {
  const data = await mockApi.getCategories()
  categories.value = data
}

const goToCategory = (categoryId: string) => {
  router.push(`/products?category=${categoryId}`)
}

fetchCategories()
</script>

<style scoped>
.category-section {
  padding: 80px 0;
  background: linear-gradient(180deg, var(--gray-50) 0%, white 100%);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-card {
  position: relative;
  padding: 40px 30px;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.category-card:hover::before {
  transform: scaleX(1);
}

.category-icon {
  width: 70px;
  height: 70px;
  background: var(--gradient-light);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-600);
  margin-bottom: 20px;
  transition: all 0.4s ease;
}

.category-card:hover .category-icon {
  background: var(--gradient-primary);
  color: white;
  transform: scale(1.1);
}

.category-icon svg {
  width: 32px;
  height: 32px;
}

.category-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 16px;
}

.category-children {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.child-tag {
  padding: 6px 12px;
  font-size: 13px;
  color: var(--gray-600);
  background: var(--gray-100);
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.category-card:hover .child-tag {
  background: var(--primary-50);
  color: var(--primary-600);
}

.category-arrow {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  background: var(--gray-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  transition: all 0.3s ease;
}

.category-card:hover .category-arrow {
  background: var(--primary-500);
  color: white;
  transform: translateX(4px);
}

.category-arrow svg {
  width: 18px;
  height: 18px;
}

/* 响应式 */
@media (max-width: 992px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 30px 24px;
  }
}
</style>
