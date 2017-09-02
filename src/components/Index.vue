<template>
  <div class="index" id="index">

    <!-- bind -->
    <div class="binddata" v-bind:title="message"> {{ message }} </div>

    <!-- 条件判断 -->
    <div class="binddata" v-if="message !== 1"> 条件判断 </div>

    <!-- 循环 -->
    <div class="bindlist" v-for="item in list">[循环] {{ item.text }}</div>

    <!-- 点击事件 -->
    <button class="rex-btn primary large" v-on:click="doSomething()">点击事件</button>

    <!-- 输入框绑定 -->
    <div class="form-content">
      <mu-text-field label="输入点儿什么吧?" v-model="name" labelFloat/><br/>
      <span v-if="name">输入的数据: {{ name }}</span>
    </div>

    <!-- 局部组件 -->
    <geek-box v-bind:exportKey="name"></geek-box>

    <!-- 第三方组件引用 -->
    <p>第三方组件引用(Muse-UI)</p>
    <div class="demo-sel">
      <mu-raised-button label="下拉框" ref="button" @click="toggle"/>
      <mu-popover :trigger="trigger" :open="open" @close="handleClose">
        <mu-menu>
          <mu-menu-item title="Refresh" />
          <mu-menu-item title="Send feedback" />
          <mu-menu-item title="Settings" />
          <mu-menu-item title="Help" />
          <mu-menu-item title="Sign out" />
        </mu-menu>
      </mu-popover>
    </div>

    <div class="demo-sheet">
      <mu-raised-button @click="openBottomSheet" label="底部菜单" />
      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-list @itemClick="closeBottomSheet">
          <mu-sub-header>
            请选择一个
          </mu-sub-header>
          <mu-list-item title="阴阳师"/>
          <mu-list-item title="贪吃蛇大作战"/>
          <mu-list-item title="一划到底"/>
          <mu-list-item title="全民斗地主"/>
        </mu-list>
      </mu-bottom-sheet>
    </div>


  </div>
</template>

<script>
  // 定义组件
  let geekBox = {
    template: '<div class="component" @click="change">{{msg}} {{exportKey}}</div>',
    props: ['exportKey'],
    data: function(){
      return {
        msg: '我是个局部组件'
      }
    },
    methods:{
        change:function(){
          this.$layer.alert('i am a component !' + this.exportKey);
        }
    }
  }
  export default {
    name: 'index',
    data () {
      return {
        message: '页面加载于 ' + new Date().toLocaleString(),
        list: [
          { text: '学习 JavaScript' },
          { text: '学习 jsx' },
          { text: '整个牛项目' }
        ],
        name: '',
        open: false,
        trigger: null,
        bottomSheet: false
      }
    },
    created(){
    },
    mounted () {
      this.trigger = this.$refs.button.$el
      console.log(this.$el)
      console.log(this.$data)
    },
    methods: {
      doSomething: function () {
        this.$layer.alert(new Date().toLocaleString())
      },
      toggle () {
        this.open = !this.open
      },
      handleClose (e) {
        this.open = false
      },
      closeBottomSheet () {
        this.bottomSheet = false
      },
      openBottomSheet () {
        this.bottomSheet = true
      }
    },
    components: {
      'geek-box': geekBox
    }
  }
</script>
