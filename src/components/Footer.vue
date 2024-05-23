<template>
  <div class="temp-footer">
    <div class="content">
      <p class="company">技术支持：重庆市点石教育科技发展有限公司</p>
      <a href="https://beian.miit.gov.cn" target="_blank" class="beian">京ICP备2023038032号</a>
    </div>
  </div>
  <!-- <div class="footer">
      <div class="content">
        <div class="links">
          <div class="link-column">
            <p class="column-title">For Client</p>
            <a class="link-item" href="#">How  to Hire</a>
            <a class="link-item" href="#">Talent Marketplace</a>
            <a class="link-item" href="#">Project Catalog</a>
            <a class="link-item" href="#">Hire an Agency</a>
            <a class="link-item" href="#">Enterprise</a>
            <a class="link-item" href="#">Any Hire</a>
            <a class="link-item" href="#">Contract-to-Hire</a>
            <a class="link-item" href="#">Direct Contracts</a>
            <a class="link-item" href="#">Hire Worldwide</a>
            <a class="link-item" href="#">Hire in the USA</a>
            
          </div>
          <div class="link-column">
            <p class="column-title">COMPANY</p>
            <a class="link-item" href="#">How to Find Work</a>
            <a class="link-item" href="#">Direct Contract</a>
            <a class="link-item" href="#">Find Freelance Jobs World wide</a>
            <a class="link-item" href="#">Find Freelance Jobs in the USA</a>
          </div>
          <div class="link-column">
            <p class="column-title">LEARN MORE</p>
            <a class="link-item" href="#">Help & Support</a>
            <a class="link-item" href="#">Success Stories</a>
            <a class="link-item" href="#">Upwork Reviews</a>
            <a class="link-item" href="#">Resources</a>
            <a class="link-item" href="#">Blog</a>
            <a class="link-item" href="#">Community</a>
            <a class="link-item" href="#">Affiliate Program</a>
            <a class="link-item" href="#">Free Business tools</a>
            
          </div>
          <div class="link-column">
            <p class="column-title">COMPANY</p>
            <a class="link-item" href="#">About Us</a>
            <a class="link-item" href="#">Leadership</a>
            <a class="link-item" href="#">Investor Relations</a>
            <a class="link-item" href="#">Careers</a>
            <a class="link-item" href="#">Our Impact</a>
            <a class="link-item" href="#">Press</a>
            <a class="link-item" href="#">Contact Us</a>
            <a class="link-item" href="#">Trust,Safety & Security</a>
            <a class="link-item" href="#">Modern Slavery Statement</a>
          </div>
          
        </div>

        <div class="follow"></div>
        <div class="line"></div>

        <div class="landing">
          <img class="logo" src="" />
        </div>
        <p class="copyright">© 2024 Landing. All rights reserved.</p>
      </div>
    </div> -->
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
/* .fixfoot {
  position: fixed;
  bottom: 0;
} */

.temp-footer {
  width: 100%;
  height: 80px;
  background-color: #2C2C2C;
  display: flex;
  align-items: center;
  justify-content: center;

  

  .content {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .company {
      font-size: 14px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      color: #9FA3A7;
      line-height: 36px;
      margin: 0 30px;
      text-decoration: none;
    }

    .beian {
      margin: 0 30px;
      font-size: 14px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      color: #9FA3A7;
      line-height: 36px;
      text-decoration: none;
    }
  }
}

.footer {
  min-width: 1200px;
  display: flex;
  justify-content: center;
  background-color: #2C2C2C;
  height: 760px;

  .content {
    width: 1200px;
    display: flex;
    flex-direction: column;

    .links {
      margin-top: 78px;
      display: flex;

      .link-column {
        display: flex;
        flex: 1;
        flex-direction: column;

        .column-title {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 17px;
          letter-spacing: 2px;
        }

        .link-item {
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #9FA3A7;
          line-height: 36px;
          text-decoration: none;
        }
      }
    }

    .follow {
      margin-top: 60px;
      height: 45px;
    }

    .line {
      margin-top: 20px;
      width: 1200px;
      height: 0;
      opacity: 0.1;
      border: 1px solid #FFFFFF;
    }

    .landing {
      height: 38px;
      margin-top: 15px;

      .logo {
        height: 38px;

      }
    }

    .copyright {
      margin-top: 58px;
      height: 22px;
      font-size: 12px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      color: rgba(200, 200, 200, 0.5);
      line-height: 22px;
      text-align: center;
    }
  }
}
</style>