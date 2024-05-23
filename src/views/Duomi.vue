<template>
  <div class="content">
    <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image>
    <div class="info">
      <p class="title">点石科技+ 自主研发数字化平台</p>
      <p class="bt-line"></p>
    </div>
    <div class="scene">
      <div class="detail">


        <div class="roles">
          <div class="role">
            <p class="role-name">劳动者</p>
            <!-- <p class="role-en">But I must explain to you how all this mistaken idea of denouncing pleasure and praising </p> -->
          </div>

          <div class="role">
            <p class="role-name">服务型企业管理者</p>
            <!-- <p class="role-en">But I must explain to you how all this mistaken idea of denouncing pleasure and praising </p> -->
          </div>
        </div>

        <div class="solutions">
          <div class="solution">
            <div class="s-titles">
              <p class="s-title">
                <span class="number">1</span>
                工作机会
              </p>
              <p class="s-title">
                <span class="number">2</span>
                兼职简单
              </p>
              <p class="s-title">
                <span class="number">3</span>
                个人收入报表
              </p>
              <p class="s-title">
                <span class="number">4</span>
                技能培训
              </p>
              <p class="s-title">
                <span class="number">5</span>
                在线课堂
              </p>
              <p class="s-title">
                <span class="number">6</span>
                创业扶持与金融
              </p>
            </div>
            <img src="@/assets/images/duomi/item1.png" />
          </div>
          <div class="v-line"></div>
          <div class="solution">
            <img src="@/assets/images/duomi/item2.png" />
            <div class="s-titles">
              <p class="s-title">
                <span class="number">1</span>
                劳动者管理
              </p>
              <p class="s-title">
                <span class="number">2</span>
                薪资计算引擎
              </p>
              <p class="s-title">
                <span class="number">3</span>
                薪资在线发放
              </p>
              <p class="s-title">
                <span class="number">4</span>
                场景运营实践
              </p>
              <p class="s-title">
                <span class="number">5</span>
                数据洞察和分析工具
              </p>
              <p class="s-title">
                <span class="number">6</span>
                管理报表
              </p>
              <p class="s-title">
                <span class="number">7</span>
                金融支持
              </p>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <p class="dot">“</p>
        <div class="gallery">
          <el-carousel height="386px" :interval="5000" arrow="always">
            <el-carousel-item class="gallery-item" v-for="item in 4" :key="item">
              <a href="https://screen.domy365.com" target="_blank"><img src="@/assets/images/duomi/statistics.png" /></a>
            </el-carousel-item>
          </el-carousel>
        </div>
        <p class="shot-line"></p>
        
        <div class="gallery2">
          <div class="gallery-item">
            <div class="g-logo"></div>
            <p class="g-label"></p>
            <i class="el-icon-caret-top g-dot"></i>
          </div>
          <div class="gallery-item">
            <img class="g-logo" src="@/assets/images/duomi/gallery1.png" />
            <p class="g-label">小程序</p>
            <i class="el-icon-caret-top g-dot"></i>
          </div>
          <div class="gallery-item g-active">
            <img class="g-logo" src="@/assets/images/duomi/gallery2.png" />
            <p class="g-label">工作台</p>
            <i class="el-icon-caret-top g-dot"></i>
          </div>
          <div class="gallery-item">
            <img class="g-logo" src="@/assets/images/duomi/gallery3.png" />
            <p class="g-label">数据大屏</p>
            <i class="el-icon-caret-top g-dot"></i>
          </div>
          <div class="gallery-item">
            <div class="g-logo"></div>
            <p class="g-label"></p>
            <i class="el-icon-caret-top g-dot"></i>
          </div>
        </div>

        <div class="line-over"></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Duomi',
  data(){
    return {
      fit: 'cover',
      banner: require('@/assets/images/duomi/banner.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    min-width: 1200px;
    background-color: #f0f2f5;
    .banner {
      width: 100%;
      min-width: 1200px;
      height: 480px;
      position: absolute;
      z-index: 100;
    }
    .info {
      z-index: 200;
      height: 252px;
      position: relative;
      padding-top: 228px;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        margin: 0;
        margin-bottom: 42px;
        height: 64px;
        font-size: 60px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #112B6B;
        line-height: 64px;
      }
      .bt-line {
        width: 117px;
        height: 3px;
        background: #112B6B;
      }
    
    }
    .scene {
      width: 100%;
      display: flex;
      min-width: 1200px;
      justify-content: center;
      
      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        .roles {
          width: 1200px;
          display: flex;
          margin-top: 80px;
          justify-content: space-around;
          .role {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 385px;
            height: 103px;
            .role-name {
              margin: 0 0 11px;
              height: 48px;
              font-size: 36px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              color: #212121;
              line-height: 48px;
            }
            .role-en {
              margin: 0;
              text-align: center;
              font-size: 12px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              color: #9FA3A7;
              line-height: 22px;
            }
          }
        }

        .solutions {
          width: 1200px;
          height: 400px;
          display: flex;
          margin: 66px 0 79px;
          justify-content: space-between;
          .v-line {
            height: 400px;
            width: 0;
            margin: 0 48px;
            border-left: 1px dashed #ccc;
          }
          .solution {
            display: flex;
            flex: 1;
            justify-content: space-between;
            .s-titles {
              width: 210px;
              .s-title {
                padding-left: 20px;
                margin: 0 0 2px;
                cursor: pointer;
                height: 54px;
                font-size: 16px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 600;
                color: #9FA3A7;
                letter-spacing: 1px;
                display: flex;
                align-items: center;
                .number {
                  display: inline-block;
                  margin-right: 17px;
                  font-size: 10px;
                  line-height: 16px;
                  color: #9FA3A7;
                  width: 16px;
                  height: 16px;
                  text-align: center;
                  border-radius: 8px;
                  background: #E8E9ED;
                }
                &:hover {
                  background-color: #fff;
                  border-top-right-radius: 23px;
                  border-bottom-right-radius: 23px;
                  color: #212121;
                  .number {
                    background-color: #FFC80A;
                    color: #212121;
                  }
                }
              }
            }
            img {
              width: 300px;
              height: 400px;
            }
          }
        }
        .line {
          margin: 0;
          height: 0;
          width: 100%;
          border: 1px solid #D1D1D1;
        }
        .dot {
          color: #FFC80A;
          height: 27px;
          font-size: 90px;
          line-height: 90px;
          margin: 0;
          margin-top: 90px;
        }
        .gallery {
          margin-top: 40px;
          margin-bottom: 54px;
          width: 1020px;
          height: 402px;
          padding: 8px 0;
          background: rgba(54,96,204,0.05);
          .gallery-item {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .shot-line {
          margin: 54px 0 0;
          width: 117px;
          height: 3px;
          background: #F05638;
        }

        .gallery2 {
          margin: 63px 0 0;
          display: flex;
          width: 1020px;
          height: 134px;
          justify-content: space-between;
          .gallery-item {
            height: 204px;
            position: relative;
            .g-logo {
              margin-top: 20px;
              width: 65px;
              height: 65px;
              background-color: #FAFAFA;
              border-radius: 50%;
            }
            .g-label {
              display: block;
              position: absolute;
              bottom: 20px;
              left: 0;
              right: 0;
              text-align: center;
              margin: 0;
              height: 32px;
              font-size: 16px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              color: #2C2C2C;
              line-height: 32px;
            }
            .g-dot {
              display: none;
              position: absolute;
              bottom: 10px;
              left: calc(50% - 8px);
              height: 3px;
            }
          }
          .g-active {
            .g-logo {
              margin-top: 0;
              width: 103px;
              height: 104px;
            }
            .g-label {
              height: 32px;
              font-size: 22px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              color: #2C2C2C;
              line-height: 32px;
            }
            .g-dot {
              display: block;
            }
          }
        }
        .line-over {
          margin: 0;
          height: 0;
          width: 100%;
          border: 1px solid #D1D1D1;
          margin-bottom: 183px;
        }
        .g-text-row {
          margin: 27px 0 124px;
          height: 32px;
          font-size: 22px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          color: #2C2C2C;
          line-height: 32px;
          .g-text {
            display: inline-block;
            margin: 0;

          }
        }
      }
    }
  }
</style>