<template>
  <div class="content">
    <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image>

    <div class="info">
      <p class="title">点石科技</p>
      <!-- <p class="title">让你每天多一点米</p> -->
      <div class="action">
        <el-input class="search-input" placeholder="请输入您想要的" v-model="srarchVal">
          <el-button class="search-btn" slot="append">搜索</el-button>
        </el-input>
      </div>
    </div>

    <div class="scene">
      <div class="detail">

        <div class="title">
          <img src="@/assets/images/home/job.png" />
          <p class="label">帮您找到任何工作，从快速到长期工作</p>
        </div>
        <div class="scene-list">
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">高薪急聘月嫂，包吃住<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：全职工作</el-col>
                  <el-col :span="12">工作类型：月嫂阿姨</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：朝阳北苑</el-col>
                  <el-col :span="12">招聘人数：200人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job1.png" />
            </div>
          </div>
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">诚聘美容师<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：全职工作</el-col>
                  <el-col :span="12">工作类型：美容师</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：新都</el-col>
                  <el-col :span="12">招聘人数：10人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job2.png" />
            </div>
          </div>
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">招聘保安<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：12.16-01.31</el-col>
                  <el-col :span="12">工作类型：保安</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：渝中较场口</el-col>
                  <el-col :span="12">招聘人数：50人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job3.png" />
            </div>
          </div>
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">维修工<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：全职工作</el-col>
                  <el-col :span="12">工作类型：维修工</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：渝北人和</el-col>
                  <el-col :span="12">招聘人数：5人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job4.png" />
            </div>
          </div>
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">家政招工<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：长期可做</el-col>
                  <el-col :span="12">工作类型：临时工</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：上城</el-col>
                  <el-col :span="12">招聘人数：1000人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job5.png" />
            </div>
          </div>
          <div class="scene-item">
            <div class="bg">
              <div class="item-info">
                <p class="item-title">采耳师<span class="status">急聘</span></p>
                <el-row class="row">
                  <el-col :span="12">工作时间：长期可做</el-col>
                  <el-col :span="12">工作类型：采耳师</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">工作地点：上城</el-col>
                  <el-col :span="12">招聘人数：10人</el-col>
                </el-row>
              </div>
              <img src="@/assets/images/home/job6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="expert-row">
      <div class="title">
        <img src="@/assets/images/home/expert.png" />
        <p class="label">任何时间，任何地点，找到你想要的答案</p>
        <p class="service-time">7*24小时在线服务</p>
      </div>
      <div class="gallery">
        <el-carousel height="520px" :interval="5000" :autoplay="false" arrow="never">
          <el-carousel-item class="gallery-item" v-for="item in 4" :key="item">
            <div class="expert-list">
              <div class="expert-item">
                <!-- <span class="price">$44/hr</span> -->
                <img class="expert-avatar" src="@/assets/images/home/user1.png" />
                <p class="expert-name">陈博士</p>
                <p class="flag">seo顾问/新闻联播</p>
                <p class="short-line"></p>
                <div class="review">
                  <img class="star" src="@/assets/images/home/star.png" />
                  <p class="score">4.9/5</p>
                </div>
                <!-- <p class="expert-intro">A major turning point in the history of early philosophical science was the controversial but successful attempt by Socrates to apply  including human nature, the nature of political communities, and human knowledge itself. He criticized the older type of study of physics as too purely speculative, and lacking in self-criticism. He was particularly concerned that some of the early physicists treated nature as if it could be assumed that it had no intelligent order, explaining things merely in terms of motion and matter. The study of human things had been the realm of mythology and tradition, and Socrates was executed.</p> -->
                <el-button class="btn-more" type="primary">查看更多<i class="el-icon-right"></i></el-button>
              </div>
              <div class="expert-item">
                <!-- <span class="price">$50/hr</span> -->
                <img class="expert-avatar" src="@/assets/images/home/user2.png" />
                <p class="expert-name">李博士</p>
                <p class="flag">认证教练发展编辑/作者</p>
                <p class="short-line"></p>
                <div class="review">
                  <img class="star" src="@/assets/images/home/star.png" />
                  <p class="score">5.0/5</p>
                </div>
                <!-- <p class="expert-intro">A major turning point in the history of early philosophical science was the controversial but successful attempt by Socrates to apply  including human nature, the nature of political communities, and human knowledge itself. He criticized the older type of study of physics as too purely speculative, and lacking in self-criticism. He was particularly concerned that some of the early physicists treated nature as if it could be assumed that it had no intelligent order, explaining things merely in terms of motion and matter. The study of human things had been the realm of mythology and tradition, and Socrates was executed.</p> -->
                <el-button class="btn-more" type="primary">查看更多<i class="el-icon-right"></i></el-button>
              </div>
              <div class="expert-item">
                <!-- <span class="price">$50/hr</span> -->
                <img class="expert-avatar" src="@/assets/images/home/user3.png" />
                <p class="expert-name">隋博士</p>
                <p class="flag">文案作家/翻译/网页编辑</p>
                <p class="short-line"></p>
                <div class="review">
                  <img class="star" src="@/assets/images/home/star.png" />
                  <p class="score">5.0/5</p>
                </div>
                <!-- <p class="expert-intro">A major turning point in the history of early philosophical science was the controversial but successful attempt by Socrates to apply  including human nature, the nature of political communities, and human knowledge itself. He criticized the older type of study of physics as too purely speculative, and lacking in self-criticism. He was particularly concerned that some of the early physicists treated nature as if it could be assumed that it had no intelligent order, explaining things merely in terms of motion and matter. The study of human things had been the realm of mythology and tradition, and Socrates was executed.</p> -->
                <el-button class="btn-more" type="primary">查看更多<i class="el-icon-right"></i></el-button>
              </div>
              <div class="expert-item">
                <!-- <span class="price">$60/hr</span> -->
                <img class="expert-avatar" src="@/assets/images/home/user4.png" />
                <p class="expert-name">叶博士</p>
                <p class="flag">作者/编辑/校对者</p>
                <p class="short-line"></p>
                <div class="review">
                  <img class="star" src="@/assets/images/home/star.png" />
                  <p class="score">4.9/5</p>
                </div>
                <!-- <p class="expert-intro">A major turning point in the history of early philosophical science was the controversial but successful attempt by Socrates to apply  including human nature, the nature of political communities, and human knowledge itself. He criticized the older type of study of physics as too purely speculative, and lacking in self-criticism. He was particularly concerned that some of the early physicists treated nature as if it could be assumed that it had no intelligent order, explaining things merely in terms of motion and matter. The study of human things had been the realm of mythology and tradition, and Socrates was executed.</p> -->
                <el-button class="btn-more" type="primary">查看更多<i class="el-icon-right"></i></el-button>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      
    </div>
    <div class="steps-row">
      <div class="steps">
        <p class="steps-title">点石科技的服务流程</p>
        <p class="steps-line"></p>
        <div class="step-list">
          <div class="step">
            <img class="step-img" src="@/assets/images/home/icon1.png" />
            <p class="step-label">免费发布需求</p>
            <p class="step-desc">01</p>
          </div>
          <img class="edit-right" src="@/assets/images/home/edit-right.png" />
          <div class="step">
            <img class="step-img" src="@/assets/images/home/icon2.png" />
            <p class="step-label">智能匹配人才</p>
            <p class="step-desc">02</p>
          </div>
          <img class="edit-right" src="@/assets/images/home/edit-right.png" />
          <div class="step">
            <img class="step-img" src="@/assets/images/home/icon3.png" />
            <p class="step-label">快速协调工作</p>
            <p class="step-desc">03</p>
          </div>
          <img class="edit-right" src="@/assets/images/home/edit-right.png" />
          <div class="step">
            <img class="step-img" src="@/assets/images/home/icon4.png" />
            <p class="step-label">实时便捷支付</p>
            <p class="step-desc">04</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      banner: require('@/assets/images/home/banner.png'),
      fit: 'cover',
      srarchVal:'',
    }
  },
  created() {
    document.title = '点石科技';
  } ,
}
</script>

