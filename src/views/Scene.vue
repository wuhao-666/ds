<template>
  <div class="content">
    <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image>
    <div class="info">
      <p class="title">覆盖场景介绍</p>
      <p class="slogan">为劳动者和服务型企业提供多种服务场景工作机会</p>
      <el-button round class="btn">查看更多<i style="margin-left: 20px;" class="el-icon-right"></i></el-button>
    </div>
    <div class="scene">
      <div class="detail">
        <p class="title">主要场景</p>
        <div class="scene-list">
          <div class="t">
            <span>服务场景</span>
            <img src="@/assets/images/scene/arrow.png" />
          </div>
          <div class="scene-item">
            <img src="@/assets/images/scene/item1.png" />
            <p class="label">外卖即时配送场景</p>
          </div>
          <div class="scene-item">
            <img src="@/assets/images/scene/item2.png" />
            <p class="label">网约车司机管理场景</p>
          </div>
          <div class="scene-item">
            <img src="@/assets/images/scene/item3.png" />
            <p class="label">家政保洁场景</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scene',
  data(){
    return {
      fit: 'cover',
      banner: require('@/assets/images/scene/banner.png'),
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
      height: 600px;
      position: absolute;
      z-index: 100;
    }
    .info {
      z-index: 200;
      height: 393px;
      position: relative;
      padding-top: 207px;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .btn {
        width: 221px;
        height: 64px;
        background: #FFC80A;
        border-radius: 32px;
        color: #fff;
        font-size: 20px;
      }
      .title {
        margin: 0;
        margin-bottom: 46px;
        height: 64px;
        font-size: 60px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #112B6B;
        line-height: 64px;
      }
      .slogan {
        margin: 0;
        margin-bottom: 45px;
        height: 64px;
        font-size: 36px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #112B6B;
        line-height: 64px;
      }
    
    }
    .scene {
      height: 747px;
      background: url('~@/assets/images/scene/bg.png') no-repeat center;
      width: 100%;
      display: flex;
      min-width: 1200px;
      justify-content: center;
      
      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          margin: 62px 0 60px;
          height: 45px;
          font-size: 32px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          color: #1F2B38;
          line-height: 45px;
        }
        .scene-list {
          display: flex;
          align-items: center;
          height: 520px;
          width: 1200px;
          justify-content: space-between;
          .t {
            display: flex;
            align-items: center;
            span {
              display: inline-block;
              height: 26px;
              font-size: 18px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              color: #666666;
              line-height: 26px;
            }
            img {
              width: 19px;
              height: 20px;
              margin-left: 12px;
            }
          }
          .scene-item {
            width: 320px;
            height: 520px;
            position: relative;
            background: #FFFFFF;
            border-radius: 8px;
            overflow: hidden;
            img {
              position: relative;
              z-index: 200;
              width: 320px;
              height: 440px;
              &:hover {
                transform: scale(1.1);
                transition: all 0.5s;
                cursor: pointer;
              }
            }
            .label {
              position: relative;
              z-index: 300;
              background-color: #fff;
              height: 80px;
              margin: 0;
              font-size: 22px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              color: #212121;
              line-height: 80px;
              padding: 0 25px;
            }
          }
        }
      }
    }
  }
</style>