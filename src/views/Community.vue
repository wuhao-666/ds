<template>
  <div class="content">
    <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image>
    <div class="info">
      <p class="title">点石科技</p>
      <p class="slogan">让每位劳动者体面的生活</p>
    </div>
    <div class="scene">
      <div class="detail">
        <div class="title">
          <p class="left">“</p>
          <p class="label">点石科技 是面向平台注册劳动者提供个人职业和生活服务的智能化平台。</p>
          <p class="right">”</p>
        </div>
        <p class="line"></p>
        <div class="scene-list">
          <div class="scene-item">
            <img src="@/assets/images/community/item1.png" />
            <div class="item-info">
              <p class="index"><span class="number">1</span>Employment opportunities</p>
              <p class="point">充分的就业机会</p>
              <p class="desc">包括外卖、网约车在内的多场景就业机会，供具备各种技能的劳动者选择</p>
              <div class="action">
                <el-button plain round class="btn"><i class="el-icon-right"></i></el-button>
                <p class="text">查看就业机会</p>
              </div>
            </div>
          </div>
          <p class="line"></p>
          <div class="scene-item reverse">
            <img src="@/assets/images/community/item2.png" />
            <div class="item-info">
              <p class="index"><span class="number">2</span>Steady income</p>
              <p class="point">稳定的收入来源</p>
              <p class="desc">点石科技平台精选诚信稳定的雇主企业，确保劳动者权益</p>
              <div class="action">
                <el-button plain round class="btn"><i class="el-icon-right"></i></el-button>
                <p class="text">查看就业机会</p>
              </div>
            </div>
          </div>
          <p class="line"></p>
          <div class="scene-item">
            <img src="@/assets/images/community/item3.png" />
            <div class="item-info">
              <p class="index"><span class="number">3</span>Learning opportunities</p>
              <p class="point">持续的成长学习机会</p>
              <p class="desc">点石科技在线课堂持续培训，涵盖从业技能、行业道德、安全作业、管理培训等等，让劳动者全职业生涯持续成长。</p>
              <div class="action">
                <el-button plain round class="btn"><i class="el-icon-right"></i></el-button>
                <p class="text">查看就业机会</p>
              </div>
            </div>
          </div>
          <p class="line"></p>
          <div class="scene-item reverse">
            <img src="@/assets/images/community/item4.png" />
            <div class="item-info">
              <p class="index"><span class="number">4</span>Personal financial services</p>
              <p class="point">个人金融服务</p>
              <p class="desc">点石科技精选有资质的高质量金融机构，对稳定且持续活跃的劳动者提供薪资贷及其他金融支持。点石科技为优质劳动者提供背书和增信支持。</p>
              <div class="action">
                <el-button plain round class="btn"><i class="el-icon-right"></i></el-button>
                <p class="text">查看就业机会</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data(){
    return {
      fit: 'cover',
      banner: require('@/assets/images/community/banner.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    min-width: 1200px;
    background-color: #f6f8fc;
    .banner {
      width: 100%;
      min-width: 1200px;
      height: 480px;
      position: absolute;
      z-index: 100;
    }
    .info {
      z-index: 200;
      height: 283px;
      position: relative;
      padding-top: 197px;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        margin: 0;
        margin-bottom: 51px;
        height: 64px;
        font-size: 60px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #112B6B;
        line-height: 64px;
      }
      .slogan {
        margin: 0;
        height: 64px;
        font-size: 48px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #112B6B;
        line-height: 64px;
      }
    
    }
    .scene {
      background: url('~@/assets/images/scene/bg.png') no-repeat top;
      width: 100%;
      display: flex;
      min-width: 1200px;
      justify-content: center;
      
      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          height: 140px;
          margin: 54px 0 22px;
          display: flex;
          width: 1200px;
          align-items: center;
          justify-content: space-around;
          .left {
            margin: 0;
            height: 140px;
            font-size: 100px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            color: #1F2B38;
            line-height: 140px;
          }
          .right {
            margin: 0;
            height: 140px;
            font-size: 100px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            color: #1F2B38;
            line-height: 280px;
          }
          .label {
            margin: 0;
            height: 28px;
            font-size: 20px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            color: #1F2B38;
            line-height: 28px;
          }
        }
        .line {
          margin: 0;
          height: 0;
          width: 100%;
          border: 1px solid #D1D1D1;
        }
        .scene-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 1200px;
          .scene-item {
            width: 900px;
            height: 240px;
            display: flex;
            margin: 60px 0;
            align-items: center;
            justify-content: space-between;
            img {
              position: relative;
              z-index: 200;
              width: 400px;
              height: 240px;
            }
            .item-info {
              width: 430px;
              height: 240px;
              position: relative;
              p {
                margin: 0;
              }
              .index {
                padding-left: 22px;
                height: 17px;
                font-size: 12px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #9FA3A7;
                line-height: 17px;
                letter-spacing: 2px;
                .number {
                  display: inline-block;
                  border-radius: 8px;
                  height: 16px;
                  width: 16px;
                  text-align: center;
                  font-size: 10px;
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 400;
                  color: #FFFFFF;
                  line-height: 16px;
                  letter-spacing: 2px;
                  background-color: #FFC80A;
                  margin-right: 15px;
                }
              }
              .point {
                padding-left: 51px;
                margin-top: 17px;
                height: 32px;
                font-size: 24px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #212121;
                line-height: 32px;
              }
              .desc {
                margin-top: 20px;
                padding-left: 51px;
                font-size: 14px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #9FA3A7;
                line-height: 26px;
              }
              .action {
                height: 40px;
                position: absolute;
                left: 51px;
                bottom: 0;
                display: flex;
                align-items: center;
                .btn {
                  width: 40px;
                  height: 40px;
                  border-radius: 20px;
                  font-size: 18px;
                  line-height: 40px;
                  padding: 0;
                  margin-right: 20px;
                  border: 1px solid #666666;
                }
              }
            }
          }
          .reverse {
            flex-direction: row-reverse;
          }
        }
      }
    }
  }
</style>