<template>
  <div>
    <div class="header">
      <div class="content">
        <div class="left">
          <img class="logo" src="@/assets/images/header/logo.png" />
          <div class="menus">
            <router-link class="menu" active-class="active"  :to="{path:'/home'}">首页</router-link>
            <router-link class="menu no-pointer-events" active-class="active" :to="{path:'/scene'}" >全新场景</router-link>
            <router-link class="menu no-pointer-events" active-class="active" :to="{path:'/service'}" >共享服务</router-link>
            <router-link class="menu no-pointer-events" active-class="active" :to="{path:'/community'}" >社区</router-link>
            <router-link class="menu no-pointer-events" active-class="active" :to="{path:'/duomi'}" >点石科技+</router-link>
            <router-link class="menu" active-class="active" exact :to="{path:'/'}" >专家服务基地</router-link>
            <!-- <router-link class="menu" active-class="active" :to="{path:'/scene'}" >全新场景</router-link>
            <router-link class="menu" active-class="active" :to="{path:'/service'}" >共享服务</router-link>
            <router-link class="menu" active-class="active" :to="{path:'/community'}" >社区</router-link>
            <router-link class="menu" active-class="active" :to="{path:'/duomi'}" >点石科技+</router-link> -->
          </div>
        </div>
        <div class="right">
          <!-- <div class="find">我要找人</div> -->
          <!-- <div class="dmapp">点石App</div> -->
          <!-- <div class="popover">
            <div class="item">
              <div class="bar-border">
                <img class="bar" src="@/assets/images/header/employer.jpg" />
              </div>
              <p class="label">雇主端</p>
            </div>
            <div class="item">
              <div class="bar-border">
                <img class="bar" src="@/assets/images/header/worker.jpg" />
              </div>
              <p class="label">助手端</p>
            </div>
          </div> -->
          <!-- <a class="login" target="_blank" href="https://keeper.domy365.com/mvue/login/dm365" disabled>登录</a> -->
          <a class="login"  href="" disabled>登录</a>
          <div class="register">注册</div>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      isDisabled:true
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">

.no-pointer-events {
  pointer-events: none;
}
  .block {
    height: 74px;
  }
  .header {
    z-index: 2000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    min-width: 1200px;
    height: 74px;
    background: #FFFFFF;
    display: flex;
    align-content: center;
    justify-content: center;
    .content {
      width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .logo {
          width: 183px;
          height: 37px;
        }
        .menus {
          margin-left: 50px;
          height: 74px;
          display: flex;
          align-items: center;
          .menu {
            margin: 0 10px;
            min-width: 90px;
            text-align: center;
            height: 74px;
            font-size: 18px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            color: rgba(51,51,51,0.8);
            line-height: 74px;
            text-decoration: none;
          }
          .active {
            height: 71px;
            line-height: 74px;
            color: #3560CC;
            border-bottom: 3px solid #3560CC;
          }
        }

      }
      .right {
        display: flex;
        align-items: center;
        position: relative;
        .find {
          cursor: pointer;
          width: 84px;
          height: 30px;
          margin-right: 20px;
          background: rgba(53,96,204,0.1);
          border-radius: 15px;
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          color: #3560CC;
          line-height: 30px;
          text-align: center;
        }
        .dmapp {
          cursor: pointer;
          width: 92px;
          height: 22px;
          margin-right: 50px;
          font-size: 16px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
          &:hover + .popover {
            visibility: visible;
          }
          
        }
        .login {
          cursor: pointer;
          width: 60px;
          height: 30px;
          background: #3560CC;
          border-radius: 15px;
          font-size: 16px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          text-align: center;
          line-height: 30px;
          color: #FFFFFF;
          margin-right: 20px;
          text-decoration: none;
        }
        .register {
          cursor: pointer;
          width: 32px;
          height: 22px;
          font-size: 16px;
          text-decoration: none;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
        }

        .popover {
          visibility: hidden;
          width: 256px;
          height: 168px;
          position: absolute;
          box-sizing: border-box;
          top: 22px;
          left: -50px;
          padding: 24px 20px 0;
          background: url("~@/assets/images/header/popover.png");
          display: flex;
          justify-content: space-between;
          &:hover {
            visibility: visible;
          }
          .item {
            width: 98px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .bar-border {
              width: 98px;
              height: 98px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(0,0,0,0.15);
              .bar {
                width: 90px;
                height: 90px;
              }
            }
            .label {
              margin: 0;
              margin-top: 10px;
              text-align: center;
              height: 14px;
              font-size: 10px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              color: #9FA3A7;
              line-height: 14px;
              letter-spacing: 1px;
            }
          }
        }
      }

    }
  }

  @media screen and (max-width: 1200px){
    .header {
      position: relative;
    }
    .block {
      display: none;
    }
  }
</style>