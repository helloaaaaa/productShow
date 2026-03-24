<template>
  <div class="products-view">
    <div class="container">
      <!-- 面包屑 -->
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span class="separator">/</span>
        <span class="current">{{ pageTitle }}</span>
      </nav>

      <div class="products-layout">
        <!-- 侧边栏筛选 -->
        <aside class="filter-sidebar" :class="{ open: isFilterOpen }">
          <div class="filter-header">
            <h3>筛选条件</h3>
            <button class="close-filter" @click="isFilterOpen = false">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- 分类筛选 -->
          <div class="filter-group">
            <h4 class="filter-title">商品分类</h4>
            <div class="filter-options">
              <label
                v-for="cat in categories"
                :key="cat.id"
                class="filter-option"
                :class="{ active: selectedCategory === cat.id }"
              >
                <input
                  v-model="selectedCategory"
                  type="radio"
                  :value="cat.id"
                  @change="handleCategoryChange"
                />
                <span>{{ cat.name }}</span>
              </label>
            </div>
          </div>

          <!-- 子分类 -->
          <div v-if="currentSubCategories.length > 0" class="filter-group">
            <h4 class="filter-title">子分类</h4>
            <div class="filter-options">
              <label
                v-for="sub in currentSubCategories"
                :key="sub.id"
                class="filter-option"
                :class="{ active: selectedSubCategory === sub.id }"
              >
                <input
                  v-model="selectedSubCategory"
                  type="radio"
                  :value="sub.id"
                  @change="handleFilterChange"
                />
                <span>{{ sub.name }}</span>
              </label>
            </div>
          </div>

          <!-- 价格区间 -->
          <div class="filter-group">
            <h4 class="filter-title">价格区间</h4>
            <div class="price-range">
              <input
                v-model.number="minPrice"
                type="number"
                placeholder="最低价"
                class="price-input"
                @change="handleFilterChange"
              />
              <span class="price-separator">-</span>
              <input
                v-model.number="maxPrice"
                type="number"
                placeholder="最高价"
                class="price-input"
                @change="handleFilterChange"
              />
            </div>
          </div>

          <!-- 重置按钮 -->
          <button class="reset-btn" @click="resetFilters">
            重置筛选
          </button>
        </aside>

        <!-- 遮罩层 -->
        <div v-if="isFilterOpen" class="filter-overlay" @click="isFilterOpen = false" />

        <!-- 主内容区 -->
        <main class="products-main">
          <!-- 工具栏 -->
          <div class="toolbar">
            <div class="toolbar-left">
              <button class="filter-toggle" @click="isFilterOpen = true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                筛选
              </button>
              <span class="results-count">共 {{ total }} 件商品</span>
            </div>
            <div class="toolbar-right">
              <div class="sort-select">
                <select v-model="sortBy" @change="handleSortChange">
                  <option value="">默认排序</option>
                  <option value="price-asc">价格从低到高</option>
                  <option value="price-desc">价格从高到低</option>
                  <option value="sales">销量优先</option>
                  <option value="newest">最新上架</option>
                  <option value="rating">评分最高</option>
                </select>
              </div>
              <div class="view-toggle">
                <button
                  :class="{ active: viewMode === 'grid' }"
                  @click="viewMode = 'grid'"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </button>
                <button
                  :class="{ active: viewMode === 'list' }"
                  @click="viewMode = 'list'"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"/>
                    <line x1="8" y1="12" x2="21" y2="12"/>
                    <line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 商品列表 -->
          <div v-if="loading" class="loading-state">
            <div class="loading-spinner" />
            <p>加载中...</p>
          </div>

          <div v-else-if="products.length === 0" class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h3>暂无商品</h3>
            <p>试试调整筛选条件</p>
          </div>

          <div v-else :class="['products-list', viewMode]">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
              :class="{ 'list-item': viewMode === 'list' }"
            />
          </div>

          <!-- 分页 -->
          <div v-if="totalPages > 1" class="pagination">
            <button
              :disabled="currentPage === 1"
              class="page-btn"
              @click="goToPage(currentPage - 1)"
            >
              上一页
            </button>
            <div class="page-numbers">
              <button
                v-for="page in displayedPages"
                :key="page"
                :class="['page-number', { active: page === currentPage }]"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </div>
            <button
              :disabled="currentPage === totalPages"
              class="page-btn"
              @click="goToPage(currentPage + 1)"
            >
              下一页
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '@/components/common/ProductCard.vue'
import { mockApi } from '@/mock/products'
import type { Product, Category } from '@/types/product'

const route = useRoute()
const router = useRouter()

const products = ref<Product[]>([])
const categories = ref<Category[]>([])
const loading = ref(false)
const total = ref(0)
const currentPage = ref(1)
const pageSize = 12
const viewMode = ref<'grid' | 'list'>('grid')
const isFilterOpen = ref(false)

// 筛选条件
const selectedCategory = ref('')
const selectedSubCategory = ref('')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)
const sortBy = ref('')
const keyword = ref('')

const currentSubCategories = computed(() => {
  const cat = categories.value.find(c => c.id === selectedCategory.value)
  return cat?.children || []
})

const pageTitle = computed(() => {
  if (keyword.value) return `搜索"${keyword.value}"`
  if (selectedCategory.value) {
    const cat = categories.value.find(c => c.id === selectedCategory.value)
    return cat?.name || '商品列表'
  }
  return '全部商品'
})

const totalPages = computed(() => Math.ceil(total.value / pageSize))

