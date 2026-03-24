<template>
  <section class="features-section">
    <div class="container">
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <div class="feature-icon">
            <component :is="feature.icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const TruckIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('rect', { x: '1', y: '3', width: '15', height: '13' }),
  h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
  h('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
  h('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
])

const ShieldCheckIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
  h('polyline', { points: '9 12 12 15 16 10' })
])

const RefreshCwIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('polyline', { points: '23 4 23 10 17 10' }),
  h('polyline', { points: '1 20 1 14 7 14' }),
  h('path', { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' })
])

const HeadphonesIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }, [
  h('path', { d: 'M3 18v-6a9 9 0 0 1 18 0v6' }),
  h('path', { d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' })
])

const features = [
  {
    id: 1,
    icon: TruckIcon,
    title: '免费配送',
    description: '订单满199元即可享受全国免费配送服务'
  },
  {
    id: 2,
    icon: ShieldCheckIcon,
    title: '正品保证',
    description: '100%正品保证，假一赔十，购物无忧'
  },
  {
    id: 3,
    icon: RefreshCwIcon,
    title: '7天无理由退换',
    description: '支持7天无理由退换货，让您购物更放心'
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: '专属客服',
    description: '7×24小时在线客服，随时为您解答疑问'
  }
]
</script>

<style scoped>
.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
  color: white;
  padding: 20px;
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 14px;
  opacity: 0.85;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 576px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 10px;
  }
}
</style>