<style lang="scss" scoped>
  .content {
    .banner {
      width: 100%;
      min-width: 1200px;
      height: 800px;
      position: absolute;
      z-index: 100;
    }
    .info {
      z-index: 200;
      height: 567px;
      position: relative;
      padding-top: 233px;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        margin: 0;
        margin-bottom: 40px;
        height: 80px;
        font-size: 80px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #112B6B;
        line-height: 80px;
      }
      .action {
        margin-top: 20px;
        .search-input {
          width: 1000px;
          height: 65px;
          background: #FFFFFF;
          box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
          border-radius: 33px;
          overflow: hidden;
        }
        ::v-deep .el-input__inner {
          height: 67px;
          border: none;
          font-size: 16px;
        }
        .search-btn {
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 2px;
          color: #FFFFFF;
          width: 161px;
          height: 65px;
          background: #FFC80A;
          // border-radius: 0px 34px 34px 0px;
        }
      }
      
    }
    .scene {
      background: url('~@/assets/images/home/bg.png') no-repeat top;
      background-size: 100% 100%;
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
          margin: 57px 0 62px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .label {
            margin: 27px 0 0;
            height: 33px;
            font-size: 24px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            color: #1F2B38;
            line-height: 33px;
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
          flex-wrap: wrap;
          justify-content: space-between;
          width: 1200px;
          padding-bottom: 50px;
          .scene-item {
            width: 590px;
            height: 146px;
            border-radius: 14px;
            margin-bottom: 20px;
            background: #E1EBFA;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
            .bg {
              margin-left: 6px;
              background-color: #fff;
              width: 584px;
              height: 146px;
              display: flex;
              border-radius: 10px;
              .row {
                margin-bottom: 10px;
              }
              img {
                width: 160px;
                height: 146px;
                flex-shrink: 0;
              }
              .item-info {
                padding: 19px 0 0 26px;
                flex: 1;
                p {
                  margin: 0;
                }
                .item-title {
                  margin-bottom: 20px;
                  height: 28px;
                  font-size: 20px;
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  color: #1F2B38;
                  line-height: 28px;
                  display: flex;
                  align-items: center;
                  .status {
                    display: inline-block;
                    width: 40px;
                    height: 20px;
                    border-radius: 4px;
                    border: 1px solid #CC3838;
                    font-size: 12px;
                    font-family: PingFangSC, PingFang SC;
                    font-weight: 400;
                    color: #CC3838;
                    text-align: center;
                    line-height: 20px;
                    margin-left: 8px;
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
          }
          .reverse {
            flex-direction: row-reverse;
          }
        }
      }
    }
    .expert-row {
      display: flex;
      min-width: 1200px;
      align-items: center;
      flex-direction: column;
      background-color: #f0f2f5;
      .title {
        height: 140px;
        margin: 57px 0 62px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .label {
          margin: 27px 0 0;
          height: 33px;
          font-size: 24px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #1F2B38;
          line-height: 33px;
        }
        .service-time {
          margin: 0;
          margin-top: 20px;
          height: 32px;
          font-size: 18px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #212121;
          line-height: 32px;
        }
      }
      .gallery {
        padding-bottom: 60px;
        width: 1200px;
        .gallery-item {
          .expert-list {
            display: flex;
            width: 1200px;
            justify-content: space-between;
            .expert-item {
              width: 210px;
              height: 457px;
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              .price {
                height: 32px;
                font-size: 18px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #212121;
                line-height: 32px;
                display: inline-block;
                position: absolute;
                right: 0;
                top: 0;
              }

              .expert-avatar {
                width: 96px;
                height: 96px;
                margin-top: 52px;
                border-radius: 50%; 
              }
              .expert-name {
                margin: 22px 0 0;
                height: 32px;
                font-size: 22px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #212121;
                line-height: 32px;
              }
              .flag {
                margin: 7px 0 0;
                height: 14px;
                font-size: 10px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                color: #9FA3A7;
                line-height: 14px;
                letter-spacing: 1px;
              }
              .short-line {
                margin: 20px 0 0;
                width: 39px;
                height: 2px;
                background: #EAEAEA;
              }
              .review {
                margin-top: 18px;
                height: 17px;
                display: flex;
                align-items: center;
                .star {
                  width: 14px;
                  height: 13px;
                  margin-right: 9px;
                }
                .score {
                  height: 17px;
                  margin: 0;
                  font-size: 12px;
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  color: #292929;
                  line-height: 17px;
                  letter-spacing: 2px;
                  .count {
                    margin-left: 7px;
                    height: 17px;
                    font-size: 12px;
                    font-family: PingFangSC, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    line-height: 17px;
                    letter-spacing: 1px;
                  }
                }
              }
              .expert-intro {
                margin: 20px 0 0;
                height: 75px;
                overflow: hidden;
                font-size: 14px;
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                color: #9FA3A7;
                line-height: 26px;
              }
              .btn-more {
                margin-top: 34px;
                width: 172px;
                height: 48px;
                background: #FFC80A;
                border: 1px solid #FFC80A;
                border-radius: 50px;
                color: #292929;
                i {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
    ::v-deep .el-carousel__button {
      
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: #9FA3A7;
    }
    ::v-deep .el-carousel__indicators--horizontal {
      display: flex;
      align-items: center;
    }
    ::v-deep .el-carousel__indicator--horizontal {
      padding: 12px;
    }
    ::v-deep .el-carousel__indicator.is-active button {
      background: #FFC80A;
      opacity: 1;
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }
    .steps-row {
      height: 543px;
      width: 100%;
      min-width: 1200px;
      background: url("~@/assets/images/home/bg2.png") no-repeat center;
      display: flex;
      background-size: 100% 100%;
      justify-content: center;
      .steps {
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .steps-title {
          margin: 80px 0 0;
          height: 45px;
          font-size: 32px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #1F2B38;
          line-height: 45px;
        }
        .steps-line {
          margin: 40px 0 0;
          width: 117px;
          height: 3px;
          background: #F05638;
        }
        .step-list {
          margin-top: 68px;
          display: flex;
          width: 1200px;
          align-items: center;
          justify-content: space-between;
          .edit-right {
            width: 30px;
            height: 14px;
          }
          .step {
            padding: 48px 0 37px;
            display: flex;
            width: 254px;
            background: #FFFFFF;
            border: 1px solid #B4D9FD;
            flex-direction: column;
            align-items: center;
            .step-img {
              width: 80px;
              height: 80px;
            }
            .step-label {
              margin: 18px 0 0;
              height: 22px;
              font-size: 16px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              color: #212121;
              line-height: 22px;
              letter-spacing: 1px;
            }
            .step-desc {
              margin: 9px 0 0;
              text-align: center;
              font-size: 36px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              color: #999999;
              line-height: 50px;
            }
          }
        }
      }
    }
  }
</style>