const displayedPages = computed(() => {
  const pages: number[] = []
  const maxDisplay = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxDisplay / 2))
  let end = Math.min(totalPages.value, start + maxDisplay - 1)

  if (end - start + 1 < maxDisplay) {
    start = Math.max(1, end - maxDisplay + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

const fetchProducts = async () => {
  loading.value = true
  const { list, total: t } = await mockApi.getProducts({
    category: selectedCategory.value || undefined,
    subCategory: selectedSubCategory.value || undefined,
    page: currentPage.value,
    pageSize,
    sortBy: sortBy.value || undefined
  })
  products.value = list
  total.value = t
  loading.value = false
}

const fetchCategories = async () => {
  categories.value = await mockApi.getCategories()
}

const handleCategoryChange = () => {
  selectedSubCategory.value = ''
  currentPage.value = 1
  fetchProducts()
  updateQuery()
}

const handleFilterChange = () => {
  currentPage.value = 1
  fetchProducts()
  updateQuery()
}

const handleSortChange = () => {
  currentPage.value = 1
  fetchProducts()
  updateQuery()
}

const goToPage = (page: number) => {
  currentPage.value = page
  fetchProducts()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetFilters = () => {
  selectedCategory.value = ''
  selectedSubCategory.value = ''
  minPrice.value = null
  maxPrice.value = null
  sortBy.value = ''
  currentPage.value = 1
  fetchProducts()
  updateQuery()
}

const updateQuery = () => {
  const query: Record<string, string> = {}
  if (selectedCategory.value) query.category = selectedCategory.value
  if (selectedSubCategory.value) query.subCategory = selectedSubCategory.value
  if (sortBy.value) query.sortBy = sortBy.value
  if (keyword.value) query.keyword = keyword.value
  if (currentPage.value > 1) query.page = String(currentPage.value)

  router.replace({ query })
}

const initFromQuery = () => {
  const { category, subCategory, sortBy: sort, keyword: kw } = route.query
  if (category) selectedCategory.value = category as string
  if (subCategory) selectedSubCategory.value = subCategory as string
  if (sort) sortBy.value = sort as string
  if (kw) keyword.value = kw as string
}

onMounted(() => {
  initFromQuery()
  fetchCategories()
  fetchProducts()
})

watch(() => route.query, () => {
  initFromQuery()
  fetchProducts()
}, { deep: true })
</script>

<style scoped>
.products-view {
  padding-top: 90px;
  min-height: 100vh;
  background: var(--gray-50);
}

/* 面包屑 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  font-size: 14px;
}

.breadcrumb a {
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: var(--primary-600);
}

.breadcrumb .separator {
  color: var(--gray-400);
}

.breadcrumb .current {
  color: var(--gray-800);
  font-weight: 500;
}

/* 布局 */
.products-layout {
  display: flex;
  gap: 30px;
  padding-bottom: 60px;
}

/* 侧边栏 */
.filter-sidebar {
  width: 260px;
  flex-shrink: 0;
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  height: fit-content;
  position: sticky;
  top: 90px;
}

.filter-header {
  display: none;
}

.filter-group {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-100);
}

.filter-group:last-of-type {
  border-bottom: none;
}

.filter-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 16px;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-option:hover {
  background: var(--gray-50);
}

.filter-option.active {
  background: var(--primary-50);
}

.filter-option input {
  width: 16px;
  height: 16px;
  accent-color: var(--primary-600);
}

.filter-option span {
  font-size: 14px;
  color: var(--gray-600);
}

.filter-option.active span {
  color: var(--primary-700);
  font-weight: 500;
}

/* 价格区间 */
.price-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  outline: none;
}

.price-input:focus {
  border-color: var(--primary-400);
}

.price-separator {
  color: var(--gray-400);
}

.reset-btn {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
  background: var(--gray-100);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--gray-200);
}

/* 主内容区 */
.products-main {
  flex: 1;
}

/* 工具栏 */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: white;
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.filter-toggle {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: var(--gray-700);
  background: var(--gray-100);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}

.filter-toggle svg {
  width: 16px;
  height: 16px;
}

.results-count {
  font-size: 14px;
  color: var(--gray-500);
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sort-select select {
  padding: 8px 32px 8px 12px;
  font-size: 14px;
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: white;
  cursor: pointer;
  outline: none;
}

.view-toggle {
  display: flex;
  gap: 4px;
}

.view-toggle button {
  width: 36px;
  height: 36px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  background: white;
  color: var(--gray-400);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.view-toggle button.active {
  background: var(--primary-50);
  border-color: var(--primary-400);
  color: var(--primary-600);
}

.view-toggle button svg {
  width: 18px;
  height: 18px;
}

/* 商品列表 */
.products-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.products-list.list {
  grid-template-columns: 1fr;
}

/* 加载状态 */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  color: var(--gray-500);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--gray-200);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  color: var(--gray-500);
}

.empty-state svg {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 8px;
}

/* 分页 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
}

.page-btn {
  padding: 10px 20px;
  font-size: 14px;
  color: var(--gray-700);
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--primary-400);
  color: var(--primary-600);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 6px;
}

.page-number {
  width: 40px;
  height: 40px;
  font-size: 14px;
  color: var(--gray-700);
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-number:hover {
  border-color: var(--primary-400);
}

.page-number.active {
  background: var(--primary-500);
  border-color: var(--primary-500);
  color: white;
}

/* 遮罩层 */
.filter-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

/* 响应式 */
@media (max-width: 1200px) {
  .products-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .filter-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: 101;
    border-radius: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .filter-sidebar.open {
    transform: translateX(0);
  }

  .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-100);
  }

  .filter-header h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .close-filter {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: var(--radius);
    background: var(--gray-100);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-filter svg {
    width: 20px;
    height: 20px;
  }

  .filter-toggle {
    display: flex;
  }

  .filter-overlay {
    display: block;
  }
}

@media (max-width: 576px) {
  .products-list {
    grid-template-columns: 1fr;
  }

  .toolbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .toolbar-right {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
