<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="page-title">购物车</h1>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <h2>购物车是空的</h2>
        <p>快去挑选心仪的商品吧</p>
        <router-link to="/products" class="btn-primary">去购物</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.product.image" :alt="item.product.name" class="item-image" />
            <div class="item-info">
              <h3 class="item-name">{{ item.product.name }}</h3>
              <p class="item-brand">{{ item.product.brand }}</p>
              <div v-if="item.selectedColor || item.selectedSize" class="item-specs">
                <span v-if="item.selectedColor">颜色: {{ item.selectedColor }}</span>
                <span v-if="item.selectedSize">尺码: {{ item.selectedSize }}</span>
              </div>
            </div>
            <div class="item-price">¥{{ item.product.price }}</div>
            <div class="item-quantity">
              <button @click="item.quantity > 1 && item.quantity--">-</button>
              <input v-model.number="item.quantity" type="number" min="1" />
              <button @click="item.quantity++">+</button>
            </div>
            <div class="item-total">¥{{ item.product.price * item.quantity }}</div>
            <button class="item-remove" @click="removeItem(item.id)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="cart-summary">
          <h3>订单摘要</h3>
          <div class="summary-row">
            <span>商品总数</span>
            <span>{{ totalItems }} 件</span>
          </div>
          <div class="summary-row">
            <span>商品总额</span>
            <span>¥{{ totalPrice }}</span>
          </div>
          <div class="summary-row">
            <span>运费</span>
            <span class="free">免运费</span>
          </div>
          <div class="summary-divider" />
          <div class="summary-row total">
            <span>应付总额</span>
            <span class="total-price">¥{{ totalPrice }}</span>
          </div>
          <button class="checkout-btn" @click="checkout">结算</button>
          <router-link to="/products" class="continue-shopping">继续购物</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  product: {
    id: number
    name: string
    brand: string
    price: number
    image: string
  }
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

const cartItems = ref<CartItem[]>([])

const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
)

const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

const checkout = () => {
  alert('结算功能开发中...')
}
</script>

<style scoped>
.cart-view {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  background: var(--gray-50);
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 32px;
  padding-top: 20px;
}

/* 空购物车 */
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
}

.empty-cart svg {
  width: 80px;
  height: 80px;
  color: var(--gray-300);
  margin-bottom: 24px;
}

.empty-cart h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 8px;
}

.empty-cart p {
  font-size: 14px;
  color: var(--gray-500);
  margin-bottom: 24px;
}

/* 购物车内容 */
.cart-content {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 30px;
}

.cart-items {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr 100px 120px 100px 40px;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-bottom: 1px solid var(--gray-100);
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 100px;
  height: 120px;
  object-fit: cover;
  border-radius: var(--radius);
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-800);
}

.item-brand {
  font-size: 13px;
  color: var(--primary-600);
}

.item-specs {
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: var(--gray-500);
}

.item-price {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-700);
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 0;
}

.item-quantity button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray-200);
  background: white;
  cursor: pointer;
  font-size: 16px;
}

.item-quantity button:first-child {
  border-radius: var(--radius) 0 0 var(--radius);
}

.item-quantity button:last-child {
  border-radius: 0 var(--radius) var(--radius) 0;
}

.item-quantity input {
  width: 50px;
  height: 32px;
  border: 1px solid var(--gray-200);
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 14px;
  outline: none;
}

.item-total {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-700);
}

.item-remove {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--radius);
  background: var(--gray-100);
  color: var(--gray-500);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.item-remove:hover {
  background: #fee2e2;
  color: #ef4444;
}

.item-remove svg {
  width: 18px;
  height: 18px;
}

/* 订单摘要 */
.cart-summary {
  position: sticky;
  top: 90px;
  background: white;
  border-radius: var(--radius-xl);
  padding: 28px;
  height: fit-content;
}

.cart-summary h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  color: var(--gray-600);
}

.summary-row .free {
  color: var(--success);
  font-weight: 500;
}

.summary-divider {
  height: 1px;
  background: var(--gray-100);
  margin: 20px 0;
}

.summary-row.total {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-800);
}

.total-price {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-700);
}

.checkout-btn {
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.continue-shopping {
  display: block;
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.3s ease;
}

.continue-shopping:hover {
  color: var(--primary-600);
}

/* 响应式 */
@media (max-width: 1024px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 80px 1fr auto;
    gap: 12px;
  }

  .item-image {
    width: 80px;
    height: 100px;
  }

  .item-price,
  .item-total {
    display: none;
  }
}
</style>
