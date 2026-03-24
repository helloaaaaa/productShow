<template>
  <footer class="footer" id="about">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section brand">
          <div class="footer-logo">
            <span class="logo-icon">🧢</span>
            <span class="logo-text">衣帽商城</span>
          </div>
          <p class="brand-description">
            专注于提供高品质的衣帽服饰，让您的穿搭更加时尚与舒适。
            我们精选优质面料，注重每一个细节，只为给您最好的穿着体验。
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="微信">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.937-6.609 1.12-1.03 2.562-1.6 4.082-1.668a5.006 5.006 0 0 0-.05-.562c-.959-4.01-5.4-5.645-8.698-5.645z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="微博">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="抖音">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-section links">
          <h4 class="footer-title">快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><a href="#products">全部商品</a></li>
            <li><a href="#categories">商品分类</a></li>
            <li><a href="#">新品上市</a></li>
            <li><a href="#">优惠活动</a></li>
          </ul>
        </div>
        
        <div class="footer-section links">
          <h4 class="footer-title">客户服务</h4>
          <ul class="footer-links">
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">配送说明</a></li>
            <li><a href="#">退换货政策</a></li>
            <li><a href="#">尺码指南</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        
        <div class="footer-section contact">
          <h4 class="footer-title">联系方式</h4>
          <div class="contact-info">
            <div class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>400-888-8888</span>
            </div>
            <div class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>service@yimaoshop.com</span>
            </div>
            <div class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>上海市浦东新区张江高科技园区</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 衣帽商城 Yimao Mall. 保留所有权利。</p>
        <div class="footer-bottom-links">
          <a href="#">隐私政策</a>
          <a href="#">用户协议</a>
          <a href="#">网站地图</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background-color: #1a1a2e;
  color: #b0b8c4;
  padding: 60px 0 0;
  margin-top: 80px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.footer-logo .logo-icon {
  font-size: 32px;
}

.footer-logo .logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-light);
  letter-spacing: 2px;
}

.brand-description {
  font-size: 14px;
  line-height: 1.8;
  color: #8b94a3;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0b8c4;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 12px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #8b94a3;
  font-size: 14px;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-light);
  padding-left: 4px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #8b94a3;
}

.contact-item svg {
  margin-top: 2px;
  color: var(--primary-light);
}

.footer-bottom {
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #6b778c;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  color: #6b778c;
  transition: color var(--transition-fast);
}

.footer-bottom-links a:hover {
  color: var(--primary-light);
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 576px) {
  .footer {
    padding-top: 40px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
