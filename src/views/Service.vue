<template>
  <div class="content">
    <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image>
    <div class="info">
      <el-button round class="right-btn"><i class="el-icon-right"></i></el-button>
      <div class="detail">
        <div class="dots">
          <i class="dot d1"></i>
          <i class="dot d2"></i>
          <i class="dot d3"></i>
          <i class="dot d4"></i>
        </div>
        <p class="title">共享服务</p>
        <p class="slogan">点石科技为服务型企业客户提供场景式、高质量的服务</p>
        <p class="slogan">帮助每个服务型企业成就卓越</p>
        <p class="left-tips">THE SERVICE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data(){
    return {
      fit: 'cover',
      banner: require('@/assets/images/service/banner.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    min-width: 1200px;
    .banner {
      width: 100%;
      min-width: 1200px;
      height: 1080px;
      position: absolute;
      z-index: 100;
    }
    .info {
      height: 1080px;
      position: relative;
      z-index: 200;
      width: 100%;
      display: flex;
      justify-content: center;
      .right-btn {
        position: absolute;
        width: 103px;
        height: 103px;
        border-radius: 52px;
        background-color: #FFC80A;
        right: 66px;
        top: 50%;
        color: #fff;
        font-size: 50px;
      }
      .detail{
        position: relative;
        margin-top: 74px;
        padding-top: 328px;
        width: 1200px;
        display: flex;
        flex-direction: column;
        .dots {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 10px;
          .dot {
            display: block;
            margin-bottom: 20px;
          }
          .d1 {
            width: 10px;
            height: 10px;
            background: #112B6B;
            border-radius: 5px;
          }
          .d2 {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #7485af;
          }
          .d3 {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #7485af;
          }
          .d4 {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #7485af;
          }
        }
        .title {
          margin: 0;
          margin-bottom: 30px;
          height: 106px;
          font-size: 90px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          color: #112B6B;
          line-height: 106px;
        }
        .slogan {
          margin: 0;
          margin-bottom: 34px;
          height: 64px;
          font-size: 48px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          color: #112B6B;
          line-height: 64px;
        }
        .left-tips {
          position: absolute;
          left: -61px;
          bottom: 100px;
          width: 122px;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #112B6B;
          line-height: 20px;
          letter-spacing: 2px;
        }
      }
    }
  }
</style>