<template>
  <footer class="footer">
    <div class="container">
      <!-- 主要内容区 -->
      <div class="footer-main">
        <!-- 品牌信息 -->
        <div class="footer-brand">
          <div class="brand-header">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.38 3.4a1.6 1.6 0 0 0-2.29.1l-9.18 9.19-3.54-3.54a1.6 1.6 0 0 0-2.26 0L1.4 10.86a1.6 1.6 0 0 0 0 2.26l6.93 6.93a1.6 1.6 0 0 0 2.26 0l10.4-10.4a1.6 1.6 0 0 0-.1-2.29l-1.41-1.96z"/>
              </svg>
            </div>
            <span class="brand-name">衣品汇</span>
          </div>
          <p class="brand-desc">
            专注于高品质衣帽服饰，为您精选全球优质商品，打造时尚舒适的穿搭体验。
          </p>
          <div class="social-links">
            <a v-for="social in socialLinks" :key="social.name" href="#" class="social-link">
              <component :is="social.icon" />
            </a>
          </div>
        </div>

        <!-- 链接列表 -->
        <div class="footer-links">
          <div v-for="group in linkGroups" :key="group.title" class="link-group">
            <h4 class="group-title">{{ group.title }}</h4>
            <ul class="group-list">
              <li v-for="link in group.links" :key="link.name">
                <a :href="link.href" class="group-link">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 联系信息 -->
        <div class="footer-contact">
          <h4 class="group-title">联系我们</h4>
          <ul class="contact-list">
            <li class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>北京市朝阳区时尚大道88号</span>
            </li>
            <li class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>400-888-9999</span>
            </li>
            <li class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>service@yipinhui.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <p class="copyright">© 2026 衣品汇. All rights reserved.</p>
        <div class="payment-methods">
          <span class="payment-label">支付方式：</span>
          <div class="payment-icons">
            <span v-for="method in paymentMethods" :key="method" class="payment-icon">
              {{ method }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h } from 'vue'

const WechatIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z' })
])

const WeiboIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.194.573zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.579-.18-.405-.649.389-1.061.428-1.979.002-2.635-.801-1.246-2.994-1.18-5.507-.034 0 0-.791.345-.589-.281.389-1.213.33-2.229-.275-2.817-1.371-1.349-5.022.052-8.151 3.13C.917 11.897 0 14.565 0 16.948c0 4.563 5.82 7.337 11.508 7.337 7.46 0 12.428-4.321 12.428-7.756 0-2.073-1.742-3.249-3.847-3.88zm.133-5.838c-.839-.936-2.089-1.27-3.285-1.082-.468.073-.789.502-.716.97.072.469.502.79.97.717.671-.105 1.371.09 1.845.618.475.529.633 1.248.432 1.903-.122.398.102.818.5.94.398.123.818-.101.94-.5.357-1.164.089-2.479-.686-3.466zm2.665-2.655c-1.666-1.856-4.165-2.524-6.535-2.148-.647.101-1.09.717-.989 1.364.101.647.717 1.09 1.364.989 1.64-.258 3.36.22 4.531 1.527 1.172 1.306 1.512 3.077 1.003 4.697-.176.574.146 1.18.72 1.357.574.176 1.18-.146 1.357-.72.714-2.331.232-4.96-1.451-6.966z' })
])

const InstagramIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' })
])

const socialLinks = [
  { name: '微信', icon: WechatIcon },
  { name: '微博', icon: WeiboIcon },
  { name: 'Instagram', icon: InstagramIcon }
]

const linkGroups = [
  {
    title: '购物指南',
    links: [
      { name: '购物流程', href: '#' },
      { name: '会员介绍', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '联系客服', href: '#' }
    ]
  },
  {
    title: '配送服务',
    links: [
      { name: '配送方式', href: '#' },
      { name: '运费标准', href: '#' },
      { name: '物流追踪', href: '#' },
      { name: '签收须知', href: '#' }
    ]
  },
  {
    title: '售后服务',
    links: [
      { name: '退换货政策', href: '#' },
      { name: '退款说明', href: '#' },
      { name: '取消订单', href: '#' },
      { name: '投诉建议', href: '#' }
    ]
  }
]

const paymentMethods = ['支付宝', '微信支付', '银联']
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, var(--gray-900) 0%, #0f172a 100%);
  color: var(--gray-300);
  padding-top: 60px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  gap: 60px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 品牌信息 */
.footer-brand {
  max-width: 300px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: var(--gradient-primary);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-icon svg {
  width: 26px;
  height: 26px;
}

.brand-name {
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.brand-desc {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 24px;
  color: var(--gray-400);
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* 链接列表 */
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-group {
  display: flex;
  flex-direction: column;
}

.group-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.group-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-link {
  font-size: 14px;
  color: var(--gray-400);
  text-decoration: none;
  transition: all 0.3s ease;
}

.group-link:hover {
  color: var(--primary-400);
  padding-left: 4px;
}

/* 联系信息 */
.footer-contact {
  display: flex;
  flex-direction: column;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: var(--gray-400);
}

.contact-item svg {
  width: 18px;
  height: 18px;
  color: var(--primary-400);
  flex-shrink: 0;
  margin-top: 2px;
}

/* 底部版权 */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  font-size: 14px;
  color: var(--gray-500);
}

.copyright {
  margin: 0;
}

.payment-methods {
  display: flex;
  align-items: center;
  gap: 12px;
}

.payment-label {
  color: var(--gray-400);
}

.payment-icons {
  display: flex;
  gap: 8px;
}

.payment-icon {
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  font-size: 12px;
  color: var(--gray-400);
}

/* 响应式 */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;
  }

  .footer-contact {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-contact {
    grid-column: span 1;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
