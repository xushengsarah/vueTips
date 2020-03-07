<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li class="core-docs">
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <!--新手指引首页-->
    <div class="mask-container-fixed system-guide-index show hide" id="system-guide-index">
      <div class="sidebar-tip-box">
          <div class="system-guide-box"></div>
      </div>
      <div class="system-guide-border hide"></div>
      <!--导航使用，气泡弹框,除了我的-->
      <div class="wind-item">
        <span class="item-icon-drop-down"></span>
        <div class="window-cont">
            <div class="item-header">
                <h4 class="item-title font16">导航使用</h4>
                <svg class="icon close-btn" aria-hidden="true">
                  <use xlink:href="#iconic_close_grey"></use>
                </svg>
            </div>
            <div class="item-body">
                <p class="iot-black">您可以点击logo,进入官方网站</p>
                <div class="dot-icon-box">
                    <span class="dot-icon active"></span>
                    <span class="dot-icon"></span>
                </div>
            </div>
            <div class="item-footer">
                <button class="btn btn-primary min">下一条</button>
            </div>
        </div>
      </div>
    </div>

    <!--新手指引检索-->
    <!-- <div class="mask-container-fixed system-guide-search show hide" id="system-guide-search"> -->
      <!-- <div class="mask-crop-panel"></div> -->
      <!-- <div class="sidebar-tip-box">
        <div class="system-guide-box"></div>
      </div>
      <div class="system-guide-border hide"></div> -->
      <!-- <div class="system-guide-panel"></div> -->
      <!--导航使用，气泡弹框,除了我的-->
      <!-- <div class="wind-item">
          <span class="item-icon-drop-down"></span>
          <div class="window-cont">
            <div class="item-header">
                <h4 class="item-title font16">导航使用</h4>
                <span class="close-btn aui-icon-not-through"></span>
            </div>
            <div class="item-body">
                <p class="iot-black">你可以点击导航名称进行功能模块的快速切换</p>
                <div class="dot-icon-box">
                    <span class="dot-icon active"></span>
                    <span class="dot-icon"></span>
                    <span class="dot-icon"></span>
                    <span class="dot-icon"></span>
                    <span class="dot-icon"></span>
                </div>
            </div>
            <div class="item-footer">
                <button class="btn btn-primary min">下一条</button>
            </div>
          </div>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$pubFuc.systemGuide(1)
      })
    }, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  h1, 
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
