<template>
  <div class="content">
    <div class="info">
      <div class="detail">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              @select="handleSelect">
              <el-menu-item index="1" class="menu-item">
                <i class="el-icon-location"></i>
                <span slot="title">专家基地</span>
              </el-menu-item>
              <el-menu-item index="2" class="menu-item">
                <i class="el-icon-s-custom"></i>
                <span slot="title">专家库名录</span>
              </el-menu-item>
              <el-menu-item index="3" class="menu-item">
                <i class="el-icon-document"></i>
                <span slot="title">项目库目录</span>
              </el-menu-item>
              <el-menu-item index="4" class="menu-item">
                <i class="el-icon-message-solid"></i>
                <span slot="title">项目进度</span>
              </el-menu-item>
              <el-menu-item index="5" class="menu-item">
                <i class="el-icon-s-order"></i>
                <span slot="title">近期活动情况</span>
              </el-menu-item>
              <el-menu-item index="6" class="menu-item">
                <i class="el-icon-s-flag"></i>
                <span slot="title">专家服务</span>
              </el-menu-item>
              <el-menu-item index="7" class="menu-item">
                <i class="el-icon-phone"></i>
                <span slot="title">对接联系方式</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="14" :offset="1">
            <div class="active allTab FontType">
              <h2>重庆市南岸专家服务基地简介</h2>
              <p>
                重庆市南岸专家服务基地（下称专家基地）位于南滨路<span
                  class="numberFont">8</span>公里人文岸线的中心节点——重庆开埠遗址公园，地处南山一棵树景观通廊的滨江视窗，紧邻长江索道，坐拥百年文物建筑、临江观景视野，独享山城地域特色、人文历史底蕴、新潮消费场景、浪漫滨江夜景等新重庆地标资源。
              </p>
              <p>
                专家基地作为组织专家与基层需要对接、引导专家服务基层的重要载体和平台，旨在创新高层次人才柔性流动机制，组织引导广大专家利用专业优势，帮助基层集聚创新资源、突破关键技术、优化产业结构、培养急需人才，为基层加快实现创新驱动发展提供人才和智力支撑。同时，专家基地安排专员为各类专家在创新创业、生活保障等方面提供经办、协调服务。
              </p>
              <p>
                专家基地重点围绕南岸区<span
                  class="numberFont">“3+2”</span>产业发展需要和基层单位生产生活实际需求,建立需求项目库，发挥专家基地的桥梁纽带和平台载体作用，开展多种形式的智力帮扶活动，促进区域经济和社会高质量发展。
              </p>
            </div>
            <div class="allTab allTable">
              <!-- <a href="/static/cqsnaq.docx" download="重庆市南岸专家服务基地简介.docx">下载</a>
              <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
              </el-upload> -->
              <h2>重庆市南岸专家服务基地专家库</h2>
              <el-table :data="tableData" class="tableStyle" border :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column prop="date" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="100">
                </el-table-column>
                <el-table-column prop="address" label="工作单位">
                </el-table-column>
                <el-table-column prop="address" label="专业领域">
                </el-table-column>
                <el-table-column prop="address" label="备注">
                </el-table-column>
              </el-table>
              <el-button type="primary" size="default" class="downBtn">
                <a href="/static/zjk.xlsx" download="专家库.xlsx">下载</a>
              </el-button>
            </div>
            <div class="allTab allTable">
              <h2>重庆市南岸专家服务基地项目库</h2>
              <el-table :data="tableData" class="tableStyle" border :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column prop="date" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="name" label="申报单位" width="100">
                </el-table-column>
                <el-table-column prop="address" label="项目名称">
                </el-table-column>
                <el-table-column prop="address" label="服务时间">
                </el-table-column>
                <el-table-column prop="address" label="需求专家专业领域" width="140">
                </el-table-column>
                <el-table-column prop="address" label="联系人及联系方式" width="140">
                </el-table-column>
                <el-table-column prop="address" label="备注">
                </el-table-column>
              </el-table>
              <el-button type="primary" size="default" class="downBtn">
                <a href="/static/xmk.xlsx" download="项目库.xlsx">下载</a>
              </el-button>
            </div>
            <div class="allTab allTable">
              <h2>重庆市南岸专家服务基地项服务进度</h2>
              <el-table :data="tableData" class="tableStyle" border :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }">
                <el-table-column prop="date" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="name" label="申报单位" width="100">
                </el-table-column>
                <el-table-column prop="address" label="项目名称">
                </el-table-column>
                <el-table-column prop="address" label="服务专家">
                </el-table-column>
                <el-table-column prop="address" label="服务时间">
                </el-table-column>
                <el-table-column prop="address" label="服务进度">
                </el-table-column>
                <el-table-column prop="address" label="备注">
                </el-table-column>
              </el-table>
              <el-button type="primary" size="default" class="downBtn">
                <a href="/static/xmk.xlsx" download="项目库.xlsx">下载</a>
              </el-button>
            </div>
            <div class="allTab FontType">
              <p>5月29日，重庆市“‘菁’彩南岸”人才活动即将启幕。</p>
              <img src="../assets/images/re/img2.jpg" style="width: 100%;">
              <p>
                近年来，南岸区、重庆经开区认真学习贯彻习近平总书记关于新时代人才工作重要思想，围绕推进新时代西部大开发和成渝地区双城经济圈建设重大战略，坚持实施人才强区首位战略，积极发挥专家服务基地集聚人才和示范引领作用，为加快打造重庆高质量发展南部增长极提供人才支撑。
              </p>
              <img src="../assets/images/re/img1.jpg" style="width: 100%;">
              <p>
                本次活动由中共重庆市南岸区委组织部、重庆市南岸区人力资源和社会保障局、重庆经济技术开发区创新创业服务中心主办，将邀请技术技能领域专家人才、行业翘楚及知名企业家等50余人齐聚南岸，为推动四链深度融合、加快发展新质生产力添智赋能。
              </p>
              <p>
                本次活动围绕“智‘荟’南岸
                ‘菁’彩同行”主题，旨在搭建高水平专家服务平台，用好专家智力、技术、信息、管理等资源，打造“服务、交流、展示、创新”四位一体、多跨协同服务示范新场景，促进成渝地区双城经济圈智力共享，推动南岸区成为人才创新创业首选地。活动将集中展示专家人才创新创业成果，发布南岸区专家服务基地服务清单，签约专家服务基地合作项目、“青云计划”人才培养项目、重庆市南岸区&成都市龙泉驿区技能大师工作室联盟等一批人才合作项目，同时邀请国家级技术领军人才刘岩院长、中央财经大学绿色金融国际研究院王遥院长以“人才链支撑‘四链’融合发展，加快发展新质生产力”进行主题分享。
              </p>
            </div>
            <div class="allTab FontType">
              <h2>温馨提示</h2>
              <p>
                尊敬的重庆人才，您好!作为全市人才服务综合平台的“渝才荟”系统已在“渝快办”上正式上线。请您及时通过手机下载“渝快办”APP(新版)，顶部搜索框搜索“渝才荟”;或点击“办事”，选择“按部门”-“市委组织部”-“渝才荟”，查看您的新人才类别并享受人才服务。“重庆人才服务”微信小程序将在<span
                  class="numberFont">2024</span>年<span class="numberFont">6</span>月停用。如有疑问，可联系您的服务专员或拨打<span
                  class="numberFont">023-62817664</span>进行咨询，祝您使用愉快!
              </p>
              <div class="imgBox">
                <img src="../assets/images/re/zj1.png">
                <img src="../assets/images/re/zj2.png">
              </div>
            </div>
            <div class="allTab allTable">
              <el-table :data="lxrData" style="width: 100%">
                <el-table-column prop="name" label="联系单位" width="260">
                </el-table-column>
                <el-table-column prop="people" label="联系人" width="180">
                </el-table-column>
                <el-table-column prop="tel" label="联系电话">
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>


    </div>
    <!-- <el-image
      class="banner"
      :src="banner"
      :fit="fit">
    </el-image> -->
    <!-- <div class="info">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Resource',
  data() {
    return {
      fit: 'cover',
      banner: require('@/assets/images/service/banner.png'),
      tableData: [
        {
          date: '1'
        },
        {
          date: '2'
        },
        {
          date: '3'
        },
        {
          date: '4'
        },
      ],
      lxrData:[
        {
          name:'重庆市南岸区人力资源和社会保障局',
          people:'陈老师',
          tel:'023-62986606'
        },
        {
          name:'重庆市南岸人才市场有限公司',
          people:'吴老师',
          tel:'023-62875301'
        },
      ]
    }
  },
  created() {
    document.title = '点石科技';
  },
  methods: {

    handleSelect(index) {
      let tabArr = document.querySelectorAll('.allTab');
      for (let i = 0; i < tabArr.length; i++) {
        tabArr[i].classList.remove('active');
      }
      tabArr[index - 1].classList.add('active');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "fzxbfs";
  /*重命名了字体包*/
  src: url("../assets/font/fzxbfs.TTF");
}

@font-face {
  font-family: "fs";
  /*重命名了字体包*/
  src: url("../assets/font/fs.ttf");
}

.content {
  position: relative;
  min-width: 1200px;
  min-height: calc(100vh - 160px);

  .banner {
    width: 100%;
    min-width: 1200px;
    height: 1080px;
    position: absolute;
    z-index: 100;
  }

  .info {
    position: relative;
    z-index: 200;
    width: 100%;
    display: flex;
    justify-content: center;

    .detail {
      position: relative;
      width: 1200px;
      display: flex;
      flex-direction: column;

      .menu-item {
        font-size: 18px;
      }

      .downBtn {
        float: right;
        margin-top: 20px;

        a {
          text-decoration: none;
          color: #fff;
        }
      }

      .allTable {
        margin-left: -20px;
        width: 800px;
      }

      .imgBox {
        display: flex;
        justify-content: space-around;

        img {
          width: 35%;
          height: 50%;
          box-shadow: 0 0 2px #333;
          border-radius: 6px;
          margin-bottom: 20px;
          border: none;
        }
      }

      h2 {
        text-align: center;
        font-family: "fzxbfs";
        font-size: 29px;
      }

      .allTab {
        display: none;
        text-indent: 2em;
        line-height: 30px;
        font-weight: 400;
        width: 140%;
      }

      .FontType {
        font-size: 21px;
        font-family: "fs";
      }

      .active {
        display: block;
      }

      .numberFont {
        font-family: 'Times New Roman', Times, serif;
      }

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